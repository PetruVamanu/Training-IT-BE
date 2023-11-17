const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(req.headers['user-agent']);
    next()
})

app.get("/test", (req, res, next) => {
    try {
        
        return res.status(201).send({
          succes: true,
          message: "Hello World",
        });
    }
    catch {
        
    }
});

app.use((err,req, res, next) => {
  console.log(req.headers["user-agent"]);
  next();
});

app.listen(3000);
