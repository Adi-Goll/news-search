const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
const axios = require('axios');


app.use(cors());


newsAPIReturnObj = {
    source: 'source',
    author: 'author',
    title: 'title',
    description: 'description',
    urlToArticle: 'urlToArticle',
    urlToImage: 'urlToImage',
    publishDate: 'publishDate'
}

const newsAPIRequest = (newsAPIQuery) => {
    // console.log(axios.get(`https://newsapi.org/v2/everything?q=${newsAPIQuery}&apiKey=6fe149c2c18b49e6a6a771c564585e5f`));
    axios({
        method: 'get',
        url: `https://newsapi.org/v2/everything?q=${newsAPIQuery}&apiKey=6fe149c2c18b49e6a6a771c564585e5f`,
        responseType: 'JSON'
    })
        .then(function (response) {
            response = JSON.parse(response.data);
            console.log("inside request function on backend")
            console.log(response.articles[0]);
        });
    console.log("made that request bih");
}

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/newsRequest', (req, res) => {
    // res.send(`yo I made it to the backend and your response is ${ req.query.newsAPIQuery }`);
    // res.send(newsAPIRequest(req.query.newsAPIQuery));
    newsAPIRequest(req.query.newsAPIQuery);
});

