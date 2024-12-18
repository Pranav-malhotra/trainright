import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercise, setExercises] = useState([]);

    console.log(bodyPart)
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercise={exercise} setExercises={setExercises} bodyPart={bodyPart}  />
        </Box>
    )
}

export default Home;