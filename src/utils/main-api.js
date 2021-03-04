import { mainUrl } from './constants.js';
import BaseApi from './base-api.js';

class Api extends BaseApi {
  register(name, email, password) {
    return this._fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
  };

  auth(email, password) {
    return this._fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
  };

  logout() {
    return this._fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
    })
  };

  getProfile() {
    return this._fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json',
      }
    })
  };

  updateProfile(name, email) {
    return this._fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });
  }

  getSavedMovies() {
    return this._fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json',
      }
    })
  };

  saveMovie(movie) {
    return this._fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
  }

  deleteMovie(movieId) {
    return this._fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
    });
  }
}

export default new Api({
  baseUrl: mainUrl,
});