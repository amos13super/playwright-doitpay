import { BaseAPI } from './BaseAPI';

export class PostsAPI extends BaseAPI {
  async createPost(payload: any) {
    return this.post('/posts', payload);
  }

  async getPostById(id: number) {
    return this.get(`/posts/${id}`);
  }
}