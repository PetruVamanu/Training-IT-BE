const { model, Schema } = require("mongoose");

const PageSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      required: true,
        },
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  {
    collection: "pages",
  }
);

module.exports = model("pages", PageSchema);
