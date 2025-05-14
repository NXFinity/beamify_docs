---
sidebar_position: 9
---

# Logout

The Beamify Server provides an endpoint to log out a user by invalidating their refresh token. This helps ensure that the user session is securely terminated.

## Endpoint

`POST /auth/logout`

## Request Body
Send a JSON object with the following field:

| Field        | Type   | Required | Description                |
|--------------|--------|----------|----------------------------|
| refreshToken | string | Yes      | The refresh token to invalidate |

**Example:**
```json
{
  "refreshToken": "yourRefreshToken"
}
```

## What Happens
- The server checks the provided refresh token.
- If valid, the refresh token is invalidated and the user is logged out.
- If invalid or already expired, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "message": "Logged out successfully" }
  ```
- **400 Bad Request** (missing or invalid refresh token)
  ```json
  { "error": "Missing or invalid refresh token" }
  ```

## Security Notes
- Always log out on untrusted devices to prevent unauthorized access.
- Logging out invalidates the refresh token, so it cannot be used to obtain new JWT tokens.

## Troubleshooting
- If you receive `Missing or invalid refresh token`, your session may have already expired or the token was already invalidated.
- If you cannot log out, try clearing your cookies or local storage and log in again.

---

Use this endpoint to securely end a user session and protect your account.
