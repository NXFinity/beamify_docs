---
sidebar_position: 2
---

# Getting Started

Welcome to the Beamify Server! This guide will help you set up and run the backend server for Beamify.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **MongoDB** (local or remote instance)
- (Optional) **Redis** for caching and queues
- **Git**

## 1. Clone the Repository

```bash
git clone https://github.com/NXFinity/beamify_server.git
cd beamify_server
```

## 2. Install Dependencies

Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

## 3. Configure Environment Variables

Copy the example environment file and edit it as needed:
```bash
cp .env.example .env
```
Edit `.env` to set your MongoDB URI, JWT secrets, and other configuration values.

## 4. Run the Server

### Development Mode (with hot reload)
```bash
npm run dev
# or
yarn dev
```

### Production Mode
```bash
npm run build
npm start
# or
yarn build
yarn start
```

The server will start on the port specified in your `.env` file (default: 4000).

## 5. Troubleshooting

- **MongoDB connection errors:** Ensure MongoDB is running and your URI is correct in `.env`.
- **Port in use:** Change the `PORT` value in your `.env` file.
- **Missing dependencies:** Run `npm install` or `yarn install` again.

---

You're now ready to start building with the Beamify backend! For more details, see the rest of the documentation.
