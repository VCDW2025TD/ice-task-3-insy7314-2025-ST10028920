# ICE Task 4 — Helmet + Content Security Policy

## What Helmet gives by default (benefits)
- **X-Content-Type-Options: nosniff** → stops MIME sniffing
- **Referrer-Policy** → limits referrer leakage
- **X-Frame-Options / frame-ancestors** → clickjacking protection
- **Cross-Origin** headers (modern hardening)
- **HSTS** (when on HTTPS) → forces HTTPS after first visit
> CSP is configured by us (not on by default).

## Our CSP (report-only in dev)
- default-src 'self'
- script-src 'self'  (blocks inline/eval and 3rd-party CDNs)
- style-src 'self'
- img-src 'self' data:
- font-src 'self'
- connect-src 'self' https://localhost:5000
- frame-ancestors 'none'
- report-uri https://localhost:5000/csp-report

## How we proved it works
- Added **intentional violations** in `frontend/index.html`:
  - an **inline `<script>`**
  - a **CDN script** (jsDelivr)
- Browser shows “Refused to …” errors.
- Backend logs show **POST /csp-report** with violation JSON.
