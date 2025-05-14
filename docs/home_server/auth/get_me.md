---
sidebar_position: 7
---

# Get Current User (Me)

The Beamify Server provides an endpoint to fetch the current user's information based on the provided JWT token.

## Endpoint

`GET /auth/me`

## Required Headers

| Header         | Value                        | Required | Description                  |
|---------------|------------------------------|----------|------------------------------|
| Authorization | Bearer &lt;JWT token&gt;         | Yes      | Your authentication token    |

**Example:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

## What Happens
- The server verifies the JWT token.
- If valid, it returns basic user information.
- If invalid or missing, you receive an error message.

## Responses

- **200 OK**
  ```json
  {
    "id": "...",
    "username": "yourusername",
    "email": "you@example.com"
  }
  ```
- **401 Unauthorized** (invalid or missing token)
  ```json
  { "error": "No token provided" }
  ```
  or
  ```json
  { "error": "Invalid or expired token" }
  ```

## Security Notes
- Always keep your JWT token secure and never share it.
- Use the token received from the login endpoint.

## Troubleshooting
- If you get `No token provided`, ensure you are sending the Authorization header.
- If you get `Invalid or expired token`, log in again to get a new token.

---

Use this endpoint to fetch your user info for authenticated sessions and client apps.
