import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";




function Products() {
 
  const toast = useToast();
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/product/get-products`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
      toast({
        title: `Error in Getting All Products`,
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(products);

  

  return (
    <>
    <Layout title={"Products Dashboard - Guru's Commerce"}>
  <div className="row">
    <div className="col-md-3">
      <AdminMenu />
    </div>
    <div className="col-md-9">
      <div className="text-center" style={{border:'1px solid red'}}>
        <h1>Products List</h1>


<div className="d-flex align-items-center justify-content-center ">

        {/* <Flex direction="row" flexWrap="wrap" justifyContent="space-between" gap={"10px"} > */}
        
          </div>

        {/* <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid> */}
      </div>
    </div>
  </div>
</Layout>
    </>
  );
}

export default Products;
