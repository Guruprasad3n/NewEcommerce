import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

const categoryModel = model("Category", categorySchema);
export default categoryModel;
