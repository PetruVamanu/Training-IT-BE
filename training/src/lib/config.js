const fs = require('fs')

let config = JSON.parse(fs.readFileSync("./config/dev.json"));

module.exports = {config};