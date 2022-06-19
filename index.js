import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const userList = [];

const tweetList =[]

app.post('/sign-up', (req, res) => {
    const user = req.body;
    userList.push(user);
    res.send("OK");
})

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweetList.push(tweet);
    res.send("OK");
})

app.get('/tweets', (req, res) => {
    const recentTweets = tweetList.slice(-10);
    recentTweets.reverse();
    recentTweets.forEach( tweet => tweet.avatar = userList.find( user => user.username === tweet.username ).avatar );
    res.send(recentTweets);
});

app.listen(5000);