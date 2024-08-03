import React, { useState } from 'react';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { register } from '../../services/api';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password });
      alert('Registration successful');
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <Box>
      <Heading>Register</Heading>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Register</Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
