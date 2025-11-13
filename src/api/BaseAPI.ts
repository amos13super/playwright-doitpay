import { APIRequestContext, expect } from '@playwright/test';

export class BaseAPI {
  constructor(protected request: APIRequestContext, protected baseURL: string) {}

  async get(endpoint: string, options = {}) {
    const response = await this.request.get(`${this.baseURL}${endpoint}`, options);
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async post(endpoint: string, data: any, options = {}) {
    const response = await this.request.post(`${this.baseURL}${endpoint}`, {
      data,
      ...options,
    });
    return response;
  }

  async put(endpoint: string, data: any, options = {}) {
    const response = await this.request.put(`${this.baseURL}${endpoint}`, {
      data,
      ...options,
    });
    return response;
  }

  async delete(endpoint: string, options = {}) {
    const response = await this.request.delete(`${this.baseURL}${endpoint}`, options);
    return response;
  }
}