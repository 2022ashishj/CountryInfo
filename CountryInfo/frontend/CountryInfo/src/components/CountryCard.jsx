import React, { useContext } from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { addFavorite } from '../services/api';

const CountryCard = ({ country }) => {
  const { user } = useContext(AuthContext);

  const handleAddFavorite = async () => {
    if (!user || !user.token) {
      console.error('User is not authenticated');
      return;
    }

    if (!country || !country.name || !country.name.common) {
      console.error('Invalid country data');
      return;
    }

    try {
      await addFavorite(user.token, country.name.common);
      alert('Added to favorites');
    } catch (err) {
      console.error('Failed to add to favorites', err);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      {country?.flags?.png && <Image src={country.flags.png} alt={`${country.name?.common} flag`} />}
      <Box p="6">
        <Text fontWeight="bold">{country?.name?.common}</Text>
        <Text>Currency: {country?.currencies?.[0]?.name}</Text>
        <Text>Capital: {country?.capital}</Text>
        <Text>Languages: {Object.values(country?.languages || {}).join(', ')}</Text>
        {user && <Button onClick={handleAddFavorite}>Add to Favorites</Button>}
      </Box>
    </Box>
  );
};

export default CountryCard;
