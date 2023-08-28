import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
function Product(){
  const [categories, setCategories] = useState([])
  const[photo, setPhoto] = useState("")
  const[name, setName] = useState("")
  const[price, setPrice] = useState("")
  const[quantity, setQuantity] = useState("")
  const[shipping, setShipping] = useState("")
  const[description, setDescription] = useState("")
  // const[photo, setPhoto] = useState("")

const toast = useToast()

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




    return(
        <>
        <Layout title={"Dashboard - Create Product"}>
        <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
          </div>
        </div>
        </div>
        </Layout>
        </>
    )
}
export default Product