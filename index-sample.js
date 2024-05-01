// index.js
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
    // Routing based on the URL
    if (req.url === '/') {
        // Set the response header for the home page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Write response for the home page
        res.end('Welcome to my simple Node.js app!');
    } else if (req.url === '/about') {
        // Set the response header for the about page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Write response for the about page
        res.end('This is the About page');
    } else {
        // Set the response header for not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        // Write response for not found
        res.end('404 Not Found');
    }
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
