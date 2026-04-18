import express from 'express';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import prisma from '../prismaclient.js';
const router=express.Router();
router.post('/register',async(req,res)=>{
const {username,password}=req.body;
const hashepassword=bcrypt.hashSync(password,10);
try{
    const user=await prisma.User.create({
        data:{
            username,
            password:hashepassword
        }
    })
const line="hello guys";
const result=await prisma.Todo.create({
    data:{
        task:line,
        userId:user.id
    }
})
const token =jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24h'});
res.json({token});
}catch(err){
    res.status(500).json({error:err.message});

}


})
router.post('/login',async(req,res)=>{
const {username,password}=req.body;
try{
const user=await prisma.User.findUnique({
    where:{
        username
    }
})
if(!user){
    return res.status(400).json({error:"Invalid username or password"});

}
const isvalid=bcrypt.compareSync(password,user.password);
if(!isvalid){
    return res.status(400).json({error:"Invalid username or password"});
}
console.log(user);
const token =jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24h'});
res.json({token});
}
catch(err){
    console.log(err.message);
    res.sendStatus(501);
}
})

 export default router;
