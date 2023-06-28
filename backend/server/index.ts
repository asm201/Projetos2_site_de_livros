import express from 'express';
import { api } from './api';

const bodyParser = require('body-parser')
const app = express();

const PORT = process.env['PORT'] || 3002

app.use(api);
app.get('/api/hi',(req,res) => res.send('Hello'));

app.use(express.static(process.cwd()+"/dist/forms-reativos"))
app.listen(PORT, async() => {
    console.log(`API Gateway running in port ${PORT}!`)
});


