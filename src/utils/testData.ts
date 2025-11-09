import users from '../../test-data/users.json';

export const TestUsers = users;

export const testData = {
  user: {
    name: 'Bret',
    username: 'Bret',
    email: 'james.qa@example.com'
  },
  cart: {
    userId: 1,
    products: [
      { id: 101, title: 'Sauce Labs Backpack', quantity: 1 },
      { id: 102, title: 'Sauce Labs Bike Light', quantity: 2 }
    ]
  }
};