const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const uri =
  "mongodb+srv://ilovemelatina:thatassthough@cluster0.8e7zqec.mongodb.net/puss?retryWrites=true&w=majority";

const pussySchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

const Course = mongoose.model("types", pussySchema);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Course.find({})
  .then((data) => {
    console.log("Pussy types:", data);
  })
  .catch((error) => {
    console.log(error);
  });
