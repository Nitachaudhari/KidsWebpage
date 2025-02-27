import React from 'react';
import { Box,  Text,  Flex,  Button, Image, Container, VStack,Badge } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import kidsBackground from '../images/homebackground.png';
import { color } from 'framer-motion';

// Define animations
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Interactive Learning",
      desc: "Engaging games and activities.",
      bgColor: "rgba(255, 182, 193, 0.9)", 
      path: "/games",
      icon: "🎓",
      color:"rgba(227, 25, 11, 0.9)"
    },
    {
      title: "Fun Quizzes",
      desc: "Challenge your knowledge in a fun way.",
      bgColor: "rgba(255, 215, 0, 0.9)", 
      path: "/quiz",
      icon: "🎮",
      color:"rgba(38, 2, 244, 0.9)"
    },
    {
      title: "Reward System",
      desc: "Earn badges and rewards as you progress.",
      bgColor: "rgba(144, 238, 144, 0.9)", 
      path: "/rewards",
      icon: "🏆",
      color:"rgba(32, 138, 24, 0.9)"
    },
    {
      title: "Parental Monitoring",
      desc: "Keep track of your child's learning progress.",
      bgColor: "rgba(135, 206, 235, 0.9)", 
      path: "/monitoring",
      icon: "👨‍👩‍👧‍👦",
      color:"rgba(255, 81, 0, 0.9)"

    }
  ];

  return (
    <Box
      minH="100vh"
      bgImage={`url(${kidsBackground})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={8}
      position="relative"
    >
      {/* Overlay to ensure text readability */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(255, 255, 255, 0.1)"
      />
      
      <Container maxW="container.xl" position="relative">
        <VStack spacing={8}>
          {/* Welcome Section */}
          <Box
            textAlign="center"
            sx={{
              animation: `${float} 3s ease-in-out infinite`
            }}
            mt={10}
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, red.400, orange.400, yellow.400, green.400, blue.400, purple.400)"
              bgClip="text"
              letterSpacing="wider"
              fontFamily="'Comic Sans MS', cursive"
              mb={4}
            >
              Welcome to Kids Learning World!
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="white"
              maxW="600px"
              mx="auto"
              mb={6}
              fontFamily="'Comic Sans MS', cursive"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
            >
              Fun, interactive, and educational content to help kids learn and grow! 🌈
            </Text>
            <Button
              size="lg"
              fontSize="xl"
              py={8}
              px={12}
              bgGradient="linear(to-r, teal.400, blue.400)"
              color="white"
              _hover={{
                bgGradient: "linear(to-r, teal.500, blue.500)",
                transform: "translateY(-5px)",
                boxShadow: "xl"
              }}
              transition="all 0.3s"
              borderRadius="full"
              onClick={() => navigate('/lesson')}
              fontFamily="'Comic Sans MS', cursive"
            >
              Start Learning! 🚀
            </Button>
          </Box>

          {/* Features Section */}
          <Flex
            wrap="wrap"
            justify="center"
            gap={6}
            mt={16}
            px={4}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={feature.bgColor}
                color={feature.color}
                w={{ base: "full", md: "280px" }}
                h="320px"
                borderRadius="2xl"
                p={4}
                cursor="pointer"
                onClick={() => navigate(feature.path)}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "2xl",
                  bg: feature.bgColor.replace('0.9', '1')
                }}
                position="relative"
                overflow="hidden"
                backdropFilter="blur(5px)"
              >
                <VStack spacing={4} h="full" justify="center">
                  <Text
                    fontSize="6xl"
                    sx={{
                      animation: `${bounce} 2s ease-in-out infinite`
                    }}
                  >
                    {feature.icon}
                  </Text>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={feature.color}
                    fontFamily="'Comic Sans MS', cursive"
                    textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                  >
                    {feature.title}
                  </Text>
                  <Text
                    color="white"
                    textAlign="center"
                    fontSize="lg"
                    fontFamily="'Comic Sans MS', cursive"
                    textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                  >
                    {feature.desc}
                  </Text>
                  <Badge
                    colorScheme="purple"
                    position="absolute"
                    top={4}
                    right={4}
                    fontSize="xx-small"
                    borderRadius="full"
                    px={1}
                    py={1}
                  >
                    Click to Start!
                  </Badge>
                </VStack>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;