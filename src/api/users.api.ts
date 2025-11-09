import { APIRequestContext } from '@playwright/test';

export class UsersAPI {
  constructor(private request: APIRequestContext) {}

  // Simulate Registration
  async registerUser(userData: any) {
    try {
      const response = await this.request.post('https://jsonplaceholder.typicode.com/users', { data: userData });
      return response;
    } catch (error) {
      throw new Error(`Registration failed: ${error}`);
    }
  }

  // Simulate Login (mocked - no auth in jsonplaceholder)
  async loginUser(username: string, password: string) {
    // In real scenario: check credentials; here we mock success
    try {
      const response = await this.request.get('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const user = users.find((u: any) => u.username === username);

      return {
        success: !!user,
        message: user ? 'Login successful' : 'Invalid username or password',
        user
      };
    } catch (error) {
      throw new Error(`Login failed: ${error}`);
    }
  }
}
