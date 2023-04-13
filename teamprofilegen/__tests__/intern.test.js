const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should create an Intern object with name, id, email, and school', () => {
    const intern = new Intern('Jane', 2, 'jane@example.com', 'My University');

    expect(intern.name).toEqual('Jane');
    expect(intern.id).toEqual(2);
    expect(intern.email).toEqual('jane@example.com');
    expect(intern.school).toEqual('My University');
  });

  it('should get the school using getSchool()', () => {
    const intern = new Intern('Jane', 2, 'jane@example.com', 'My University');

    expect(intern.getSchool()).toEqual('My University');
  });

  it('should get the role using getRole()', () => {
    const intern = new Intern('Jane', 2, 'jane@example.com', 'My University');

    expect(intern.getRole()).toEqual('Intern');
  });
});
