import slugify from "slugify";
import categoryModel from "../Models/CategoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name Is Required" });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res
        .status(200)
        .send({ success: true, message: "Category Already Exist" });
    }
    const category = await new categoryModel({ name, slug: slugify(name) });
    category.save();
    return res
      .status(201)
      .send({ success: true, message: "New Category Created", category });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in Category", error });
  }
};

// Update Category Controller
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in Update Category" });
  }
};

// Get All Category Controller

export const allCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    return res.status(200).send({
      success: true,
      message: "All Category List Success Showing",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Getting All Categories",
      error,
    });
  }
};

// Single Category Controller

export const singleCategoryController = async (req, res) => {
  try {
    
    const category = await categoryModel.findOne({ slug: req.params.slug });
    return res.status(200).send({
      success: true,
      message: "Get Single Category Success",
      category,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in Getting Single Category" });
  }
};
// Delete Category Controller
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCate = await categoryModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Deleting Category",
      error,
    });
  }
};
