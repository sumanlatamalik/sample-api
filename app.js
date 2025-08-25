const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from my sample API!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API running on port ${port}`);
});