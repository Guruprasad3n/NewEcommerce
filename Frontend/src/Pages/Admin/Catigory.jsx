import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import CategoryForm from "../../Components/Form/CategoryForm";
function Category() {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/category/create-category",
        { name }
      );
      if (data?.success) {
        // console.log(data.slug)
        toast({
          title: `${name} is Created`,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      } else {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        // title: "Error",
        description: "Something Went Wrong in Form",
        status: error,
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-all-category"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
      });
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(categories);

  return (
    <>
      <Layout title={"Dashboard - Create Category"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1>Manage Category</h1>
              <div className="p-3 w-50">
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>

              <div className="w-75">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories &&
                      categories?.map((e) => (
                        <>
                          <tr>
                            <td key={e._id}>{e.name}</td>
                            <td>
                              <button
                                className="btn btn-primary ms-2"
                                onClick={onOpen}
                              >
                                Edit
                              </button>
                              <button className="btn btn-danger ms-2">
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* Modal */}
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text fontWeight="bold" mb="1rem">
                      You can scroll the content behind the modal
                    </Text>
                    {/* <Lorem count={2} /> */}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              {/* Modal */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Category;
