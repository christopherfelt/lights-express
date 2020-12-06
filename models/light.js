import mongoose from "mongoose";
// import model from "mongoose";

const LightSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});

const Light = mongoose.model("light", LightSchema);

export default Light;
