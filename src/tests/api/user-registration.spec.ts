import { test, expect } from '@playwright/test';
import { UsersAPI } from '../../api/users.api';
import { testData } from '../../utils/testData';

test.describe('API - User Registration Flow', () => {
  test('User can register successfully', async ({ request }) => {
    const usersAPI = new UsersAPI(request);

    const response = await usersAPI.registerUser(testData.user);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(testData.user.name);
    expect(body.username).toBe(testData.user.username);
  });
});
