import React, { useState } from 'react';
import { Button, Box, Text, useToast, VStack } from '@chakra-ui/react';

const ColorMatchingGame = () => {
  const toast = useToast();
  const colorPairs = [
    { color: 'red', word: 'Red' },
    { color: 'blue', word: 'Blue' },
    { color: 'green', word: 'Green' },
    { color: 'yellow', word: 'Yellow' },
  ];

  const [selectedColor, setSelectedColor] = useState('');
  const [score, setScore] = useState(0);
  const [shuffledColors, setShuffledColors] = useState(
    [...colorPairs, ...colorPairs].sort(() => Math.random() - 0.5)
  );
  const [disabledColors, setDisabledColors] = useState([]);

  const handleColorClick = (color) => {
    if (selectedColor === '') {
      setSelectedColor(color);
    } else {
      if (selectedColor === color) {
        setScore(score + 1);
        setDisabledColors([...disabledColors, color]);
        toast({
          title: 'Correct!',
          description: 'You matched the color!',
          status: 'success',
          duration: 1000,
        });
      } else {
        toast({
          title: 'Try Again!',
          description: 'You selected the wrong color.',
          status: 'error',
          duration: 1000,
        });
      }
      setSelectedColor('');
    }
  };

  return (
    <Box>
      <Text fontSize="2xl" textAlign="center" mb={4} color="teal.500">
        Color Matching Game
      </Text>
      <VStack spacing={6} align="center">
        <Text fontSize="xl" fontWeight="bold">
          Score: {score}
        </Text>
        <Box display="flex" gap={4} flexWrap="wrap" justify="center">
          {shuffledColors.map((item, index) => (
            <Button
              key={index}
              size="lg"
              bg={item.color}
              color="white"
              onClick={() => handleColorClick(item.word)}
              isDisabled={disabledColors.includes(item.word)}
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'lg',
              }}
              _active={{
                transform: 'scale(0.95)',
              }}
              transition="all 0.3s"
            >
              {item.word}
            </Button>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default ColorMatchingGame;
