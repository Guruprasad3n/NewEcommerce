import fs from "fs";
import slugify from "slugify";
import productModal from "../Models/ProductModel.js";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    // Validation -- Switch Case
    switch (true) {
      case !name:
        return res.status(500).send({ message: "Name is Required" });
      case !description:
        return res.status(500).send({ message: "Description is Required" });
      case !price:
        return res.status(500).send({ message: "Price is Required" });
      case !category:
        return res.status(500).send({ message: "Category is Required" });
      case !quantity:
        return res.status(500).send({ message: "Quantity is Required" });
      case !photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ message: "Photo is Required and Should be Less Then 1MB" });
    }
    //
    const products = new productModal({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfull",
      products,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: false, message: "Error While Creating Product", error });
  }
};

// Get All Products
export const getAllProductsController = async (req, res) => {
  try {
    const products = await productModal
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Get All Products Success",
      products,
      totalCount: products.length,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Get All Products" });
  }
};

export const getSingleProductsController = async (req, res) => {
  try {
    const product = await productModal
      .findOne({ slig: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single Product Getting Success",
      product,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Single Product", error });
  }
};

// Photo Product COntroller
export const getProductPhotoContorller = async (req, res) => {
  try {
    const photo = await productModal.findById(req.params.id).select("photo");
    if (photo.photo.data) {
      res.set("Content-Type", photo.photo.contentType);
      return res.status(200).send(photo.photo.data);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Getting Photo Error", error });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const productDelete = await productModal
      .findByIdAndDelete(req.params.id)
      .select("-photo");
    return res.status(200).send({
      success: true,
      message: "Delete Product Success",
      productDelete,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in Delete Product" });
  }
};
// Update Product
export const updateProductController = async (req, res) => {
  try {
    // const updateProduct = await productModal.findByIdAndUpdate({});

    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    // Validation -- Switch Case
    switch (true) {
      case !name:
        return res.status(500).send({ message: "Name is Required" });
      case !description:
        return res.status(500).send({ message: "Description is Required" });
      case !price:
        return res.status(500).send({ message: "Price is Required" });
      case !category:
        return res.status(500).send({ message: "Category is Required" });
      case !quantity:
        return res.status(500).send({ message: "Quantity is Required" });
      case !photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ message: "Photo is Required and Should be Less Then 1MB" });
    }
    //
    const products = await productModal.findByIdAndUpdate(
      req.params.id,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfull",
      products,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error In Update Product" });
  }
};
