---
sidebar_position: 6
---

# Get User by ID

Retrieve information about a specific user by their ID. This endpoint is typically restricted to admin users for user management purposes.

## Endpoint

`GET /user/:id`

## Authentication
This endpoint requires an admin JWT token in the `Authorization` header:

```
Authorization: Bearer <admin JWT token>
```

## What Happens
- The server verifies your admin token.
- If valid, the user profile for the specified ID is returned.
- If the token is missing, invalid, not admin, or the user does not exist, you receive an error.

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
- **403 Forbidden** (not an admin)
  ```json
  { "error": "Forbidden" }
  ```
- **404 Not Found** (user does not exist)
  ```json
  { "error": "User not found" }
  ```

## Security Notes
- Only admin users should have access to this endpoint.
- Never expose sensitive user data in the response.

## Troubleshooting
- If you get `Unauthorized` or `Forbidden`, check your token and permissions.
- If you get `User not found`, verify the user ID is correct.

---

Use this endpoint for admin-level user lookup and management. 