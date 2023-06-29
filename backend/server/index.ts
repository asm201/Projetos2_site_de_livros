import express from 'express';
import { api } from './api';
import { createPostgresConnection } from 'remult/postgres'

const bodyParser = require('body-parser')
const app = express();

const PORT = process.env['PORT'] || 3002

app.use(api);
app.get('/api/hi',(req,res) => res.send('Hello'));
dataProvider: createPostgresConnection({
    connectionString: 
        process.env['DATABASE_URL']
});

app.use(express.static(process.cwd()+"/dist/forms-reativos"))
app.listen(PORT, async() => {
    console.log(`API Gateway running in port ${PORT}!`)
});


