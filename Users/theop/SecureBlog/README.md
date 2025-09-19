# SecureBlog — ICE Task 3 (MongoDB + JWT + Frontend Auth)

## What’s included
- HTTPS Node/Express backend
- MongoDB Atlas + Mongoose
- JWT auth (register/login) + protected route /api/protected
- React (Vite) frontend with Register/Login/Logout/Dashboard and route guard

## How to run (local)
1) **Backend**
   - Create ackend/.env by copying .env.example and filling your Atlas creds + JWT_SECRET.
   - cd backend && npm install && npm run dev
   - Health check: https://localhost:5000/health  → { "status": "ok" }

2) **Frontend**
   - cd frontend && npm install && npm run dev
   - Open:
     - Register:  https://localhost:5173/register
     - Login:     https://localhost:5173/login
     - Dashboard: https://localhost:5173/dashboard (protected)

> Note: Self-signed cert is expected; proceed to site.

## Notes / Evidence
- Register + Login return a JWT; Dashboard shows “Welcome, user …”.
- CORS is allowed for https://localhost:5173.
