What does Next.js provide beyond React alone?
Next.js provides a complete framework with built-in file-based routing, server-side rendering, and backend API endpoints out of the box.

Why does the counter need use client?
The counter relies on React's useState hook and browser-based user interactions, which require a client-side execution environment.

Where does the code in app/api/message/route.js run?T
The code in this file runs entirely on the server.

How is this endpoint similar to an Express route?
Like an Express route, it listens for HTTP requests (such as GET) and responds with structured data without requiring a separate backend application.

Why must secrets remain on the server?
Keeping secrets on the server prevents sensitive data like API keys and database credentials from being exposed publicly in the browser's source code.
