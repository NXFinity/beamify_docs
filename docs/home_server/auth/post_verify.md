---
sidebar_position: 3
---

# Email Verification

After registering, users must verify their email address to activate their Beamify account. This is done using the verification code sent to your email.

## Endpoint

`POST /auth/verify`

## Request Body
Send a JSON object with the following fields:

| Field | Type   | Required | Description                                 |
|-------|--------|----------|---------------------------------------------|
| email | string | Yes      | Your email address                          |
| code  | string | Yes      | The verification code sent to your email    |

**Example:**
```json
{
  "email": "you@example.com",
  "code": "yourVerificationCode"
}
```

## What Happens
- The server checks the code and email.
- If valid, your account is marked as verified and you can log in.
- If invalid or expired, you receive an error message.

## Responses

- **200 OK**
  ```json
  { "message": "User verified successfully." }
  ```
- **400 Bad Request** (missing or invalid code)
  ```json
  { "error": "Invalid verification code." }
  ```
  or
  ```json
  { "error": "Verification code expired." }
  ```
  or
  ```json
  { "error": "User already verified." }
  ```
- **404 Not Found** (user not found)
  ```json
  { "error": "User not found." }
  ```

## Security Notes
- Verification codes expire after 15 minutes.
- You cannot log in until your account is verified.
- Never share your verification code with anyone.

## Troubleshooting
- If you get `Invalid verification code.`, check the code and try again.
- If you get `Verification code expired.`, request a new code.
- If you get `User not found.`, check your email address.

---

Once verified, you can log in and start using Beamify.
