import JsonWebToken from 'jsonwebtoken';
function authmiddleware(req,res,next){
    const token =req.headers['authorization'];
    if(!token){
        return res.status(401).json({error:"unauthorized"});

    }
    JsonWebToken.verify(token, process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(400).json({error:"invalid token "});

        }
        req.userId=decoded.id;
        next();
    })
}
export default authmiddleware;