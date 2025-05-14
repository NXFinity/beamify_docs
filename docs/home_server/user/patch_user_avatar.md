---
sidebar_position: 8
---

# Update User Avatar

Update the profile picture (avatar) for the currently authenticated user. This endpoint allows users to upload a new avatar image.

## Endpoint

`PATCH /user/avatar`

## Authentication
This endpoint requires a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your JWT token>
```

## Request Body
Send a `multipart/form-data` request with the following field:

| Field   | Type   | Required | Description                |
|---------|--------|----------|----------------------------|
| avatar  | file   | Yes      | The new avatar image file  |

**Example (using curl):**
```bash
curl -X PATCH \
  -H "Authorization: Bearer <your JWT token>" \
  -F "avatar=@/path/to/avatar.png" \
  https://your-beamify-server.com/user/avatar
```

## What Happens
- The server verifies your JWT token and processes the uploaded image.
- If valid, your avatar is updated and the new image URL is returned.
- If the file is missing or invalid, you receive an error.

## Responses

- **200 OK**
  ```json
  { "avatarUrl": "https://cdn.beamify.com/avatars/userId123.png" }
  ```
- **400 Bad Request** (missing or invalid file)
  ```json
  { "error": "Invalid or missing avatar file" }
  ```
- **401 Unauthorized** (missing or invalid token)
  ```json
  { "error": "Unauthorized" }
  ```

## Security Notes
- Only image files (PNG, JPG, etc.) are allowed.
- Uploaded files are scanned for security.

## Troubleshooting
- If you get `Invalid or missing avatar file`, check your file type and size.
- If you get `Unauthorized`, your token may be expired or missing.

---

Use this endpoint to personalize your Beamify profile with a custom avatar. 