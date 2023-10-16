import express from 'express';
import { StreamChat } from 'stream-chat';
import { api } from './api';
import cors from 'cors';

const bodyParser = require('body-parser')
const app = express();

const PORT = process.env['PORT'] || 3002
const api_key = 'v3kha4qgwkm3'
const api_secret = 'w587ks5zczdkyxm6yx68vhvgrq6s4c956jrvbmv7ak3pn4dukgdvdwf7ymfbzszy'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);


app.use(api);

app.use(express.static(process.cwd()+"/dist/forms-reativos"))
app.get('/json/:id', cors() ,(req,res) => {
    req.params
    res.json({token: serverClient.createToken(user_id)
})});
app.listen(PORT, async() => {
    console.log(`API Gateway running in port ${PORT}!`)
});


