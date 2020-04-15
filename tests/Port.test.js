const { Ship, Port, Itinerary } = require('../src');

let dover
let calais
let port
let itinerary
let ship

beforeEach(() => {
    dover = new Port('dover'),
    calais = new Port('calais'),
    port = new Port('dover'),
    itinerary = new Itinerary([dover, calais]),
    ship = new Ship(itinerary)
});

describe('Ports', () => {
    it('can add a ship', () => {
        const ship = jest.fn();

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const titanic = jest.fn()
        const queenMary = jest.fn()
        
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});