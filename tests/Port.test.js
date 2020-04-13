const { Ship, Port, Itinerary } = require('../src');

let dover
let calais
let port
let itinerary
let ship
let titanic
let queenMary

beforeEach(() => {
    dover = new Port('dover'),
    calais = new Port('calais'),
    port = new Port('dover'),
    itinerary = new Itinerary([dover, calais]),
    ship = new Ship(itinerary)
    titanic = {},
    queenMary = {}
});

describe('Ports', () => {
    it('can add a ship', () => {
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
       
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });

    it('gets added to port on instantiation', () => {
        expect(dover.ships).toContain(ship);
      });
});