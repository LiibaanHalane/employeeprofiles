const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should create an Engineer object with name, id, email, and github username', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');

    expect(engineer.name).toEqual('John');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('john@example.com');
    expect(engineer.github).toEqual('john-github');
  });

  it('should get the GitHub username using getGithub()', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');

    expect(engineer.getGithub()).toEqual('john-github');
  });

  it('should get the role using getRole()', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});
