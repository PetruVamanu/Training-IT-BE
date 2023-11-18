const PageSchema = require("./pages.schema");

exports.createNewPage = (req, res, next) => {
    const newPage = new PageSchema({

    })
    return newPage;
}