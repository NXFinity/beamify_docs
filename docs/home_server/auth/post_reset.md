---
sidebar_position: 4
---

# Password Reset

If you have forgotten your password, you can reset it using the password reset endpoint. You will need a valid reset token, which is typically sent to your email after requesting a password reset.

## Endpoint

`POST /auth/reset`

## Request Body
Send a JSON object with the following fields:

| Field       | Type   | Required | Description                       |
|-------------|--------|----------|-----------------------------------|
| token       | string | Yes      | The password reset token          |
| newPassword | string | Yes      | Your new password                 |

**Example:**
```json
{
  "token": "yourResetToken",
  "newPassword": "yourNewPassword"
}
```

## What Happens
- The server checks the reset token.
- If valid, your password is updated and you can log in with the new password.
- If invalid or expired, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "message": "Password reset successful." }
  ```
- **400 Bad Request** (invalid or expired token)
  ```json
  { "error": "Invalid or expired token." }
  ```

## Security Notes
- Passwords are securely hashed before storage.
- Never share your reset token or new password with anyone.

## Troubleshooting
- If you get `Invalid or expired token.`, request a new password reset.
- Make sure your new password meets security requirements.

---

Once your password is reset, you can log in with your new password.
