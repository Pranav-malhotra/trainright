import React ,{useState, useEffect} from 'react';
import {Box, Button, Stack ,TextField, Typography} from '@mui/material'; 

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px',mb:'50px' ,textAlign:'center'}}}>
      Great Workouts You <br />
      Should Try
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input:{fontWeight:'700',border:'none', borderRadius:'4px'}
        }}
        height='76px' value='' 
        onChange={(e)=>{}}
        placeholder='Search Exercises'
        type='text' />
      </Box>

    </Stack>

  )
}

export default SearchExercises