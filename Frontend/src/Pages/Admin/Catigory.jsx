import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import CategoryForm from "../../Components/Form/CategoryForm";
function Category() {
  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/category/create-category",
        { name }
      );
      if (data?.success) {
        toast({
          title: `${data.name} is Created`,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      } else {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something Went Wrong in FOrm",
      });
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-all-category"
      );
      if (data.success) {
        setCategories(data.category);
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
  console.log(categories);

  return (
    <>
      <Layout title={"Dashboard - Create Category"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1>Manage Category</h1>
              <div className="p-3">
                <CategoryForm />
              </div>

              <div className="w-75">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories &&
                      categories?.map((e) => (
                        <>
                          <tr>
                            <td key={e._id}>{e.name}</td>
                            <td>
                              <button className="btn btn-primary">Edit</button>
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Category;
