import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import authroute from './route/authroute.js';
import todoroute from './route/todoroute.js';
import authmiddleware from './middleware/authmiddleware.js';
import dotenv from 'dotenv';
import 'dotenv/config';
const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})
app.use('/auth',authroute);
app.use('/todos',authmiddleware,todoroute);

const PORT=process.env.PORT || 8484;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})