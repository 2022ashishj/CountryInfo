import React, { useContext } from 'react';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Box bg="teal" p="4">
      <Flex justify="space-between" align="center">
        <Box>
          <Link as={RouterLink} to="/" color="white" mr="4">Home</Link>
          {user && <Link as={RouterLink} to="/favorites" color="white">Favorites</Link>}
        </Box>
        <Box>
          {user ? (
            <Button color="white" onClick={logout}>Logout</Button>
          ) : (
            <Link as={RouterLink} to="/auth" color="white">Login/Register</Link>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
