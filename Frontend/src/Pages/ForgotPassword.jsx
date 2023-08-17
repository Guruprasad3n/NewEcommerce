import Layout from "../Components/Layout/Layout";
import React, { useState } from "react";
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
import axios from "axios";

import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleResetPassword = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      console.log("Response", res.data);
      if (res.data && res.data.success) {
        toast({
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
        navigate("/");
      } else {
        toast({
          title: res.data.message,
          // description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something Went Wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "subtle",
      });
    }
  };

  return (
    <>
      <Layout title={"Forgot Password - Guru's Commerce"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={"15px"}
          justifyContent={"center"}
        >
          <h1>Reset Password</h1>
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
              <FormLabel>Best Freind Name</FormLabel>
              <Input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                placeholder="Friend Name"
              />
              <FormHelperText>
                Enter Your Security Answer -- Friend
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>New Password</FormLabel>
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="text"
                placeholder="Password"
              />
            </FormControl>
          </Container>
          <Button colorScheme="green" w="20%" onClick={handleResetPassword}>
            Reset
          </Button>
        </Flex>
      </Layout>
    </>
  );
}
export default ForgotPassword;
