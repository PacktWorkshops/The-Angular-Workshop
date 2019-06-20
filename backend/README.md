# ATA Backend

## Installation

1. Put this project in a directory called /backend in the root directory of any Angular project

2. Run `npm install` in this project directory

3. Initialize the database (skip if you want to use the static JSON provided)

If you want to start fresh. 

The first time will initialize the DB.
The second run will populate the DB.


```
npm run reset
npm run generate
```

## Running the server

From the Angular project root directory, run the server in a different tab than the front end.

```
node backend/bin/www
```

This server by default runs on port 4300.


In the same directory add a new file called `proxy.conf.json`. Add the following JSON to the file.

```
{
    "/api": {
        "target": "http://localhost:4300",
        "secure": false
    }
}
  
```

In your Angular project, proxy the requests to API.

```
 ng serve --proxy-config proxy.conf.json
```

## Developing with the REST API


A Postman Collection is provided. Import the collection into Postman to get documentation about REST endpoints.

`ATA_backend.postman_collection.json`

From the start, a dev user is created with the username `dev` and password `dev`.


## Building for production

```
ng build
```

Run the node server in production mode.

```
npm run prod
```

### Development

* nodemon must be installed globally `npm i -g nodemon`

```
npm run watch
```

To clear the DB and reinitilize after making changes to initilization scripts.

```
npm run reset
npm run generate
```






