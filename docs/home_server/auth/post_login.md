---
sidebar_position: 2
---

# User Login

The Beamify Server provides a login endpoint to authenticate users and issue JWT tokens for secure access to the platform.

## Endpoint

`POST /auth/login`

## Request Body
Send a JSON object with the following fields:

| Field    | Type   | Required | Description                |
|----------|--------|----------|----------------------------|
| username | string | Yes      | Your username (lowercase)  |
| password | string | Yes      | Your password              |

**Example:**
```json
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

## What Happens
- The server checks your credentials.
- If valid, you receive a JWT token and a refresh token (set as an HTTP-only cookie).
- If invalid, you receive an error message.

## Responses

- **200 OK**
  ```json
  {
    "token": "<JWT token>",
    "user": {
      "_id": "...",
      "username": "yourusername",
      "email": "you@example.com"
    }
  }
  ```
- **400 Bad Request** (missing fields)
  ```json
  { "error": "Username and password are required." }
  ```
- **401 Unauthorized** (invalid credentials)
  ```json
  { "error": "Invalid credentials." }
  ```
- **403 Forbidden** (banned account)
  ```json
  { "error": "Your account is banned.", "reason": "..." }
  ```

## Security Notes
- The JWT token should be sent as a Bearer token in the `Authorization` header for authenticated requests.
- The refresh token is stored as an HTTP-only cookie for session renewal.
- Never share your password or tokens with anyone.

## Troubleshooting
- If you get `Invalid credentials.`, check your username and password.
- If you get `Your account is banned.`, contact support.
- Ensure your account is verified if required.

---

Once logged in, you can access protected endpoints and use the Beamify platform.
