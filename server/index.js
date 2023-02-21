import express from 'express';
import Connection from './database/db.js';
import  Router  from './routes/route.js';


const app = express();

app.use('/',Router);


const PORT= 8000;
app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));

Connection();