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

describe('Objects', () => {
    it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });
});

describe('Ship', () => {
    it('has a starting port', () => {
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
      
        expect(ship.currentPort).toBe(port);
    });
    
    it('can set sail', () => {
        
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });

    it('can dock at another port', () => {
       
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });

    it('can\'t sail further than its itinerary', () => {
              
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});   
    describe('Itinerary', () => {
    it('can have ports', () => {  
        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
