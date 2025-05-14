---
sidebar_position: 1
---

# User Registration

The Beamify Server provides a registration endpoint for new users to create an account. After registering, users must verify their email before logging in.

## Endpoint

`POST /auth/register`

## Request Body
Send a JSON object with the following fields:

| Field    | Type   | Required | Description                   |
|----------|--------|----------|-------------------------------|
| username | string | Yes      | Desired username (lowercase)  |
| email    | string | Yes      | Your email address            |
| password | string | Yes      | Your password                 |

**Example:**
```json
{
  "username": "yourusername",
  "email": "you@example.com",
  "password": "yourpassword"
}
```

## What Happens
- The server checks if the username or email is already in use.
- If available, a new user is created and a verification code is sent to the provided email.
- The user must verify their email before logging in.

## Responses

- **201 Created**
  ```json
  {
    "id": "...",
    "username": "yourusername",
    "email": "you@example.com",
    "message": "Verification code sent to email."
  }
  ```
- **400 Bad Request** (missing fields)
  ```json
  { "error": "All fields are required." }
  ```
- **403 Forbidden** (banned account)
  ```json
  { "error": "This account is banned." }
  ```
- **409 Conflict** (username or email in use)
  ```json
  { "error": "Username or email already in use." }
  ```

## Security Notes
- Passwords are securely hashed before storage.
- Email verification is required before login.
- Never share your password with anyone.

## Troubleshooting
- If you get `Username or email already in use.`, try a different username or email.
- If you do not receive a verification email, check your spam folder or contact support.

---

Once registered and verified, you can log in and start using Beamify.
