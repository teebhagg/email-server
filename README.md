
# Express TypeScript API for Sending Emails with Brevo

This project is an Express API written in TypeScript that sends emails using the Brevo (formerly SendinBlue) API.

## Features

- TypeScript for static typing and improved developer experience
- Express for building the API server
- Brevo (SendinBlue) for email sending
- Environment variables for configuration

## Prerequisites

- Node.js (>=14.x)
- npm or yarn
- Brevo (SendinBlue) account and API key

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-typescript-brevo-email-api.git
cd express-typescript-brevo-email-api
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root of the project and add your Brevo API key:

```
BREVO_API_KEY=your_brevo_api_key
```

### Running the Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the server with hot-reloading enabled.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

This will compile the TypeScript code to JavaScript in the `dist` directory.

To start the production server, run:

```bash
npm start
# or
yarn start
```

### API Endpoints

#### Send Email

- **URL:** `/send-email`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Request Body:**
  ```json
  {
    "subject": "Your Email Subject",
    "message": "Your email message body",
    "fullName": "Sender's Full Name",
    "email": "sender@example.com"
  }
  ```

- **Response:**
  - **200 OK**: Email sent successfully.
  - **Error Responses**: Various error responses with relevant status codes and messages.

### Example Request

```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "Test Email",
    "message": "This is a test email.",
    "fullName": "John Doe",
    "email": "john.doe@example.com"
  }'
```

## Project Structure

- `src/`: Source code
  - `controllers/`: API controllers
    - `send-email.controllers.ts`: Controller for handling email sending
  - `routes/`: API routes
    - `routes.ts`: Defines the API routes
  - `index.ts`: Entry point for the application
- `dist/`: Compiled JavaScript code (after building)
- `.env`: Environment variables

## Dependencies

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Brevo (SendinBlue) API Client](https://github.com/sendinblue/APIv3-nodejs-library)
- [dotenv](https://github.com/motdotla/dotenv)

## Development Dependencies

- [ts-node](https://github.com/TypeStrong/ts-node)
- [nodemon](https://github.com/remy/nodemon)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/node](https://www.npmjs.com/package/@types/node)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Additional Notes:

1. Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name.
2. Ensure that the `curl` example matches the actual endpoint and request structure of your API.
3. Update any dependencies and project structure details as needed to match your actual project setup.