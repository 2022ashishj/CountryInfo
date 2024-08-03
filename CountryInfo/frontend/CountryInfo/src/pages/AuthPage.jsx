import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const AuthPage = () => {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Box mx="4">
        <LoginForm />
      </Box>
      <Box mx="4">
        <RegisterForm />
      </Box>
    </Flex>
  );
};

export default AuthPage;
