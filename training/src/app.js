const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./modules');
const app = express();
const {config} = require('./lib/config');
const mongoose = require('mongoose');

 //cors - trebuie inainte de router

const main = async () => {
    app.use(cors({ 
        origin: '*'
    }))

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use(router);

    await mongoose.connect(config.mongoUri, {
        tlsInsecure: true,
    })

    app.listen(3000, () => {
        console.log("Application stated on port 3000");
    });

}

main()