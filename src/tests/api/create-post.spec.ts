import { test, expect } from '@playwright/test';
import { PostsAPI } from '../../api/PostsAPI';

test.describe('Posts API', () => {
  test('POST /posts - should create a new post successfully', async ({ request, baseURL }) => {
    const postsAPI = new PostsAPI(request, baseURL!);

    const payload = {
      title: 'Automation Test Post',
      body: 'This is created via Playwright API test',
      userId: 1,
    };

    const response = await postsAPI.createPost(payload);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
  });
});
