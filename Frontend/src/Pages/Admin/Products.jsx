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
import { Link } from "react-router-dom";

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
            <div className="text-center" style={{ border: "1px solid red" }}>
              <h1>Products List</h1>

              <div className="d-flex align-items-center justify-content-center ">
                {/* <Flex direction="row" flexWrap="wrap" justifyContent="space-between" gap={"10px"} > */}
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                  spacing={6}
                >
                  {products?.map((e) => (
                    <Card key={e._id} borderWidth="1px" borderRadius="lg">
                      <Link to={`/dashboard/admin/product/${e.slug}`}>
                        <CardBody>
                          <Image
                            src={`http://localhost:8000/api/v1/product/product-photo/${e._id}`}
                            alt={e.name}
                            borderRadius="lg"
                          />
                          <Stack mt="3" spacing="1">
                            <Heading size="md" as="h2">
                              {e.name}
                            </Heading>
                            <Text fontSize="sm" color="gray.600">
                              {e.description}
                            </Text>
                            <Text color="blue.600" fontSize="lg">
                              {`${e.price}`}
                            </Text>
                          </Stack>
                        </CardBody>
                      </Link>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing="2">
                          <Button variant="solid" colorScheme="blue">
                            Buy now
                          </Button>
                          <Button variant="ghost" colorScheme="blue">
                            Add to cart
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  ))}
                </SimpleGrid>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Products;
