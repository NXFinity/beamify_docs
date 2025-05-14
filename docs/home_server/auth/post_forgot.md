---
sidebar_position: 6
---

# Forgot Password

If you forget your password, you can request a password reset email using this endpoint. You will receive a reset token via email if your account exists.

## Endpoint

`POST /auth/forgot`

## Request Body
Send a JSON object with the following field:

| Field | Type   | Required | Description         |
|-------|--------|----------|---------------------|
| email | string | Yes      | Your email address  |

**Example:**
```json
{
  "email": "you@example.com"
}
```

## What Happens
- The server checks if the email is associated with a user account.
- If found, a password reset email is sent (with a reset token).
- If not found, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "message": "Password reset email sent (placeholder)" }
  ```
- **404 Not Found** (user not found)
  ```json
  { "error": "Email not found." }
  ```

## Security Notes
- Never share your reset token with anyone.
- If you do not receive the email, check your spam folder.

## Troubleshooting
- If you get `Email not found.`, check your email address or register a new account.
- If you do not receive the email, contact support.

---

Once you receive the reset token, use it with the password reset endpoint to set a new password.
