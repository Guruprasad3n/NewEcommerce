import React, { useState } from "react";
import Layout from "../Components/Layout/Layout.jsx";
import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Button,
    Flex,
  } from "@chakra-ui/react";
  

  
  function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 
  return (
    <>
      <Layout title={"Login - Guru's Commerce"}>
      <Flex flexDirection={'column'} alignItems={'center'} gap={'15px'} justifyContent={'center'}  >
        <h1>Login</h1>
       <Container>
          <FormControl isRequired>
            <FormLabel  >Email address</FormLabel>
            <Input  value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Email Address" />
          </FormControl >
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)}  type="email" placeholder="Password" />
          </FormControl>
        </Container>
            <Button colorScheme='green' w="20%" >Login</Button>

       </Flex>


      </Layout>
    </>
  );
}
export default Login;
