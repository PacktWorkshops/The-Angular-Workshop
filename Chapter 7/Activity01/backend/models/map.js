const cuid = require('cuid');


const blueStops = [
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


const redStops = [
    {
        location: "Tibbets Ave.",
        distance: 0.0
    },
    {
        location: "Wolf Rd.",
        distance: 1.0
    },
    {
        location: "La Cienaga Blvd.",
        distance: 2.5
    },
    {
        location: "Orbital Ave.",
        distance: 4.0
    }, 
    {
        location: "Main St.",
        distance: 7.5
    },
    {
        location: "Pioneer Square",
        distance: 10.0
    },
    {
        location: "Charles Pl.",
        distance: 11.0
    },
    {
        location: "River Rd.",
        distance: 12.5
    },
    {
        location: "Timonium Ave.",
        distance: 13.25
    },
    {
        location: "Martin Luther King Blvd.",
        distance: 14.5
    },
    {
        location: "Tacoma Pl.",
        distance: 17.0
    },
    {
        location: "Hamilton Way",
        distance: 18.5
    },
    {
        location: "Hawking Blvd.",
        distance: 20.0
    },
    {
        location: "Stadium Way",
        distance: 22.5
    },
    {
        location: "Forest Park",
        distance: 25.5
    },
    {
        location: "Dewey St.",
        distance: 32.0
    }
];



class blueLine {
    constructor() {
        return {   
            name: 'Blue',
            id: 1,
            length: blueStops[blueStops.length - 1].distance,
            capacity: 1200,
            direction: 'East/West',
            items: blueStops.map((stop) => {
                return {
                        ...stop, 
                        id: cuid(), 
                        tripCompletion:((stop.distance / blueStops[blueStops.length - 1].distance) * 100) 
                       };
            })
        }
    }
}

class redLine {
    constructor() {
        return {   
            name: 'Red',
            id: 1,
            length: redStops[redStops.length - 1].distance,
            capacity: 1600,
            direction: 'North/South',
            items: redStops.map((stop) => {
                return {
                        ...stop, 
                        id: cuid(),
                        tripCompletion: ((stop.distance / redStops[redStops.length - 1].distance) * 100)
                       };
            })
        }
    }
}


const lines = [new blueLine(), new redLine()];
module.exports = lines;
