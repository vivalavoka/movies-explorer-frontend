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
          .then((data) => {
            return Promise.reject({
              code: data.statusCode,
              message: data.message,
              data: data.validation || {},
            });
          })
      });
  }
}

export default Api;
