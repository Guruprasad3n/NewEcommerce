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
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res
      .status(200)
      .send({ success: true, message: "Get All Products Success", products, totalCount:products.length });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Get All Products" });
  }
};

export const getSingleProductsController =async(req, res)=>{
  try{

    const product = await productModal.findOne({slig:req.params.slug});
    req.status


  }catch(error){
    console.log(error)
    res.status(500).send({success:false, message:"Error in Single Product", error})
  }

}
