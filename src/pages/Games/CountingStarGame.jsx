import React, { useState, useEffect } from 'react';
import { Button, Box, Text, useToast, Grid } from '@chakra-ui/react';
import { Star } from 'lucide-react';

const CountingStarsGame = () => {
  const toast = useToast();
  const [starCount, setStarCount] = useState(0);
  const [input, setInput] = useState('');
  const [correct, setCorrect] = useState(false);

  // Define a list of colors for the stars
  const starColors = ['#FFDD57', '#FF6347', '#4682B4', '#32CD32', '#6A5ACD', '#FF1493'];

  const generateRandomStars = () => {
    const randomCount = Math.floor(Math.random() * 11) + 5;  // Random stars between 5 and 15
    setStarCount(randomCount);
  };

  useEffect(() => {
    generateRandomStars();  // Initialize the game with a random number of stars
  }, []);

  const handleSubmit = () => {
    if (parseInt(input) === starCount) {
      setCorrect(true);
      toast({
        title: 'Correct!',
        description: `You counted ${starCount} stars correctly!`,
        status: 'success',
        duration: 1000,
      });

      // After correct answer, generate new stars
      generateRandomStars();
    } else {
      setCorrect(false);
      toast({
        title: 'Incorrect!',
        description: `Try again! You counted ${input} stars.`,
        status: 'error',
        duration: 1000,
      });
    }

    // Reset the input field after each submit
    setInput('');
  };

  return (
    <Box textAlign="center" p={6}>
      <Text fontSize="3xl" mb={4}>
        Counting Stars Game
      </Text>
      <Text fontSize="xl" mb={4}>
        How many stars are there?
      </Text>

      {/* Stars Display in One Box */}
      <Box
        bg="gray.700"
        p={4}
        borderRadius="md"
        boxShadow="lg"
        mb={6}
        display="inline-block"
        w="auto"
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={4} justifyItems="center">
          {Array(starCount)
            .fill()
            .map((_, index) => (
              <Box key={index} position="relative">
                <Star
                  size={30}
                  color={starColors[Math.floor(Math.random() * starColors.length)]}
                />
              </Box>
            ))}
        </Grid>
      </Box>

      {/* Input and Submit */}
      <Box mb={4}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your guess"
          style={{
            padding: '10px',
            fontSize: '18px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            width: '200px',
            textAlign: 'center',
          }}
        />
        <Button
          mt={4}
          colorScheme="teal"
          onClick={handleSubmit}
          _hover={{ bg: 'teal.400' }}
        >
          Submit
        </Button>
      </Box>

      {/* Result Message */}
      {correct && (
        <Text mt={4} color="green.500" fontSize="lg">
          You got it right! 🎉
        </Text>
      )}
    </Box>
  );
};

export default CountingStarsGame;
