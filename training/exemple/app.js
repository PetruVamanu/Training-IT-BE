const express = require('express');
const app = express();

const validateAuth = (req,res,next) => {
    console.log('Validate the user!');
};

app.use((req,res,next)=>{
    console.log(req.headers['user-agent']);
    next();
})

app.get('/test',async (req,res,next) => {
    
    try {
    const handle = new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log('Timeout finished')
            resolve('hello world');
        },1000);
                
    });
    
    const response = await handle;
    console.log('Hello from test');
    return res.status(201).send(
        {
            success:true,
            message: 'Hello World'
        }
    );
    } catch (error) {
        next(error);
    }

})

app.get('/hello',validateAuth,(req,res,next) => {
    return res.send({
        hello: 'world'
    })
})

app.use((err,req,res,next)=>{
    if(err.name == 'Error')
        console.log('Failed for life');

    console.log(err);
    next();
})

app.listen(3000);