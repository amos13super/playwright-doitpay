import { test, expect } from '@playwright/test';
import { UsersAPI } from '../../api/UsersAPI';
import { userSchema } from '../../schemas/userSchema';
import { validateSchema } from '../../utils/schemaValidator';

test.describe('Users API', () => {
  test('GET /users - should return all users with valid schema', async ({ request, baseURL }) => {
    const usersAPI = new UsersAPI(request, baseURL!);
    const response = await usersAPI.getAllUsers();

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(validateSchema(userSchema, body[0])).toBeTruthy();
  });
});
