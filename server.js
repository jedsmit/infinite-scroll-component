const fetch = require('node-fetch');
global.fetch = fetch;
const express = require('express');



const app = express();

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

app.get('/api/memorials', (req, res) => {
    return res.json(testData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
