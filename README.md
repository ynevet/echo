### NodeJS Echo Server Demo


This project is a web server built using Node.js and Express. It is designed to handle POST requests by responding with the user's message (payload).

This project is tested via `SuperTest` and `Jest`.

## Instructions

To install all dependencies, run:

```bash
npm i
```

To run the server, execute the following command:

```bash
npm run start
```
Or with watching:

```npm run start:watch```

### Testing

To manually test it, you can use `cURL`, for example:

```bash
curl -X POST -H "Content-Type: text/plain" -d "Hello World" http://localhost:3000/echo
  ```
Once executed, you should expect to receive the same message you sent, "Hello World," from the server.

To execute tests, run:

```bash
npm run test
```

Make sure to run these commands in the root directory of the project.
