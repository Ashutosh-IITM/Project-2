# Project-2

# My API Project

This project exposes an API endpoint that allows users to submit questions and file attachments via a POST request with `multipart/form-data`.

## Project Structure

```
my-api-project
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── apiController.js  # Handles incoming POST requests
│   ├── routes
│   │   └── apiRoutes.js      # Defines API routes
│   └── middleware
│       └── upload.js         # Middleware for handling file uploads
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/my-api-project.git
   ```

2. Navigate to the project directory:
   ```
   cd my-api-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your environment variables as needed.

2. Start the application:
   ```
   npm start
   ```

3. The API will be available at `https://your-app.vercel.app/api/`.

## API Endpoint

### POST /api/

- **Description**: Accepts a question and file attachments.
- **Request**: `multipart/form-data`
  - **Fields**:
    - `question`: The question being submitted.
    - `file`: The file attachment (optional).

- **Response**: JSON object containing the answer.

## License

This project is licensed under the MIT License.
