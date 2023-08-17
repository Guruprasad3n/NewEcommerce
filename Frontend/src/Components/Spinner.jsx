import { Button, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
function SpinnerComponent() {
  const [count, setCount] = useState(5);

  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    const intervel = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/login", {state : location.pathname});
    return () => clearInterval(intervel);
  }, [count, navigate, location]);

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100vh"}
      >
        <Text fontSize={"3xl"}> Redirecting to You in {count} Seconds </Text>
        <Container>
          <Flex
            // direction={"column"}
            gap={5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text fontSize={"2xl"}>
              Don't Wait <NavLink style={{color:"orange"}} to="/login">Login</NavLink>{" "}
            </Text>
          </Flex>
        </Container>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
       
      </Flex>
      {/* <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div> 
  
</div>
  */}
    </>
  );
}
export default SpinnerComponent;
