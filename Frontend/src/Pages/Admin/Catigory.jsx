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
  const [updatedCName, setUpdatedCName] = useState("");
  const [selected, setSelected] = useState(null);

  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast({
        title: `Please Enter Valid Category Name`,
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
      });
      return;
    }
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
        getAllCategories();
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
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
      });
    }
  };

  useEffect(() => {
    getAllCategories(categories);
  }, []);
  // console.log(categories);

  // Update Category Name
  const handleUpdateCNameSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/category/update-category/${selected._id}`,
        { name: updatedCName }
      );

      if (data.success) {
        toast({
          title: `${updatedCName} is Updated`,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
        setSelected(null);
        setUpdatedCName("");
        onClose();
        getAllCategories();
      } else {
        toast({
          // title: "Error",
          description: data.message,
          status: error,
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      }
      console.log(e);
    } catch (error) {
      console.log(error);
      toast({
        // title: "Error",
        description: "Something Went Wrong in Update Category Name",
        status: error,
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  };

  // Delete Category
  const handleDeleteCategory = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/category/delete-category/${id}`
      );

      if (data.success) {
        toast({
          title: `Category is Deleted`,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
        // onClose();
        getAllCategories();
      } else {
        toast({
          // title: "Error",
          description: data.message,
          status: error,
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
        });
      }
      // console.log(e);
    } catch (error) {
      console.log(error);
      toast({
        // title: "Error",
        description: "Something Went Wrong in Update Category Name",
        status: error,
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  };

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
                        <tr key={e._id}>
                          <td>{e.name}</td>
                          <td>
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                onOpen();
                                setUpdatedCName(e.name);
                                setSelected(e);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => {
                                handleDeleteCategory(e._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
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
                    {/* <Text fontWeight="bold" mb="1rem">
                      You can scroll the content behind the modal
                    </Text> */}
                    <CategoryForm
                      value={updatedCName}
                      setValue={setUpdatedCName}
                      handleSubmit={handleUpdateCNameSubmit}
                    />
                    {/* <Lorem count={2} /> */}
                  </ModalBody>

                  {/* <ModalFooter>
                   <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter> */}
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
