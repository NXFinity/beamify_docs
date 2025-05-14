---
sidebar_position: 3
---

# Update User

Update the profile information of the currently authenticated user. This endpoint allows users to change their display name, email, or other profile fields.

## Endpoint

`PATCH /user`

## Authentication
This endpoint requires a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your JWT token>
```

## Request Body
Send a JSON object with the fields you want to update. All fields are optional, but at least one must be provided.

| Field     | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| email     | string | No       | New email address          |
| name      | string | No       | New display name           |
| password  | string | No       | New password               |

**Example:**
```json
{
  "email": "newemail@example.com",
  "name": "Jane D.",
  "password": "newPassword456"
}
```

## What Happens
- The server validates the input and updates the user profile.
- If the email is changed, a new verification email may be sent.
- If the password is changed, it must meet security requirements.

## Responses

- **200 OK**
  ```json
  { "message": "User updated successfully" }
  ```
- **400 Bad Request** (invalid input)
  ```json
  { "error": "Invalid input" }
  ```
- **409 Conflict** (email already in use)
  ```json
  { "error": "Email already in use" }
  ```

## Security Notes
- Changing your email may require re-verification.
- Use a strong password when updating your credentials.

## Troubleshooting
- If you get `Email already in use`, try a different email address.
- If you get `Invalid input`, check the data format and required fields.

---

Use this endpoint to keep your user profile up to date.
