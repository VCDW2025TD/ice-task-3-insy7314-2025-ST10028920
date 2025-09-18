1\. Did adding HTTPS change how your app behaves?

Yes, the app now enforces encrypted connections. I noticed that browsers required me to accept a self-signed certificate before accessing the backend or frontend. Once trusted, the application worked as normal, but all traffic is now over HTTPS.



2\. Were there any setup issues or certificate trust problems?

Yes, initially the browser flagged the certificate as untrusted because it was self-signed. I also had to adjust my development environment to point both backend and frontend servers to the generated certificate and key. After importing the certificate into Trusted Root Authorities, the warnings went away.



3\. What would need to change for a production deployment?

In production, I would not use a self-signed certificate. Instead, I would obtain a valid TLS certificate from a Certificate Authority (such as Let’s Encrypt). The cert would be installed on the production web server or reverse proxy (e.g., NGINX). I would also enable HSTS and ensure secure ciphers are used.



