---
sidebar_position: 8
---

# Refresh JWT Token

The Beamify Server provides an endpoint to refresh your JWT token using a valid refresh token. This allows you to maintain your session without logging in again.

## Endpoint

`POST /auth/refresh`

## Request Body
Send a JSON object with the following field:

| Field        | Type   | Required | Description                |
|--------------|--------|----------|----------------------------|
| refreshToken | string | Yes      | Your refresh token         |

**Example:**
```json
{
  "refreshToken": "yourRefreshToken"
}
```

## What Happens
- The server checks the refresh token.
- If valid, a new JWT token is issued.
- If invalid or expired, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "token": "<new JWT token>" }
  ```
- **400 Bad Request** (missing or invalid refresh token)
  ```json
  { "error": "Missing or invalid refresh token" }
  ```

## Security Notes
- Keep your refresh token secure and never share it.
- Use the new JWT token for authenticated requests.

## Troubleshooting
- If you get `Missing or invalid refresh token`, log in again to get a new token.

---

Use this endpoint to keep your session active without re-entering your credentials.
