import { mainUrl } from './constants.js';
import BaseApi from './base-api.js';

class Api extends BaseApi {
  register(name, email, password) {
    return this._fetch(`${this._baseUrl}/signup`, {
      credentials: 'include',
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
      credentials: 'include',
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
      credentials: 'include',
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json'
      },
    })
  };

  getProfile() {
    return this._fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json',
      }
    })
  };

  updateProfile(name, email) {
    return this._fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
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
      credentials: 'include',
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/json',
      }
    })
  };

  saveMovie(movie) {
    return this._fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
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
      credentials: 'include',
      method: 'DELETE',
    });
  }
}

export default new Api({
  baseUrl: mainUrl,
});
