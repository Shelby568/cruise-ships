const { Ship, Port, Itinerary } = require('../src');

let dover
let calais
let itinerary
let ship
let port

beforeEach(() => {
      port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
  
    dover = {
      ...port,
      name: 'Dover',
      ships: []
    };
  
    calais = {
      ...port,
      name: 'Calais',
      ships: []
    };
  
    itinerary = {
        ports: [dover, calais]
    };
    
    ship = new Ship(itinerary);
  });

describe('Objects', () => {
    it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });
});

describe('Ship', () => {
    it('has a starting port', () => {
        const port = new Port('Dover')
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
      
        expect(ship.currentPort).toBe(port);
    });
    
    it('can set sail', () => {
        
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });

    it('can dock at another port', () => { 
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);
    
    });

    it('can\'t sail further than its itinerary', () => {
              
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });

    it('gets added to port on instantiation', () => {
        expect(dover.addShip).toHaveBeenCalledWith(ship);
      });
});   
    describe('Itinerary', () => {
    it('can have ports', () => {
        const dover = new Port(jest.fn())
        const calais = new Port(jest.fn())
        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
