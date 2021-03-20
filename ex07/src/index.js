var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    if(prop != "tracks" && value != "") {
        collection[id][prop](value);
        return object;
    }
    if(prop == "tracks" && collection[id].hasOwnProperty(prop) == false) {
        collection[id][prop] = [];
        collection[id][prop].push(value);
        return object;
    }
    if(prop == "tracks" && value != "") {
        collection[id][prop].push(value);
        return object;
    }
    if(value == "")  {
        delete collection[id][prop];
        return object;
    }
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "ABBA"));
module.exports = updateRecords;