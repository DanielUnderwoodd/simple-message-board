# Message board

The message board consists of multiple named channels. Channels contain messages
written by users. Users can select a channel from a list of channels, view messages in
the selected channel, and submit new messages to the selected channel. Board is
implemented as a single-page web application in React and a simple backend in
NodeJS.

## Project Structure

```plaintext
project-root/
|-- back-end/
|   |-- Dockerfile
|   |-- ... (other backend files)
|
|-- front-end/
|   |-- Dockerfile
|   |-- ... (other frontend files)
|
|-- docker-compose.yml
|-- README.md
|-- ...


```

## Run Using Docker

Unzip The Project

```bash
  alphasense_assigment.zip
```

Go to the project directory

```bash
  cd assignment
```

Use docker-compose.yml

```bash
  docker-compose up || -d
```

The services will be accessible at:

Back-end: http://localhost:5000

Front-end: http://localhost:3000

## Run Locally

Unzip The Project

```bash
  alphasense_assigment.zip
```

Go to the project directory

```bash
  cd assignment
```

Go to the back-end && front-end directory

```bash
  cd back-end && front-end
```

Install dependencies

```bash
  npm install
```

Start the back-end && front-end

```bash
  node index.js && npm start


```

## API Reference

#### Get all channels

```http
  GET /api/pb/channels
```

#### Get specific channel

```http
  GET /api/pb/channel/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of channel to fetch |

#### Create Specific Channel

```http
  POST /api/pb/add-channel
```

| Parameter         | Type      | Description                                                                                                                                 |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`           | `string`  | **Required**. Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters                      |
| `description`     | `string`  | **Required**. No leading spaces, no consecutive spaces, with a length between 30 and 150 characters without leading or trailing whitespaces |
| `avatar`          | `jpg/png` | **Optional**                                                                                                                                |
| `backgroundImage` | `jpg/png` | **Optional**                                                                                                                                |

#### Create Message For Channel

```http
  POST /api/pb/hannel/add-message
```

| Parameter   | Type      | Description                                                                                                                                 |
| :---------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `alias`     | `string`  | **Required**. Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters                      |
| `channelId` | `string`  | **Required**.                                                                                                                               |
| `subject`   | `string`  | **Required**. Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters                      |
| `text`      | `string`  | **Required**. No leading spaces, no consecutive spaces, with a length between 30 and 150 characters without leading or trailing whitespaces |
| `avatar`    | `jpg/png` | **Optional**                                                                                                                                |
