const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from my updated API!');
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});