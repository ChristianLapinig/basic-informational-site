const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(PORT, () => {
	console.log(`Basic Informational Site listening on port ${PORT}`);
});
