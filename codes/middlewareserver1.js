const express = require('express');
const app = express();

function authcheck(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === "aman" && password === "123") {
        res.json({
            msg: "login successful"
        });
    } else {
        res.json({
            msg: "login failed"
        });
    }
}

app.get("/login", authcheck, (req, res) => {
   
});

app.listen(3000);
console.log("server is running on http://localhost:3000");
