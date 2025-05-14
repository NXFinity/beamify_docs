---
sidebar_position: 1
---

# Initialize Administrator

The Beamify Server requires an initial System Administrator account to be created before the platform can be used. This process is performed via a special API endpoint and can only be done **once** (when no users exist in the database).

## When to Use
- On a fresh deployment of Beamify Server (no users in the database).
- To bootstrap the first admin user who will have full platform control.

## Endpoint

`POST /auth/init-admin`

## Request Body
Send a JSON object with the following fields:

| Field        | Type   | Required | Description                       |
|--------------|--------|----------|-----------------------------------|
| username     | string | Yes      | The admin's username              |
| displayName  | string | Yes      | The admin's display name          |
| email        | string | Yes      | The admin's email address         |
| password     | string | Yes      | The admin's password              |

**Example:**
```json
{
  "username": "admin",
  "displayName": "System Administrator",
  "email": "admin@example.com",
  "password": "yourStrongPassword"
}
```

## What Happens
- Essential roles (SYSTEM_ADMINISTRATOR, MEMBER) are created if missing.
- If any users already exist, the request is rejected.
- The admin user is created with the SYSTEM_ADMINISTRATOR role and is marked as verified.
- A gamification profile is created for the admin.

## Responses

- **201 Created**
  ```json
  { "message": "System Administrator account created." }
  ```
- **400 Bad Request** (missing fields)
  ```json
  { "message": "Missing fields." }
  ```
- **403 Forbidden** (admin already initialized)
  ```json
  { "message": "Admin already initialized." }
  ```

## Security Notes
- This endpoint is only available if there are **no users** in the database.
- After the first admin is created, this endpoint is disabled.
- The SYSTEM_ADMINISTRATOR role is unique and cannot be assigned to more than one user.

## Troubleshooting
- If you see `Admin already initialized.`, check that your database is empty or reset it if needed.
- Ensure all required fields are present in your request.

---

Once the admin is initialized, you can log in and begin configuring your Beamify platform.
