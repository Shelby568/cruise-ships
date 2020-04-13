class Port {
    constructor(port){
        this.port = port;
        this.ships = [];
    }

    addShip(ship) {
       this.ships.push(ship);
    }

    removeShip(ship) {
        this.ships.pop(ship);
    }
};

module.exports = { Port };