## Small news finder

#### Prerequisites

- apiKey from [https://newsapi.org/](https://newsapi.org/)

#### Usage

- First time:

  ```sh
  chmod +x ./start.sh
  ```

- Install dependencies

  ```sh
  npm install
  ```

- Start Server

  ```sh
  npm start
  ```

  - You will be prompted for you newsapi.org apiKey when you first start the server. Once you enter it, you will not receive the prompt.


***

Testing

- Watcher
  
  ```sh
  npm test
  ```

- Show Coverage

  ```sh
  npm run test:coverage
  ```