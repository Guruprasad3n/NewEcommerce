import React, { useState } from "react";
import Layout from "../Components/Layout/Layout.jsx";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Flex,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const toast = useToast();

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password || !phone || !address || !answer) {
        toast({
          title: "Empty Fields",
          description: "Please fill in all the fields.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        { name, email, password, phone, address, answer }
      );
      console.log("Response:", res.data); // Log the response data
      if (res && res.data.success) {
        toast({
          title: "Success",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something Went Wrong",
        description: "An error occurred while processing your request.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout title={"Signup - Guru's Commerce"}>
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="15px"
        justifyContent="center"
      >
        <h1>Signup</h1>
        <Container>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
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
          <FormControl isRequired>
            <FormLabel>Best Friend Name</FormLabel>
            <Input
              required
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Friend Name"
            />
            <FormHelperText>Security Question</FormHelperText>
          </FormControl>
        </Container>
        <Button onClick={handleSubmit} colorScheme="orange" w="20%">
          Signup
        </Button>
      </Flex>
    </Layout>
  );
}

export default Signup;
