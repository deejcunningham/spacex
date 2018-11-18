// TODO:
// - define class to hold launch data that matters
// - define class to hold launches
// - define function to fetch launch info
// - present in table

class Launch {
    constructor(date, time, name, cargo, cargoUrl, success) {
        this.time = "";
        this.date = "";
        this.name = "";
        this.cargo = "";
        this.cargoUrl = "";
        this.success = new Boolean();
    }
}

function getLaunch() {
    // make API request
    // create launch object && assign data
}