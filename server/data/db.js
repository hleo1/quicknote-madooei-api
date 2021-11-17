require("dotenv").config();
const mongoose = require("mongoose");

const URI = `mongodb+srv://quicknote-admin:V0yLoIcHN7EbWcby@quickname.rbqxg.mongodb.net/quickNoteDB?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };