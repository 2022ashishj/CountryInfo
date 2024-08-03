import React, { useState, useContext } from 'react';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../services/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login: loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ username, password });
      loginUser(data.token);
      alert("Successfully Logged In");
    } catch (err) {
        alert("incorrect credentials, Check it");
      console.error('Login failed', err);
    }
  };

  return (
    <Box>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default LoginForm;
