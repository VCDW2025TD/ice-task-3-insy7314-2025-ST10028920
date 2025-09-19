# SecureBlog — ICE Task 3 (MongoDB + JWT + HTTPS)

## Backend
- Express over **HTTPS** (self-signed certs in `ssl/`)
- MongoDB Atlas via `MONGO_URI` in `backend/.env` (not committed)
- JWT auth: `POST /api/auth/register`, `POST /api/auth/login`
- Protected route: `GET /api/protected` (requires `Authorization: Bearer <token>`)

## Frontend
- Vite + React + react-router-dom
- Pages: Home, Register, Login, Dashboard (protected), Logout
- Axios instance auto-attaches JWT, baseURL `https://localhost:5000/api`

## How to run (local)
~~~bash
# backend
cd backend
npm install
npm run dev   # -> "Secure server running at https://localhost:5000"

# frontend (new terminal)
cd ../frontend
npm install
npm run dev   # open https://localhost:5173
~~~

## Test quickly
- Register: `POST https://localhost:5000/api/auth/register` with `{ "email": "...", "password": "..." }`
- Login:    `POST https://localhost:5000/api/auth/login` with same body, copy `token`
- Protected: `GET https://localhost:5000/api/protected` with header `Authorization: Bearer <token>`

## Notes
- **Do not commit** `.env` or `.pem` files (see `.gitignore`).
- Research notes: `jwt_research.md`.
