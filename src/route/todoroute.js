import express from 'express';
const router=express.Router();

router.get('/',async(req,res)=>{
    const alllist=await prisma.todo.findMany({
        where:{
userId:req.userId
        }
    })
    res.json(alllist);
})

router.post('/',async(req,res)=>{
const {task}=req.body;
const result=await prisma.todo.create({
    data:{
        task,
        userId:req.userId
    }
})

res.json({id:result.userId,task,"completed":0});
})

router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {completed}=req.body;
    const result=await prisma.todo.update({
        where:{
            id:parseInt(id),
            userId:req.userId
        },
        data:{
            completed:!!completed
        }
    })
    res.json({messsage:"Task Completed"});

})
router.delete('/:id',async(req,res)=>{
const {id}=req.params;
const user_id=req.body;
const result=await prisma.todo.delete({
    where:{
        id:parseInt(id),
        user_id
    }
})
res.json({message:"Task deleted"});
})
export default router;
