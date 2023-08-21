import mongoose, { Schema, modal } from "mongoose";

const productSchame = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
      require: true,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const productModal = modal("Products", productSchame);
export default productModal;
