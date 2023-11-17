
const express = require('express');
const app = express();

const validate = (req, res, next) => {
    console.log("Validated");
    next();
}

// app.use((req, res, next) => {
//     console.log(req.headers['user-agent']);
//     next();
// })

app.get('/test', async (req, res, next) => {
    try {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('hello'));
            }, 3000)
        })
        await p;
        return res.status(201).send({
            success: true,
            message: "Hello"
        })
    } catch (err) {
        next(err);
    }
})

app.get('/hello', validate, (req, res) => {
    try {
        // throw new Error('Hello');
        return res.status(201).send({
            success: true,
            message: "Hello"
        })
    } catch (err) {
        next(err);
    }
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Error");
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})