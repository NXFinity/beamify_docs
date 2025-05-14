---
sidebar_position: 5
---

# Resend Verification Email

If you did not receive your verification email or your code expired, you can request a new verification code to be sent to your email address.

## Endpoint

`POST /auth/resend`

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
- The server checks if the email is associated with an unverified user.
- If valid, a new verification code is sent to your email.
- If the user is already verified or not found, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "message": "Verification code resent to email." }
  ```
- **400 Bad Request** (missing or invalid email)
  ```json
  { "error": "Email is required." }
  ```
- **404 Not Found** (user not found)
  ```json
  { "error": "User not found." }
  ```
- **400 Bad Request** (already verified)
  ```json
  { "error": "User already verified." }
  ```

## Security Notes
- Never share your verification code with anyone.
- If you do not receive the email, check your spam folder.

## Troubleshooting
- If you get `User not found.`, check your email address.
- If you get `User already verified.`, you can log in.

---

Once you receive the new code, use it with the verification endpoint to activate your account.
