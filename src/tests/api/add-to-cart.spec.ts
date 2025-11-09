import { test, expect } from '@playwright/test';
import { CartAPI } from '../../api/cart.api';
import { testData } from '../../utils/testData';

test.describe('API - Add to Cart Flow', () => {
  test('User can add products to cart successfully', async ({ request }) => {
    const cartAPI = new CartAPI(request);

    const response = await cartAPI.addToCart(testData.cart);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.userId).toBe(testData.cart.userId);
  });
});
