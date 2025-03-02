import React, { useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Button, Text, Flex, useToast, VStack, SlideFade } from '@chakra-ui/react';
import { ArrowLeft, Brain, Palette, Calculator, Star, Trophy, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Games = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const toast = useToast();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const games = [
    {
      id: 'memory',
      title: 'Fruit Memory',
      description: 'Match the fruits to win!',
      icon: <Brain size={48} />,
      color: 'pink.400',
      route: '/games/game1', // Add the route for each game
    },
    {
      id: 'colors',
      title: 'Color Matching',
      description: 'Learn and match colors!',
      icon: <Palette size={48} />,
      color: 'purple.400',
      route: '/games/game2',
    },
    {
      id: 'counting',
      title: 'Counting Stars',
      description: 'Count the stars and learn numbers!',
      icon: <Calculator size={48} />,
      color: 'yellow.400',
      route: '/games/game3',
    },
  ];

  return (
    <Box minH="100vh" bg="blue.200" py={8}>
      <Container maxW="6xl">
        <Flex justify="flex-end" mb={4}>
          <Button
            leftIcon={isSoundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            onClick={() => setIsSoundOn(!isSoundOn)}
            variant="ghost"
            colorScheme="purple"
          >
            {isSoundOn ? 'Sound On' : 'Sound Off'}
          </Button>
        </Flex>

        {/* Show the game selection screen */}
        <Heading as="h1" size="2xl" textAlign="center" mb={8} color="purple.600">
          Fun Learning Games{' '}
          <Box as="span" display="inline-block">
            <Trophy size={40} />
          </Box>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {games.map((game) => (
            <SlideFade in={true} key={game.id}>
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
                cursor="pointer"
                onClick={() => navigate(game.route)} // Navigate to the selected game route
              >
                <VStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="full"
                    bg={`${game.color}`}
                    opacity={0.1}
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      color={game.color}
                    >
                      {game.icon}
                    </Box>
                  </Box>
                  <Heading as="h3" size="lg" color={game.color}>
                    {game.title}
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    {game.description}
                  </Text>
                  <Button
                    colorScheme="teal"
                    size="lg"
                    w="full"
                    _hover={{ transform: 'scale(1.05)' }}
                    rightIcon={<Star size={20} />}
                  >
                    Play Now!
                  </Button>
                </VStack>
              </Box>
            </SlideFade>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Games;
