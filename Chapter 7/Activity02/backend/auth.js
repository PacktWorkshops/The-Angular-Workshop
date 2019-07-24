const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const cuid = require('cuid');
const colors = require('colors');
const path = require('path');
const utils = require('./utils');

const userDB = new loki(path.join(__dirname, 'db', 'user.json'), {
    adapter: new lfsa(),
    autoload: true,
    autosave: true,
    autosaveInterval: 4000,
});

const sessionDB = new loki(path.join(__dirname, 'db', 'session.json'), {
    autoload: true,
    autosave: true,
    autosaveInterval: 4000
});


function getUserCollection() {
    let users = userDB.getCollection('users');
    if (users === null) {
      users = userDB.addCollection('users');
      console.log('User database was created'.green);
    }
    return users;
  }

function getSessionCollection() {
    let sessions = sessionDB.getCollection('sessions');
    if (sessions === null) {
        sessions = sessionDB.addCollection('sessions');
        console.log('Session database was created'.green);
    }
    return sessions;
}
  

class Session {
    constructor() {}
    init(cb) {

        const users = getUserCollection();
        const user = {
            id: cuid(),
            firstName: 'Developer',
            lastName: 'Extraordinaire',
            username: 'dev',
            password: utils.generateHash('dev')
          };
        users.insert(user);
        userDB.saveDatabase(()=>{
            console.log('Dev user created'.green);
            cb();
        });

 
    }
    validate(req, res, next) {

        const sessions = getSessionCollection();
        const session = sessions.findOne({ user: req.session.userId, session: req.cookies['connect.sid'] }) || 
        sessions.findOne({ user: req.session.userId }); // for dev user

        if (req.session.authenticated && session ) {
            res.status(200).send({ success: true });
        } else {
            res.status(401).send('Unauthorized');
        }

    }
    signup(req, res, next) {

        passport.use(
          'loki-local-signup',
          new Strategy((request, response, done) => {
            const users = getUserCollection();
            const sessions = getSessionCollection();
            let hasSession = false;
            let hasUser = false;

            let user = utils.first(users.find({ username: req.body.username }));
      
            if (user && req.body.username === user.username) {
              console.log('That username is already taken'.red);
              res.status(409).json({ success: false });
              return done(null, false);
            }
      
            user = {
              id: cuid(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              username: req.body.username,
              password: utils.generateHash(req.body.password)
            };
      
            users.insert(user);

            sessions.insert({
                user: user.id,
                session: req.cookies['connect.sid']
            });

            req.session.authenticated = true;
            req.session.userId = user.id;

            userDB.saveDatabase(() => {
                
                if (hasSession) {
                    res.status(200).json(utils.serialize(user));
                    done(null, user);
                }
                hasUser = true;
                
                // TODO: redirect?
            }).next(()=> {
                console.log('User account successfully created'.green);
            });

            sessionDB.saveDatabase(() => {
                if (hasUser) {
                    res.status(200).json(utils.serialize(user));
                    done(null, user);
                }
                hasSession = true;
                console.log('Session started'.green);
            })

          })
        );
        passport.authenticate('loki-local-signup')(req, res, next);   

    }
    login(req, res, next) {
        passport.use(
            'loki-local-login',
            new Strategy((request, response, done) => {
              const users = getUserCollection();
              const sessions = getSessionCollection();
              const user = utils.first(users.find({ username: req.body.username }));
            
              if (!user) {
                console.log('No user found'.red);
                res.status(401).send('Unauthorized');
                return done(null, false);
              }

              if (user && utils.validPassword(req.body.password, user.password)) {
         
                console.log(`${user.username} successfully logged in`.green);
          
                sessions.insert({
                    user: user.id,
                    session: req.cookies['connect.sid']
                });

                req.session.authenticated = true;
                req.session.userId = user.id;
               
                res.status(200).json(utils.serialize(user));
                return done(null, user);

              } else {
                console.log('Unauthorized'.red);
                return done(null, false);
              }
            })
          );
          passport.authenticate('loki-local-login')(req, res, next);
  
          return userDB;

    }
    logout(req, res) {

        if (req.session.authenticated) {
            const sessions = getSessionCollection();
            const session = sessions.find({ user: req.session.userId, session: req.cookies['connect.sid'] });
            req.session.authenticated = false;

            if (session) {
                sessions.remove(session);
            }

            req.logOut();
 
            req.session.destroy(function (err) {
                if (err) {
                    res.status(500).send('Server Error');
                } else {
                    res.status(200).json({ success: true })
                }
            });
        }
        else {
            res.redirect( '/' );
        }


    }
}


module.exports = Session;