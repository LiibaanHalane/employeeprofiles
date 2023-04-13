const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('should create a Manager object with name, id, email, and officeNumber', () => {
    const manager = new Manager('John', 1, 'john@example.com', 100);

    expect(manager.name).toEqual('John');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('john@example.com');
    expect(manager.officeNumber).toEqual(100);
  });

  it('should get the role using getRole()', () => {
    const manager = new Manager('John', 1, 'john@example.com', 100);

    expect(manager.getRole()).toEqual('Manager');
  });
});
