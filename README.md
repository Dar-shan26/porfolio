# Darshan Patidar Portfolio

Clean MERN portfolio project with a Vite React frontend and an Express/Nodemailer backend.

## Project Structure

```text
PORTFOLIO/
  client/
  server/
  README.md
  .gitignore
  package.json
  render.yaml
```

## Local Setup

Install root, client, and server dependencies:

```bash
npm run install:all
```

Create the backend environment file:

```bash
copy server\.env.example server\.env
```

Fill in:

```env
PORT=5000
EMAIL_USER=
EMAIL_PASS=
RECEIVER_EMAIL=
CLIENT_URL=http://127.0.0.1:5173
```

Optional client env file:

```bash
copy client\.env.example client\.env
```

Leave `VITE_API_URL` empty for the normal local setup because Vite proxies `/api` to the backend.

## Run Locally

Run frontend and backend together:

```bash
npm run dev
```

Run frontend only:

```bash
npm run client
```

Run backend only:

```bash
npm run server
```

Frontend: `http://127.0.0.1:5173`

Backend API: `http://localhost:5000/api`

Backend health check: `http://localhost:5000/api/health`

## Production Build

Build the React frontend and install server dependencies:

```bash
npm run build
```

Start the production server:

```bash
$env:NODE_ENV="production"; npm start
```

In production, Express serves the built React app from `client/dist` and keeps the API under `/api`.

## Render Deployment

This repo includes `render.yaml`.

Use these settings if creating the service manually:

```text
Build Command: npm run build
Start Command: npm start
Environment: Node
```

Add these environment variables in Render:

```env
NODE_ENV=production
PORT=5000
CLIENT_URL=*
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
RECEIVER_EMAIL=receiver_email
```

For Gmail, use an app password instead of your normal account password.
