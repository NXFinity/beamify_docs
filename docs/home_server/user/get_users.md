---
sidebar_position: 5
---

# List All Users

Retrieve a list of all users. This endpoint is typically restricted to admin users for user management purposes.

## Endpoint

`GET /users`

## Authentication
This endpoint requires an admin JWT token in the `Authorization` header:

```
Authorization: Bearer <admin JWT token>
```

## What Happens
- The server verifies your admin token.
- If valid, a paginated list of users is returned.
- If the token is missing, invalid, or not admin, you receive an error.

## Responses

- **200 OK**
  ```json
  [
    {
      "id": "userId123",
      "email": "user@example.com",
      "name": "Jane Doe",
      "createdAt": "2024-05-01T12:34:56Z",
      "verified": true
    },
    // ...more users
  ]
  ```
- **401 Unauthorized** (missing or invalid token)
  ```json
  { "error": "Unauthorized" }
  ```
- **403 Forbidden** (not an admin)
  ```json
  { "error": "Forbidden" }
  ```

## Security Notes
- Only admin users should have access to this endpoint.
- Never expose sensitive user data in the response.

## Troubleshooting
- If you get `Unauthorized` or `Forbidden`, check your token and permissions.

---

Use this endpoint for admin-level user management and oversight. 