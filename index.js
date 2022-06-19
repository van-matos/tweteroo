import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
})

app.listen(5000);