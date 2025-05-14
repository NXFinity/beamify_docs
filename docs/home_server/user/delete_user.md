---
sidebar_position: 4
---

# Delete User

Delete the currently authenticated user's account. This action is irreversible and will remove all associated data.

## Endpoint

`DELETE /user`

## Authentication
This endpoint requires a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your JWT token>
```

## What Happens
- The server verifies your JWT token.
- If valid, your user account and all related data are permanently deleted.
- If the token is missing or invalid, you receive an error.

## Responses

- **200 OK**
  ```json
  { "message": "User account deleted successfully" }
  ```
- **401 Unauthorized** (missing or invalid token)
  ```json
  { "error": "Unauthorized" }
  ```

## Security Notes
- This action cannot be undone. All user data will be lost.
- Always ensure you intend to delete your account before proceeding.

## Troubleshooting
- If you get `Unauthorized`, your token may be expired or missing. Log in again to get a new token.
- If you have trouble deleting your account, contact support.

---

Use this endpoint to permanently remove your Beamify account and data.
