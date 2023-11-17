
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { config } = require('./lib/config')
const mongoose = require('mongoose')
const router = require('./modules');

const main = async () => {
    const app = express();


    app.use(cors({
        origin: '*'
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(router);

    await mongoose.connect(config.mongoUri);

    app.listen(3000, () => {
        console.log('Listening on port 3000');
    })

}
main()