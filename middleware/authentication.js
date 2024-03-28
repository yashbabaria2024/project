const jwt=require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
exports.authorization=(req,res,next)=>{
    const token=req.cookies.access_token;
    console.log(token);
    if(!token){
        res.redirect('/')
    }
    else{
        try{
            const data=jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.email=data.email;
            return next();
        }
        catch{
            return res.sendStatus(403);
        }
    }
}