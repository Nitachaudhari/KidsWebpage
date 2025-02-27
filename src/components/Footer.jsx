import React from "react";
import { Box, Text, HStack, VStack, IconButton, Divider } from "@chakra-ui/react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import navBg from "../images/navbackground.png";

function Footer() {
  return (
    <Box backgroundImage={`url(${navBg})`} color="white" py={6} borderTop="1px solid white">
      <VStack spacing={4}>
        {/* Logo & Description */}
        <Text fontSize="2xl" fontWeight="bold" fontFamily="'Comic Sans MS', cursive">
          🎨 Kids Learning World 🚀
        </Text>
        <Text fontSize="md" textAlign="center" maxW="400px">
          Fun, interactive, and engaging lessons to make learning enjoyable for kids! 🌟
        </Text>

        <Divider borderColor="whiteAlpha.600" />

        {/* Social Media Icons */}
        <HStack spacing={4}>
          <IconButton as="a" href="#" aria-label="Facebook" icon={<Facebook size={24} />} variant="ghost" color="white" _hover={{ bg: "whiteAlpha.300" }} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<Twitter size={24} />} variant="ghost" color="white" _hover={{ bg: "whiteAlpha.300" }} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<Instagram size={24} />} variant="ghost" color="white" _hover={{ bg: "whiteAlpha.300" }} />
          <IconButton as="a" href="#" aria-label="YouTube" icon={<Youtube size={24} />} variant="ghost" color="white" _hover={{ bg: "whiteAlpha.300" }} />
          <IconButton as="a" href="#" aria-label="Email" icon={<Mail size={24} />} variant="ghost" color="white" _hover={{ bg: "whiteAlpha.300" }} />
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm" mt={2} opacity={0.8}>
          © {new Date().getFullYear()} Kids Learning World. All Rights Reserved.
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
