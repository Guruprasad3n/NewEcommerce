import React, { useState } from "react";
import Layout from "../Components/Layout/Layout.jsx";
import axios from 'axios'
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

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

const toast = useToast()

  const handleSubmit = () => {
if(!name || !email || !password || !phone || !address){
    toast({
        title: "Empty Fields",
        description: "Please fill in all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
}

    // e.preventDefault()
console.log(name, email, password, phone, address)

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
