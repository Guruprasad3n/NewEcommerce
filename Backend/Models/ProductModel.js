// import mongoose,{ Schema, model } from "mongoose";

// const productSchame = new Schema(
//   {
//     name: {
//       type: String,
//       require: true,
//     },
//     slug: {
//       type: String,
//       require: true,
//     },
//     description: {
//       type: String,
//       require: true,
//     },
//     price: {
//       type: Number,
//       require: true,
//     },
//     category: {
//       type: mongoose.ObjectId,
//       ref: "Category",
//       require: true,
//     },
//     quantity: {
//       type: Number,
//       require: true,
//     },
//     photo: {
//       data: Buffer,
//       contentType: String,
//       require: true,
//     },
//     shipping: {
//       type: Boolean,
//     },
//   },
//   { timestamps: true }
// );

// const productModel = model("Products", productSchame);
// export default productModel;


import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {

      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);