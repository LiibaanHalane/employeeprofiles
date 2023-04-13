const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should create an Employee object with name, id, and email', () => {
    const employee = new Employee('John', 1, 'john@example.com');

    expect(employee.name).toEqual('John');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('john@example.com');
  });

  it('should get the name using getName()', () => {
    const employee = new Employee('John', 1, 'john@example.com');

    expect(employee.getName()).toEqual('John');
  });

  it('should get the id using getId()', () => {
    const employee = new Employee('John', 1, 'john@example.com');

    expect(employee.getId()).toEqual(1);
  });

  it('should get the email using getEmail()', () => {
    const employee = new Employee('John', 1, 'john@example.com');

    expect(employee.getEmail()).toEqual('john@example.com');
  });

  it('should get the role using getRole()', () => {
    const employee = new Employee('John', 1, 'john@example.com');

    expect(employee.getRole()).toEqual('Employee');
  });
});
