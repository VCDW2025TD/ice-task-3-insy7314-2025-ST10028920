# CSP & Helmet — quick notes

**What Helmet gives by default**
Helmet sets a bunch of secure HTTP headers for you (so you don’t forget them):
- Blocks MIME sniffing (X-Content-Type-Options)
- Safer referrers (Referrer-Policy)
- Clickjacking protection (X-Frame-Options)
- HSTS when you’re on HTTPS (forces future HTTPS)
- Cross-Origin policies (e.g., CORP) and other modern hardening headers
> Content-Security-Policy is *not* on by default; we add it ourselves below.

**Our CSP**
- Default deny: `default-src 'self'`
- Only our origin for scripts/styles/images/fonts
- Inline scripts are blocked (no `'unsafe-inline'` in `script-src`)
- Network/XHR restricted to our API
- Reports violations to `/csp-report` (report-only in dev so nothing breaks)

**How we proved it works**
- Frontend `index.html` intentionally includes:
  - an inline `<script>`  → blocked
  - a third-party CDN script → blocked
- Opened DevTools → Console shows “Refused to…” errors
- Network shows POSTs to `/csp-report`
- Backend logs print “CSP Violation Report: …”

**Note for marking**
If the page looks unstyled, that’s CSP doing its job. Add `'unsafe-inline'` to `style-src` in `frontend/index.html` to let Vite inject styles during dev:
`style-src 'self' 'unsafe-inline';`
