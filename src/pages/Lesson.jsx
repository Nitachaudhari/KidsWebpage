import React from "react";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import lessonBg from "../images/homebackground.png";
import { useNavigate } from "react-router-dom";

const lessons = [
  {
    name: "Alphabets",
    path: "alphabets",
    image: "https://i.ibb.co/6c6W5L4h/alphabet.jpg",
  },
  {
    name: "Numbers",
    path: "numbers",
    image: "https://i.ibb.co/RGnF1cr3/numbers.jpg",
  },
  {
    name: "Vegetables",
    path: "vegetables",
    image: "https://i.ibb.co/77jgnpv/veggie.jpg",
  },
  {
    name: "Water Animals",
    path: "waterAnimals",
    image: "https://i.ibb.co/YB0qjK1g/wateranimals.jpg",
  },
  {
    name: "Insects",
    path: "insects",
    image: "https://i.ibb.co/6cgMMsgr/insects.jpg",
  },
  {
    name: "Flowers",
    path: "flowers",
    image: "https://i.ibb.co/gFh6F3Rd/flowers.jpg",
  },
  {
    name: "Fruits",
    path: "fruits",
    image: "https://i.ibb.co/200jPLKB/fruits.jpg",
  },
];

function Lesson() {
  const navigate = useNavigate();

  return (
    <Box position="relative" h="100vh">
      {/* Background with Opacity using an Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${lessonBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity (0.1 to 1)
        }}
      />

      {/* Foreground Content */}
      <Box textAlign="center" p="5" position="relative" zIndex="1">
        <Text
          fontSize="3xl"
          mb="4"
          fontWeight="bold"
          bgGradient="linear(to-r,rgb(255, 9, 9),rgb(209, 244, 11),rgb(43, 7, 244))"
          bgClip="text"
          color="transparent"
        >
          Select a Lesson
        </Text>

        <Grid
          templateColumns="repeat(5,1fr)"
          gap={6}
          justifyContent="center"
        >
          {lessons.map((lesson) => (
            <GridItem
              key={lesson.path}
              cursor="pointer"
              onClick={() => navigate(`/lesson/${lesson.path}`)}
              p={4}
              borderRadius="9"
              boxShadow="md"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              bg="blue.200"
            >
              <Image
                src={lesson.image}
                alt={lesson.name}
                boxSize="200px"
                objectFit="cover"
                mx="auto"
                borderRadius="14"
              />
              <Text mt="2" fontSize="lg" fontWeight="bold">
                {lesson.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Lesson;
