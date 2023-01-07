import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useStore } from "react-redux";
import { fetchUsers, fetchUser } from "./actions/users";
import UserCard from "./UserCard";
import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  ButtonGroup,
  Grid,
  Card,
  Flex,
} from "@chakra-ui/react";
import Loader from "./Loader";

import './App.module.css'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const store = useStore();
  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [cardLoad, setCardload] = useState(true);

  const handleStore = async () => {
    await dispatch(fetchUsers());
    const state = store.getState();
    setusers(state.default.users.users);
    setSelectedUser(state.default.users.selectedUser);
    setIsLoading(false);
  };

  useEffect(() => {
    handleStore();
  }, []);

  const handleButtonClick = async (userId) => {
    setCardload(true);
    await dispatch(fetchUser(userId));
    const state = store.getState();
    setSelectedUser(state.default.users.selectedUser);
    setCardload(false);
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxW="md">
      <Center height={'100vh'}><Stack>
      <div>
      {!cardLoad && selectedUser && selectedUser != undefined && selectedUser ? (
        <UserCard data={selectedUser} />
      ) : (
        <Card padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="20" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Card>
      )}
      <br />
      </div>
      <div>
        <ButtonGroup spacing='4' className="scrollable">
        {users &&
          users != undefined &&
          users.map((user) => (
            <Button
              key={user.id}
              onClick={() => handleButtonClick(user.id)}
              colorScheme="blue"
              variant={selectedUser && user.id==selectedUser.id ? "solid" : 'outline'}
              marginX={2}
            >
              {user.id}
            </Button>
          ))}
          </ButtonGroup>
      </div>
      </Stack></Center>
    </Container>
  );
}

export default App;

// {users != undefined && users.map((user) => (
//   <button key={user.id} onClick={() => handleButtonClick(user.id)}>
//     {user.id}
//   </button>
// ))}
// {selectedUser != undefined ? (
//   <div>
//     <h2>{selectedUser.name}</h2>
//     <p>Email: {selectedUser.email}</p>
//     {/* <p>Phone: {selectedUser.phone}</p> */}
//   </div>
// ) : (
//   <p>Click on a button to display a user's data</p>
// )}
