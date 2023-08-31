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
  
</Layout>
    </>
  );
}

export default Products;
