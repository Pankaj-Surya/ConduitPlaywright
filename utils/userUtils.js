function generateUniqueUser(prefix = 'user') {
    const random = Math.floor(Math.random() * 10000);
    const username = `${prefix}${random}`;
    const email = `${username}@test.com`;
    const password = 'Test1234'; // or allow this as a parameter
  
    return { username, email, password };
  }
  
  module.exports = { generateUniqueUser };
  