---
sidebar_position: 1
---

# Create User

Register a new user or create a user account. This endpoint is used for user sign-up or, in some cases, admin-initiated user creation.

## Endpoint

`POST /user`

## Request Body
Send a JSON object with the following fields:

| Field     | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| email     | string | Yes      | User's email address       |
| password  | string | Yes      | User's password            |
| name      | string | No       | User's display name        |

**Example:**
```json
{
  "email": "user@example.com",
  "password": "yourPassword123",
  "name": "Jane Doe"
}
```

## What Happens
- The server validates the input.
- If valid, a new user is created and a verification email may be sent.
- If the email is already registered, you receive an error.

## Responses

- **201 Created**
  ```json
  { "message": "User created successfully. Please verify your email." }
  ```
- **400 Bad Request** (missing or invalid fields)
  ```json
  { "error": "Invalid input" }
  ```
- **409 Conflict** (email already registered)
  ```json
  { "error": "Email already in use" }
  ```

## Security Notes
- Passwords must meet security requirements (length, complexity).
- Never share your password with anyone.

## Troubleshooting
- If you get `Email already in use`, try logging in or use a different email.
- If you don't receive a verification email, check your spam folder or use the resend verification endpoint.

---

Use this endpoint to register new users and start using Beamify.
