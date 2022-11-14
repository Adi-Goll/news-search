const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/newsRequest', (req, res) => {
    res.send(`yo I made it to the backend and your response is ${req.query.newsAPIQuery}`);
});