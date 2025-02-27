import React from 'react';
import { Home, BookOpenText, Gamepad2, Trophy, CircleUserRound,Menu, X } from 'lucide-react';
import { Box, Image, Flex, Text, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import navBg from "../images/navbackground.png";
import { path } from 'framer-motion/client';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const menuItem = [
    { icon: <Home strokeWidth={3} size={30} color="rgba(238, 7, 7, 1)" />, Label: "Home", path: "/" },
    { icon: <BookOpenText strokeWidth={3} size={30} color="rgba(221, 242, 12, 1)" />, Label: "Lesson", path: "/lesson" },
    { icon: <Gamepad2 strokeWidth={3} size={30} color="rgba(38, 0, 255, 1)" />, Label: "Games", path: "/games" },
    { icon: <Trophy strokeWidth={3} size={30} color="rgb(89, 245, 250)" />, Label: "Rewards", path: "/rewards" },
    {icon:<CircleUserRound strokeWidth={3} size={30} color="rgb(195, 86, 43)"/>, Label:"Login",path:"/authform"}
  ];

  return (
    <Box
      className="navbar"
      width="100%"
      display="flex"
      justifyContent="space-between"
      backgroundImage={`url(${navBg})`}
      borderBottom="1px solid white"
      color="white"
      fontWeight="bold"
      p="1"
    >
      <Flex alignItems="center" ml="4">
        <Image src={logo} borderRadius="full" boxSize="40px" fit="cover" alt='logo image' />
        <Text
          fontSize="2xl"
          fontWeight="bold"
          ml="3"
          bgGradient="linear(to-r, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)"
          bgClip="text"
        >
          KidsLove
        </Text>
      </Flex>

      {/* Mobile View - Hamburger Icon */}
      <Box display="flex" justifyContent="center" >
        <IconButton
            aria-label="Open Menu"
            icon={<Menu />}
            display={{ base: 'block', md: 'none'}}
            onClick={onToggle}
            backgroundColor="blue"
        />
      </Box>      

      {/* Desktop View - Menu Items */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        gap="16"
        p="1.5"
        mr="6"
      >
        {menuItem.map((item, index) => (
          <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
            <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
              {item.icon}
              <Box>{item.Label}</Box>
            </Box>
          </Link>
        ))}
      </Flex>

      {/* Mobile Drawer */}
      {isOpen && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bg="rgba(0,0,0,0.7)"
          p="4"
          display={{ base: 'block', md: 'none' }}
        >
          <IconButton
            aria-label="Close Menu"
            icon={<X />}
            onClick={onToggle}
            color="red"
            backgroundColor="skyblue"
            ml="auto"
          />
          <VStack spacing={6} mt="6">
            {menuItem.map((item, index) => (
              <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
                  {item.icon}
                  <Box>{item.Label}</Box>
                </Box>
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
