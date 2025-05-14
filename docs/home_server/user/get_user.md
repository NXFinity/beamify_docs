---
sidebar_position: 2
---

# Get Current User

Retrieve information about the currently authenticated user. This endpoint is typically used to display user profile data in the app.

## Endpoint

`GET /user`

## Authentication
This endpoint requires a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your JWT token>
```

## What Happens
- The server verifies your JWT token.
- If valid, your user profile information is returned.
- If the token is missing or invalid, you receive an error.

## Responses

- **200 OK**
  ```json
  {
    "id": "userId123",
    "email": "user@example.com",
    "name": "Jane Doe",
    "createdAt": "2024-05-01T12:34:56Z",
    "verified": true
  }
  ```
- **401 Unauthorized** (missing or invalid token)
  ```json
  { "error": "Unauthorized" }
  ```

## Security Notes
- Never share your JWT token.
- Always use HTTPS to protect your credentials.

## Troubleshooting
- If you get `Unauthorized`, your token may be expired or missing. Log in again to get a new token.

---

Use this endpoint to fetch the current user's profile and status.
