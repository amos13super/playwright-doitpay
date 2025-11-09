import { test, expect } from '@playwright/test';
import { UsersAPI } from '../../api/users.api';
import { testData } from '../../utils/testData';

test.describe('API - User Login Flow (Mock)', () => {
  test('User can login successfully with valid credentials', async ({ request }) => {
    const usersAPI = new UsersAPI(request);

    const result = await usersAPI.loginUser(testData.user.username, 'secret_sauce');
    expect(result.success).toBeTruthy();
    expect(result.message).toBe('Login successful');
  });

  test('User cannot login with invalid credentials', async ({ request }) => {
    const usersAPI = new UsersAPI(request);

    const result = await usersAPI.loginUser('invalid_user', 'wrong_password');
    expect(result.success).toBeFalsy();
    expect(result.message).toBe('Invalid username or password');
  });
});
