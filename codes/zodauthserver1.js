const express = require('express');
const app = express();
const zod = require('zod');

function validation(body){
    const schema = zod.object({
    username: zod.string().max(30),
    email : zod.string().email()
});
return schema.safeParse(body)
}


//middleware
app.use(express.json());

app.post("/auth",(req,res)=>{
    //input
     const authCheck = validation(req.body); 
    if (authCheck.success){
    res.send(`authentication sucessfull`);;
}else{ res.status(400).send(`check the login details`)}
    res.end();
})
app.listen(3000)
console.log(`sever is running on port 3000`)