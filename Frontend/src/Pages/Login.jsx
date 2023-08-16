import React, { useState } from "react";
import Layout from "../Components/Layout/Layout.jsx";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    try {
      // if (!email || !password) {
      //   toast({
      //     title: "Empty Fields",
      //     description: "Please fill in all the fields.",
      //     status: "warning",
      //     duration: 3000,
      //     isClosable: true,
      //   });
      //   return;
      // }

      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      console.log("Response", res.data);
      if (res.data && res.data.success) {
        toast({
          title: res.data.message,
          // description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant:"top-accent"
        });
        setAuth({ ...auth, user: res.data.user, token: res.data.token, });
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate("/");
      } else {
        toast({
          title: res.data.message,
          // description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant:"left-accent"
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something Went Wrong",
        // description: "An error occurred while processing your request.",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant:"subtle"
      });
    }
  };

  return (
    <>
      <Layout title={"Login - Guru's Commerce"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={"15px"}
          justifyContent={"center"}
        >
          <h1>Login</h1>
          <Container>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="email"
                placeholder="Password"
              />
            </FormControl>
          </Container>
          <Button colorScheme="green" w="20%" onClick={handleLogin}>
            Login
          </Button>
        </Flex>
      </Layout>
    </>
  );
}
export default Login;
