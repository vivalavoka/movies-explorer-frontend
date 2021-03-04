class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers || {};
  }

  _fetch(url, options) {
    return fetch(url, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`${res.statusText}: ${res.status}`);
      });
  }
}

export default Api;
