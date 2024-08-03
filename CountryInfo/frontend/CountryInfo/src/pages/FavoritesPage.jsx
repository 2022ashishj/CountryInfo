import React, { useEffect, useState, useContext } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import CountryCard from '../components/CountryCard';
import { AuthContext } from '../context/AuthContext';
import { getFavorites } from '../services/api';

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const [favoriteCountries, setFavoriteCountries] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user || !user.token) {
        console.error('User is not authenticated');
        return;
      }

      try {
        const { data } = await getFavorites(user.token);
        setFavoriteCountries(data);
      } catch (err) {
        console.error('Failed to fetch favorite countries', err);
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <Box>
      <VStack spacing={4} mt={4}>
        {favoriteCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </VStack>
    </Box>
  );
};

export default FavoritesPage;
