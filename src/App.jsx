import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import theme from './themes';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Lesson from './pages/Lesson'
import Games from './pages/Games/Games'
import Rewards from './pages/Rewards'
import LessonDetails from './pages/LessonDetails';
import ParentalMonitoring from './pages/ParentalMonitoring';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import MemoryGame from './pages/Games/MemoryGame';
import ColorMatchingGame from './pages/Games/ColorMatchingGame';
import CountingStarsGame from './pages/Games/CountingStarGame';
import AuthForms from './components/AuthForm';

function App() {

  return (
    // <Navbar/>
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/authform' element={<AuthForms/>}/>
          <Route path='/lesson' element={<Lesson />} />
          <Route path='/lesson/:lesson' element={<LessonDetails />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/game1' element={<MemoryGame />} />
          <Route path='/games/game2' element={<ColorMatchingGame />} />
          <Route path='/games/game3' element={<CountingStarsGame />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/monitoring' element={<ParentalMonitoring/>} />
          <Route path='/quiz' element={<Quiz/>}/>
          

        </Routes>
        <Footer/>
      </Router>
    </ChakraProvider>

  )
}

export default App
