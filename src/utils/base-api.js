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
        return res.json()
          .catch((err) => Promise.reject({
            code: res.status,
            message: err.message,
          }))
          .then(({ message }) => Promise.reject({
            code: res.status,
            message,
          }))
      });
  }
}

export default Api;
