const loki = require('lokijs');
const lfsa = require('lokijs/src/loki-fs-sync-adapter.js');
const cuid = require('cuid');
const path = require('path');
const utils = require('./utils');


const mapDB = new loki(path.join(__dirname, 'db', 'map.json'), {
    adapter: new lfsa(),
    autoload: true,
    autosave: true,
    autosaveInterval: 4000
});

function getMapCollection() {
    let maps = mapDB.getCollection('maps');
    if (maps === null) {
        maps = mapDB.addCollection('maps');
        console.log('Map database was created'.green);
    }
    return maps;
}

const trainDB = new loki(path.join(__dirname, 'db', 'train.json'), {
    adapter: new lfsa(),
    autoload: true,
    autosave: false
});

function getTrainCollection() {
    let trains = trainDB.getCollection('trains');
    if (trains === null) {
        trains = trainDB.addCollection('trains');
        console.log('Train database was created'.green);
    }
    return trains;
}

const getStartTimes = function(startHr, endHr) {
    const times = [];
    let hr = startHr;
    while (hr <= endHr) {
        for (let min = 0; min < 50; min += 15) {
            times.push({
                hours: hr,
                mins: min
            });
        }
        hr++;
    }
    return times;
}
  


class Train {
    constructor() {}

    init(maps, cb) {

        const collection = getTrainCollection();

        Promise.all(maps.map((line, mapIndex) => {
            const startTimes = getStartTimes(4, 23);
            return Promise.all(startTimes.map((start, timeIndex) => {
                return this.create(line, start, line.direction, collection);
            }))
        })).then(()=> {
            const trains = getTrainCollection();
            const lines = trains.chain().data();
            console.log('Train schedules created'.green);
            cb(lines);
        })

    }

    create(line, start, direction, collection) {
      return new Promise((res, rej) => {
        let getTraffic = function(time) {
 
            if (time.getHours() < 7) {
                return Math.floor(Math.random() * 20) + 1;
            }
            else if (time.getHours() < 8) {
                return Math.floor(Math.random() * 380) + 1;
            }
            else if (time.getHours() >= 8 && time.getHours() <= 13) {
                return Math.floor(Math.random() * 1200) + 1; 
            }
            else if (time.getHours() > 23) {
                return Math.floor(Math.random() * 120) + 1;
            }
            else if (time.getHours() > 20) {
                return Math.floor(Math.random() * 240) + 1;
            }
            else if (time.getHours() > 13) {
                return Math.floor(Math.random() * 720) + 1;
            }
            else {
                return Math.floor(Math.random() * 100) + 1;
            }
        }
        let train = {
            direction: direction,
            capacity: line.capacity
        };
        let startTime = new Date();

        let current =  new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), start.hours, start.mins, 0));
        
        try {

            train.startTime = current;
            train.items = line.items.map((stop) => {
                let output = { ...stop, time: current, averageTraffic: getTraffic(current), transfer: (stop.location.includes('Science') || stop.location.includes('Columbia') ? true : false ) };
                current = new Date(current.setTime(new Date(current).getTime() + (( Math.floor(Math.random() * 7) + 2) * 60 * 1000)));
                return output; 
            });
            train.endTime = train.items.pop().time;

            const id = cuid();
            collection.insert({ ...train, id: id });
            trainDB.saveDatabase(()=>{
                res({ ...train, id: id });
            });


        } catch(e) {
            rej(e);
        }

      });
    }

    get(req, res, next) {
        const trains = getTrainCollection();
        const lines = trains.chain().data();
        res.status(200).json(lines);
    }

    getById(req, res, next) {
        const trains = getTrainCollection();
        const train = utils.first(trains.find({ id: req.params.id }));
        res.status(200).send(utils.serialize(train));
    }

    getTrip(req, res, next) {

        if (!req.query.direction) {
            res.status(422).send({
                success: false,
                error: 'Missing direction query parameter. Please format query like ?from=Date&to=Date&direction=east|west.'
            });

            return;
        }
        if (!req.query.from) {
            res.status(422).send({
                success: false,
                error: 'Missing from query parameter. Please format query like ?from=Date&to=Date&direction=east|west.'
            });

            return;
        }

        if (!req.query.to) {
            res.status(422).send({
                success: false,
                error: 'Missing to query parameter. Please format query like ?from=Date&to=Date&direction=east|west.'
            });

            return;
        }

        const trains = getTrainCollection();
        const train = trains.find({'$and' : [{ direction: req.query.direction },
                                             { startTime: { '$gte': req.query.from } }, 
                                             { startTime: { '$lte': req.query.to } }] });
        res.status(200).send(utils.serializeArray(train));
    }


}

module.exports = Train;