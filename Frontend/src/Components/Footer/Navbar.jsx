import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./../../../public/LogoN.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1024px)");

  if (isSmallerThanDesktop) {
    return (
      <Flex p={4} alignItems="center" border={"1px solid red"}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          onClick={onOpen}
          mr={2}
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Navigation</DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Button variant="ghost">Home</Button>
                  <Button variant="ghost">About</Button>
                  <Menu>
                    <MenuButton as={Button} variant="ghost">
                      Services
                    </MenuButton>
                    <MenuList>
                      <Link>Service 1</Link>
                      <Link>Service 2</Link>
                      <Link>Service 3</Link>
                    </MenuList>
                  </Menu>
                  <Button variant="ghost">Contact</Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Box flex="1">
          {/* Your logo or site title */}{" "}
          <Image src={Logo} alt="Guru's Commerce" maxH={"40px"} />{" "}
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost">Login</Button>
          <Button colorScheme="blue">Sign Up</Button>{" "}
        </Box>
        {/* Mobile-specific actions */}
      </Flex>
    );
  }

  return (
    <Flex
      p={4}
      alignItems="center"
      boxShadow={
        !isSmallerThanDesktop ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none"
      }
    >
      {/* Desktop navigation links */}
      <Box flex="1">
        <Flex alignItems={"center"} gap={"10px"}>
          {" "}
          {/* Your logo or site title */} Guru's Commerce
          <Image src={Logo} alt="Guru's Commerce" h={"40px"} />{" "}
        </Flex>
      </Box>
      <Spacer />
      {/* Desktop-specific actions */}
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">About</Button>
      <Menu>
        <MenuButton as={Button} variant="ghost">
          Services
        </MenuButton>

        <MenuList>
          <Flex direction={"column"}  paddingLeft={'15px'} >
            <Link>Service 1</Link>
            <Link>Service 2</Link>
            <Link>
              Nested Menu
              <Menu>
                {/* <MenuButton as={MenuItem} variant="ghost">
                Nested Item 1
              </MenuButton> */}
                <MenuList>
                  <Link>Nested Subitem 1</Link>
                </MenuList>
              </Menu>
            </Link>
          </Flex>
        </MenuList>
      </Menu>
      <Button variant="ghost">Contact</Button>
      <Button variant="ghost">Login</Button>
      <Button colorScheme="blue">Sign Up</Button>
    </Flex>
  );
};

export default Navbar;
