
# URL Shortener

## Description
A simple URL shortener built using Node.js, Express, and MongoDB. This project allows users to input a long URL and generates a shortened URL that can be shared easily.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
To get started with this project, clone the repository and install the required dependencies using npm or yarn.

## Features
- Shorten long URLs
- Store shortened URLs in a MongoDB database
- Retrieve shortened URLs by ID
- Validate user input

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/URL-Shortener.git
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Set up your local database:
    - Get the connection string of your MongoDB (I hope you know that, it's something like "mongodb://127.0.0.1:27017/your-database-name").
    - Go to routes/dbconnect.js
    - Replace the connection placeholder by your actual connection string.
    
## Usage
1. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Input a long URL in the text field and click the "Shorten" button.
3. The shortened URL will be displayed on the page.

## API Documentation

### POST /shorten
Shorten a long URL.

**Request Body:**
```json
{
   "url": "string"
}
```

**Response:**
```json
{
   "shortId": "string"
}
```

### GET /:shortId
Retrieve a shortened URL by ID.

**Response:**
```json
{
   "redirectUrl": "string"
}
```

## Database Schema
The database schema is defined in the `models/Url.js` file. The schema consists of two fields:
- `shortId`: a unique identifier for the shortened URL
- `redirectUrl`: the original long URL

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
