import React, { useState, useRef, useEffect, useContext } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { getCountryByCurrency, addSearchHistory } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const SearchBar = ({ setCountries }) => {
  const [currency, setCurrency] = useState('');
  const inputRef = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = async () => {
    try {
      const { data } = await getCountryByCurrency(currency);
      setCountries(data);
      if (user) {
        await addSearchHistory(user, currency);
      }
    } catch (err) {
      console.error('Failed to fetch country', err);
    }
  };

  return (
    <Box>
      <Input ref={inputRef} placeholder="Enter currency code" value={currency} onChange={(e) => setCurrency(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default SearchBar;
