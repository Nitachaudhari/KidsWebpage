import React, { useState, useEffect } from 'react';
import { Button, Grid, Box, Text, useToast, VStack } from '@chakra-ui/react';

const MemoryGame = () => {
  const toast = useToast();
  const fruits = ['🍎', '🍌', '🍓', '🍇', '🍊', '🍉', '🍍', '🍒'];

  // Shuffle fruits once at the start
  const [shuffledFruits] = useState([...fruits, ...fruits].sort(() => Math.random() - 0.5));

  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Handle card click
  const handleCardClick = (index) => {
    if (selected.length === 2 || matched.includes(index)) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [firstIndex, secondIndex] = newSelected;
      if (shuffledFruits[firstIndex] === shuffledFruits[secondIndex]) {
        setMatched((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
        setSelected([]);
        if (matched.length + 2 === shuffledFruits.length) {
          setGameOver(true);
          toast({
            title: 'Congratulations!',
            description: 'You matched all the fruits!',
            status: 'success',
            duration: 2000,
          });
        }
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  return (
    <VStack spacing={6} align="center" mb={6}>
      <Text fontSize="3xl" fontWeight="bold" color="teal.500">
        Fruit Memory Game
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="lg">
        {shuffledFruits.map((fruit, index) => (
          <Box
            key={index}
            p={6}
            borderRadius="md"
            bg={selected.includes(index) || matched.includes(index) ? 'white' : 'gray.200'}
            borderWidth={2}
            borderColor="teal.300"
            textAlign="center"
            cursor="pointer"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
            onClick={() => handleCardClick(index)}
          >
            {selected.includes(index) || matched.includes(index) ? (
              <Text fontSize="3xl">{fruit}</Text>
            ) : (
              <Text fontSize="3xl">❓</Text>
            )}
          </Box>
        ))}
      </Grid>

      {gameOver && (
        <Button
          mt={6}
          colorScheme="teal"
          onClick={() => window.location.reload()}
          size="lg"
        >
          Play Again
        </Button>
      )}
    </VStack>
  );
};

export default MemoryGame;
