---
sidebar_position: 7
---

# Change Password

Change the password for the currently authenticated user. This endpoint allows users to securely update their password.

## Endpoint

`PATCH /user/password`

## Authentication
This endpoint requires a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your JWT token>
```

## Request Body
Send a JSON object with the following fields:

| Field        | Type   | Required | Description                |
|--------------|--------|----------|----------------------------|
| oldPassword  | string | Yes      | Your current password      |
| newPassword  | string | Yes      | Your new password          |

**Example:**
```json
{
  "oldPassword": "currentPassword123",
  "newPassword": "newSecurePassword456"
}
```

## What Happens
- The server verifies your current password.
- If valid, your password is updated to the new value.
- If the old password is incorrect or the new password does not meet security requirements, you receive an error.

## Responses

- **200 OK**
  ```json
  { "message": "Password changed successfully" }
  ```
- **400 Bad Request** (invalid input)
  ```json
  { "error": "Invalid input" }
  ```
- **401 Unauthorized** (missing or invalid token)
  ```json
  { "error": "Unauthorized" }
  ```
- **403 Forbidden** (incorrect old password)
  ```json
  { "error": "Incorrect current password" }
  ```

## Security Notes
- Use a strong, unique password.
- Never share your password with anyone.

## Troubleshooting
- If you get `Incorrect current password`, double-check your old password.
- If you get `Invalid input`, ensure your new password meets security requirements.

---

Use this endpoint to keep your account secure by updating your password regularly. 