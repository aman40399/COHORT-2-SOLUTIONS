const express = require('express');
const app = express();
app.get("/admin",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidenyId = req.query.kidenyId;
    
    if(username ==="aman" && password ==="123"){
        if(kidenyId==="1" || kidenyId ==="2"){
            res.json({
                msg: "login sucessful"
            })
        }
    }
    else(
        res.json({
            msg : "login failed check the logins please"
        })
    )

})
app.listen(3000)
console.log("server is running on http://localhost:3000")