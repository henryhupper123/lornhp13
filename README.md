# RestClient

`RestClient` is a simple yet powerful package for making HTTP requests to RESTful APIs from Node.js applications.

## Installation

You can install `RestClient` via npm:

```bash
npm install @username/rest-client
```

## Usage

```javascript
const RestClient = require('@username/rest-client');

const client = new RestClient('https://api.example.com');

(async () => {
  try {
    const response = await client.get('/users');
    console.log(response);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

### Creating a Client

To create a new REST client, simply instantiate the `RestClient` class with the base URL of your API:

```javascript
const client = new RestClient('https://api.example.com');
```

### Making Requests

`RestClient` supports common HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`. Here's how you can use them:

```javascript
// GET request
const response = await client.get('/endpoint');

// POST request with a JSON payload
const response = await client.post('/endpoint', { key: 'value' });

// PUT request
const response = await client.put('/endpoint', { key: 'updated value' });

// DELETE request
const response = await client.delete('/endpoint');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
