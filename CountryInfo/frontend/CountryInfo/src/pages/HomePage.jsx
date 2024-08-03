import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  return (
    <Box>
      <SearchBar setCountries={setCountries} />
      <VStack spacing={4} mt={4}>
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;
