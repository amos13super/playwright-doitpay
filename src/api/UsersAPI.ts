import { BaseAPI } from './BaseAPI';

export class UsersAPI extends BaseAPI {
  async getAllUsers() {
    return this.get('/users');
  }

  async getUserById(id: number) {
    return this.get(`/users/${id}`);
  }
}
