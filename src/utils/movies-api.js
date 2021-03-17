import { moviesUrl } from './constants.js';
import BaseApi from './base-api.js';

class Api extends BaseApi {
  getMovies() {
    return this._fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
    })
  };
}

export default new Api({
  baseUrl: moviesUrl,
});
