---
sidebar_position: 0
---

# 🚨 MUST READ🚨
##  Initialize the Admin Account First!

> **If you skip this step, the server, app, and chat will NOT work.**

## Why This Matters
Before you can use Beamify locally (or in any environment), you **must** create the initial admin account. This is a critical setup step. Without it, the backend will not function, and the app and chat services will fail to load or operate.

## What You Need To Do
1. **Start the Beamify server.**
2. **Go to the INIT ADMIN endpoint** (see the server docs for the exact route, usually `/auth/init-admin`).
3. **Create the first admin account** by providing the required details (email, password, etc.).
4. **Log in with this admin account** to access all features and manage your instance.

## What Happens If You Don't
- The server will not allow normal user registration or login.
- The app and chat microservices will not connect or function.
- You will see errors or blank screens in the UI.

## Who Should Read This?
- **Every developer** running Beamify locally or in a new environment.
- **Anyone deploying Beamify for the first time.**

---

> **TL;DR:** _You must create the initial admin account before anything else will work!_

For more details, see the [Getting Started documentation](http://localhost:3001/docs/home_server/getting_started) and the [Init Admin documentation](http://localhost:3001/docs/home_server/auth/init_admin).

