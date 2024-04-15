const fetch = require('node-fetch');

class RestClient {
  constructor(baseURL, options = {}) {
    this.baseURL = baseURL;
    this.options = options;
  }

  async request(method, path, body = null, headers = {}) {
    const url = new URL(path, this.baseURL);

    const requestOptions = {
      method,
      headers: { ...this.options.headers, ...headers },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
      requestOptions.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url.toString(), requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  async get(path, headers = {}) {
    return this.request('GET', path, null, headers);
  }

  async post(path, body, headers = {}) {
    return this.request('POST', path, body, headers);
  }

  async put(path, body, headers = {}) {
    return this.request('PUT', path, body, headers);
  }

  async delete(path, headers = {}) {
    return this.request('DELETE', path, null, headers);
  }
}

module.exports = RestClient;
