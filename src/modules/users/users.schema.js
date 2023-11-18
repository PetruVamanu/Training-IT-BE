const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  { collection: "users" }
);

module.exports = model("users", UserSchema);
