import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import axios from "axios";
import { Button, Select, useToast } from "@chakra-ui/react";
function Product() {
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // const[photo, setPhoto] = useState("")

  const toast = useToast();

  // toast({
  //   title: `${updatedCName} is Updated`,
  //   status: "success",
  //   duration: 3000,
  //   isClosable: true,
  //   variant: "top-accent",
  // });

  // Get All Categories Copied From Category.jsx
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-all-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
      });
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  const handleCreateProduct = async (e) => {};

  console.log(categories);
  return (
    <>
      <Layout title={"Dashboard - Create Product"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1>Create Product</h1>
              <div className="m-1 w-75">
                <Select
                  outline={"none"}
                  // isSearchable
                  // showSearch
                  // defaultValue={options[0].value}
                  // value={state}
                  // options={options}
                  placeholder="Select a Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((e) => (
                    <option key={e._id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </Select>
                
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="write a name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="write a description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="write a Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={quantity}
                    placeholder="write a quantity"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Select
                    bordered={false}
                    placeholder="Select Shipping "
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setShipping(value);
                    }}
                  >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </Select>
                </div>
                <div className="mb-3">
                  <Button onClick={handleCreateProduct}>Create Product</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Product;
