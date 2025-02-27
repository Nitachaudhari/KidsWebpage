import React, { useState } from 'react';
import { Box, Button, Image, Text, HStack, IconButton } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LessonDetailback from '../images/homebackground.png'
const lessons = {

  alphabets: [
    { name: "A for Apple", image: "https://i.ibb.co/Q3fGVKpP/a.jpg" },
    { name: "B for Ball", image: "https://i.ibb.co/mC6TmDBW/b.jpg" },
    { name: "C for Cat", image: "https://i.ibb.co/RTGw59VT/c.jpg" },
    { name: "D for Dog", image: "https://i.ibb.co/fdWd9xFj/d.jpg" },
    { name: "E for Elephant", image: "https://i.ibb.co/RTXnpKk8/e.jpg" },
    { name: "F for Fish", image: "https://i.ibb.co/gMtXpsNT/f.jpg" },
    { name: "G for Grapes", image: "https://i.ibb.co/YB5nN4PY/g.jpg" },
    { name: "H for Hat", image: "https://i.ibb.co/9m2PmFj5/h.jpg" },
    { name: "I for Ice Cream", image: "https://i.ibb.co/MkjgVQBF/i.jpg" },
    { name: "J for Jug", image: "https://i.ibb.co/DHH8YYLy/j.jpg" },
    { name: "K for Kite", image: "https://i.ibb.co/7Nnm6tNd/k.jpg" },
    { name: "L for Lion", image: "https://i.ibb.co/zhggDxvs/l.jpg" },
    { name: "M for Monkey", image: "https://i.ibb.co/DHMw2wqB/m.jpg" },
    { name: "N for Nest", image: "https://i.ibb.co/vvCKvwBm/n.jpg" },
    { name: "O for Orange", image: "https://i.ibb.co/9k4Z3d9d/o.jpg" },
    { name: "P for Parrot", image: "https://i.ibb.co/ympdRcPP/p.jpg" },
    { name: "Q for Queen", image: "https://i.ibb.co/cK5Wqtby/q.jpg" },
    { name: "R for Rabbit", image: "https://i.ibb.co/WNvHgtkL/r.jpg" },
    { name: "S for Sun", image: "https://i.ibb.co/8LFvZMzK/s.jpg" },
    { name: "T for Tiger", image: "https://i.ibb.co/ks4dTFcR/t.jpg" },
    { name: "U for Umbrella", image: "https://i.ibb.co/FkxZPDyT/u.jpg" },
    { name: "V for Van", image: "https://i.ibb.co/q3sNV2rT/v.jpg" },
    { name: "W for Watch", image: "https://i.ibb.co/nqgnNDBt/watch.jpg" },
    { name: "X for Xylophone", image: "https://i.ibb.co/PZfkfg4n/x.jpg" },
    { name: "Y for Yak", image: "https://i.ibb.co/nqdwT7V1/y.jpg" },
    { name: "Z for Zebra", image: "https://i.ibb.co/5fj9C8f/z.jpg" },
  ],

  numbers: [
    { name: "one", image: "https://i.ibb.co/FLn0Dqxt/1.jpg" },
    { name: "two", image: "https://i.ibb.co/1YfLjLy4/2.jpg" },
    { name: "three", image: "https://i.ibb.co/W4d2NwYK/3.jpg" },
    { name: "four", image: "https://i.ibb.co/GQ8fds7d/4.jpg" },
    { name: "five", image: "https://i.ibb.co/7dndKsZL/5.jpg" },
    { name: "six", image: "https://i.ibb.co/JjbSr6GK/6.jpg" },
    { name: "seven", image: "https://i.ibb.co/HDgYvwC8/7.jpg" },
    { name: "eight", image: "https://i.ibb.co/cKqycKFY/8.jpg" },
    { name: "nine", image: "https://i.ibb.co/Lfrr9t4/9.jpg" }
  ],

  insects: [
    { name: 'Butterfly', image: 'https://i.ibb.co/d0rkndqr/butterfly.jpg' },
    { name: 'Bee', image: 'https://i.ibb.co/Jh8ZDmy/bee.jpg' },
    { name: 'Ant', image: 'https://i.ibb.co/21DpHT2n/ant.jpg' },
    { name: 'Dragonfly', image: 'https://i.ibb.co/qMC3ybVc/dragonfly.jpg' },
    { name: 'Ladybug', image: 'https://i.ibb.co/fYQdJ9sZ/ladybug.jpg' },
    { name: 'Grasshopper', image: 'https://i.ibb.co/Hp27Q5jf/grasshooper.jpg' },
    { name: 'Mosquito', image: 'https://i.ibb.co/35KJxJHP/mosquito.jpg' },
    { name: 'Fly', image: 'https://i.ibb.co/4Zr1XZbh/housefly.jpg' },
    { name: 'Caterpillar', image: 'https://i.ibb.co/N6WkC7kp/caterpiller.jpg' },
    { name: 'Moth', image: 'https://i.ibb.co/HTqRKYJF/snail.jpg' },
    { name: 'Firefly', image: 'https://i.ibb.co/JWPtrpz7/beetle.jpg' },
    { name: 'Termite', image: 'https://i.ibb.co/Kc27JS32/silverfish.jpg' },
    { name: 'Cockroach', image: 'https://i.ibb.co/Ps1vh5HK/chroachroch.jpg' },
    { name: 'Cricket', image: 'https://i.ibb.co/5WyzFj5K/cricket.jpg' },
    { name: 'Stag Beetle', image: 'https://i.ibb.co/JWPtrpz7/beetle.jpg' },
    { name: 'Scorpion', image: 'https://i.ibb.co/ynRBG1qb/scorpio.jpg' },
    { name: 'Spider', image: 'https://i.ibb.co/6c1YLCZL/spider.jpg' },
    { name: 'Centipede', image: 'https://i.ibb.co/mrZK8PZg/centipide.jpg' },
    { name: 'Millipede', image: 'https://i.ibb.co/6JL6GLLq/earthworm.jpg' },
    { name: 'Cicada', image: 'https://i.ibb.co/20jNGBt3/cicada.jpg' },
  ],

  flowers: [
    { name: 'Aster', image: 'https://i.ibb.co/wNZt2v8f/aster.jpg' },
    { name: 'Rose', image: 'https://i.ibb.co/tPQvXhn8/rose.jpg' },
    { name: 'Lavender', image: 'https://i.ibb.co/N68zmzcS/lavender.jpg' },
    { name: 'Sunflower', image: 'https://i.ibb.co/G3k0pnWz/sunflower.jpg' },
    { name: 'Poppy', image: 'https://i.ibb.co/SXK0Nh4X/poppy.jpg' },
    { name: 'Daisy', image: 'https://i.ibb.co/k2k9HfpL/daisy.jpg' },
    { name: 'Hibiscus', image: 'https://i.ibb.co/wrWhDWs9/hibiscus.jpg' },
    { name: 'Daffodil', image: 'https://i.ibb.co/xtg2Z7Kv/daffodil.jpg' },
    { name: 'Tulip', image: 'https://i.ibb.co/XkbRFpFK/tulip.jpg' },
    { name: 'Pansy', image: 'https://i.ibb.co/cc9GM8Jx/pansi.jpg' },
    { name: 'Dahlia', image: 'https://i.ibb.co/Sw9FYvY0/dahila.jpg' },
    { name: 'Mogra', image: 'https://i.ibb.co/7dYs6WGG/mogra.jpg' },
    { name: 'Orchid', image: 'https://i.ibb.co/Kj1Dbwh8/orchid.jpg' },
    { name: 'Lotus', image: 'https://i.ibb.co/35Dfnzn9/lotus.jpg' },
    { name: 'Lily', image: 'https://i.ibb.co/FkVvKwpN/lily.jpg' },
    { name: 'Jasmine', image: 'https://i.ibb.co/JW29n2L1/jasmin.jpg' },
    { name: 'Marigold', image: 'https://i.ibb.co/4n4z032V/marrigold.jpg' },
  ],

  vegetables: [
    { name: 'Carrot', image: 'https://i.ibb.co/PzjgXznY/carrots.jpg' },
    { name: 'Tomato', image: 'https://i.ibb.co/N6SbFWdZ/tamato.jpg' },
    { name: 'Potato', image: 'https://i.ibb.co/GfC8BXk0/potatao.jpg' },
    { name: 'Cabbage', image: 'https://i.ibb.co/hJ5Qy1sw/cabbage.jpg' },
    { name: 'Turnip', image: 'https://i.ibb.co/r22NhSP5/turnip.jpg' },
    { name: 'Bitter Gourd', image: 'https://i.ibb.co/qFxXsftY/bitterguard.jpg' },
    { name: 'Green Beans', image: 'https://i.ibb.co/yFY23knN/green-beans.jpg' },
    { name: 'Cauliflower', image: 'https://i.ibb.co/1tXkYTS4/cauliflower.jpg' },
    { name: 'Corn', image: 'https://i.ibb.co/Hp7P9zzb/corn.jpg' },
    { name: 'Sweet Potato', image: 'https://i.ibb.co/C5Cy1cDD/sweetpotato.jpg' },
    { name: 'Red Chilli Pepper', image: 'https://i.ibb.co/0RJkK0V9/redchillipaper.jpg' },
    { name: 'Beetroot', image: 'https://i.ibb.co/hqMKLXz/beet.jpg' },
    { name: 'Peas', image: 'https://i.ibb.co/Cp5h7Yny/peas.jpg' },
    { name: 'Mushroom', image: 'https://i.ibb.co/q359JdVK/mashrom.jpg' },
    { name: 'Pumpkin', image: 'https://i.ibb.co/zh15tX0Z/pumpkin.jpg' },
    { name: 'Broccoli', image: 'https://i.ibb.co/Cp1BXTFS/broccoli.jpg' },
    { name: 'Cucumber', image: 'https://i.ibb.co/gF4PhT8T/cucumber.jpg' },
    { name: 'Lettuce', image: 'https://i.ibb.co/zW8k2yws/lattus.jpg' },
    { name: 'Coriander', image: 'https://i.ibb.co/7JxLzjgX/coriender.jpg' },
    { name: 'Spinach', image: 'https://i.ibb.co/sTqWGK6/spinach.jpg' },
    { name: 'Lady Finger', image: 'https://i.ibb.co/F43rCD3b/ladyfinger.jpg' },
    { name: 'Onion', image: 'https://i.ibb.co/RGZdCTcL/onion.jpg' },
    { name: 'Garlic', image: 'https://i.ibb.co/VpbHr89V/garlic.jpg' },
    { name: 'Ginger', image: 'https://i.ibb.co/S4pPQHCS/ginger.jpg' },
    { name: 'Brinjal (Eggplant)', image: 'https://i.ibb.co/DDD5JXc4/bringle.jpg' },
    { name: 'Capsicum', image: 'https://i.ibb.co/b5xBHbfL/capsicum.jpg' },
    { name: 'Chilli', image: 'https://i.ibb.co/Zp4DW9WW/chilli.jpg' },
    { name: 'Radish', image: 'https://i.ibb.co/n8r8LGLr/radish.jpg' },
  ],

  waterAnimals: [
    { name: "penguin", image: "https://i.ibb.co/cSb06trZ/penguin.jpg" },
    { name: "shrimp", image: "https://i.ibb.co/kgZ18Vz9/shrimp.jpg" },
    { name: "turtle", image: "https://i.ibb.co/N64d87By/turtle.jpg" },
    { name: "starfish", image: "https://i.ibb.co/mrkpDv6k/starfish.jpg" },
    { name: "seahorse", image: "https://i.ibb.co/C3cgKH70/seahorse.jpg" },
    { name: "shark", image: "https://i.ibb.co/r2D0TDyy/shark.jpg" },
    { name: "oyster", image: "https://i.ibb.co/TMRg0sVr/oyster.jpg" },
    { name: "octopus", image: "https://i.ibb.co/xKbYpB0m/octopus.jpg" },
    { name: "dolphin", image: "https://i.ibb.co/ZzSqGrNc/dolphine.jpg" }, 
    { name: "fish", image: "https://i.ibb.co/8kWf9cs/fish.jpg" },
    { name: "crab", image: "https://i.ibb.co/MkySX642/crab.jpg" },
  ],

  fruits : [
    { name: "kiwi", image: "https://i.ibb.co/WvM7fK78/kiwi.jpg" },
    { name: "coconut", image: "https://i.ibb.co/35rh4H51/coconut.jpg" },
    { name: "melon", image: "https://i.ibb.co/5Xtxdt98/melon.jpg" },
    { name: "papaya", image: "https://i.ibb.co/TDmxLLZr/papaya.jpg" },
    { name: "blueberry", image: "https://i.ibb.co/CKDjmJvt/blueberry.jpg" },
    { name: "plum", image: "https://i.ibb.co/yFvwCq7G/plum.jpg" },
    { name: "orange", image: "https://i.ibb.co/chHL8hJc/orange.jpg" },
    { name: "grapes", image: "https://i.ibb.co/whhMV5GK/grapes.jpg" },
    { name: "watermelon", image: "https://i.ibb.co/d4yTrSnJ/water-melon.jpg" },
    { name: "custard apple", image: "https://i.ibb.co/0yFJWnkm/custurd-apple.jpg" },
    { name: "banana", image: "https://i.ibb.co/Ldp1kC36/banana.jpg" },
    { name: "pomegranate", image: "https://i.ibb.co/QvLKYFvp/pomegranate.jpg" },
    { name: "pear", image: "https://i.ibb.co/VW80hgCF/pear.jpg" },
    { name: "apple", image: "https://i.ibb.co/fYH7WQbR/apple.jpg" },
    { name: "pineapple", image: "https://i.ibb.co/jsvyvZQ/pineapple.jpg" },
    { name: "orange", image: "https://i.ibb.co/hRTw7gkZ/oranges.jpg" },
    { name: "strawberry", image: "https://i.ibb.co/FqbLf9CG/strawberry.jpg" },
    { name: "cherry", image: "https://i.ibb.co/MyK39CXV/cherry.jpg" },
    { name: "mango", image: "https://i.ibb.co/JRwqD0Sk/mango.jpg" }
]

  
};

function LessonDetail() {
  const { lesson } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < lessons[lesson].length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const currentLesson = lessons[lesson][currentIndex];

  return (
    <Box textAlign="center" p="5" h="100vh" backgroundImage={`url(${LessonDetailback})`}>
    <Text fontSize="2xl" mb="2">Let's Learn About {lesson.charAt(0).toUpperCase() + lesson.slice(1)}!</Text>
  
    <Box mb="4">
      <HStack spacing={4} justifyContent="center">
        {/* Left Icon (Prev) */}
        <IconButton
          icon={<ChevronLeft size={32} />}
          onClick={handlePrev}
          aria-label="Previous Lesson"
          colorScheme="blue"
          isDisabled={currentIndex === 0}
        />
  
        {/* Image with clickable feature for speaking */}
        <Image
          src={currentLesson.image}
          alt={currentLesson.name}
          boxSize="350px"
          objectFit="contain"  
          // border="1px solid red"
          p="2" 
          backgroundColor="white"
          onClick={() => speakText(currentLesson.name)}  
          cursor="pointer"
        />
  
        {/* Right Icon (Next) */}
        <IconButton
          icon={<ChevronRight size={32} />}
          onClick={handleNext}
          aria-label="Next Lesson"
          colorScheme="blue"
          isDisabled={currentIndex === lessons[lesson].length - 1}
        />
      </HStack>
    </Box>
  
    <Text fontSize="xl" fontWeight="bold">{currentLesson.name}</Text>
  
    <HStack spacing={4} justifyContent="center" mt="4">
      <Button onClick={() => navigate('/lesson')} colorScheme="blue">Go Back</Button>
    </HStack>
  </Box>
  
  );
}

export default LessonDetail;
