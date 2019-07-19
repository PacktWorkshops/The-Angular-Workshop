const cuid = require('cuid');


const stops = [
    {
        location: "Apollo Ave",
        distance: 0.0
    },
    {
        location: "Oaks Bottom",
        distance: 3.0
    },
    {
        location: "Developer Dr.",
        distance: 5.0
    },
    {
        location: "Art Center",
        distance: 6.0
    }, 
    {
        location: "Main St.",
        distance: 6.5
    },
    {
        location: "Pioneer Square",
        distance: 10.0
    },
    {
        location: "Hamilton Way",
        distance: 12.0
    },
    {
        location: "Science Center",
        distance: 13.0
    },
    {
        location: "Osage Ave.",
        distance: 14.0
    },
    {
        location: "Fiji Way",
        distance: 14.5
    },
    {
        location: "Columbia Cirle",
        distance: 15.0
    },
    {
        location: "Division St.",
        distance: 16.0
    },
    {
        location: "College St.",
        distance: 18.0
    },
    {
        location: "Epic Ave.",
        distance: 20.0
    }
];

class greenLine {
    constructor() {
        return {   
            name: 'Green',
            id: 1,
            length: 20.0,
            capacity: 1200,
            direction: 'West',
            items: stops.map((stop) => {
                return {...stop, id: cuid()};
            })
        }
    }
}

class greenLineWest {
    constructor() {
        return {   
            name: 'Green',
            id: 0,
            length: 20.0,
            capacity: 1200,
            direction: 'East',
            items: stops.reverse().map((stop) => {
                return {...stop, id: cuid()};
            })
        }
    }
}


const lines = [new greenLine(), new greenLineWest()];
module.exports = lines;
