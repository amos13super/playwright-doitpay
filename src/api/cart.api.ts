import { APIRequestContext } from '@playwright/test';

export class CartAPI {
  constructor(private request: APIRequestContext) {}

  async addToCart(cartData: any) {
    try {
      const response = await this.request.post('https://jsonplaceholder.typicode.com/posts', { data: cartData });
      return response;
    } catch (error) {
      throw new Error(`Add to Cart failed: ${error}`);
    }
  }

  async getCart(cartId: number) {
    try {
      const response = await this.request.get(`https://jsonplaceholder.typicode.com/posts/${cartId}`);
      return response;
    } catch (error) {
      throw new Error(`Get Cart failed: ${error}`);
    }
  }
}