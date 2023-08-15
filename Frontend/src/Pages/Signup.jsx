import React, { useState } from "react";
import Layout from "../Components/Layout/Layout.jsx";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const toast = useToast();

  const handleSubmit = async () => {
    if (!name || !email || !password || !phone || !address) {
      toast({
        title: "Empty Fields",
        description: "Please fill in all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      const tes = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { name, email, password, phone, address }
      );
      if (res.data.success) {

        toast({
            title: "Empty Fields",
            description: res.data.message,
            status: success,
            duration: 3000,
            isClosable: true,
          });


        // toast.success(res.data.message);
        navigate('/login')
      } else {

        toast({
            title: "Empty Fields",
            description: res.data.message,
            status: error,
            duration: 3000,
            isClosable: true,
          });

        // toast.error(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast({
        title: "Something Went Wrong",
        description: "",
        status: "erroe",
        duration: 3000,
        isClosable: true,
      });
    }

    // e.preventDefault()
    console.log(name, email, password, phone, address);
  };

  return (
    <>
      <Layout title={"Signup - Guru's Commerce"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={"15px"}
          justifyContent={"center"}
        >
          <h1>Signup</h1>
          <Container>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="email"
                placeholder="Name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Phone"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
              />
            </FormControl>
          </Container>
          <Button onClick={handleSubmit} colorScheme="orange" w="20%">
            Signup
          </Button>
        </Flex>
      </Layout>
    </>
  );
}
export default Signup;
