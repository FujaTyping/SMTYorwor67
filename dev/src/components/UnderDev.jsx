import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

/* Assets */
import Yorwor from '../assets/Icon/Yorwor.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function UnderDev() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box style={{ margin: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} component="section" sx={{ p: 2, height: '100vh' }}>
          <Box style={{ margin: 'auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} component="section" sx={{ p: 2, width: '80%' }}>
            <img className='vibrate-1' style={{ width: '150px' }} src={Yorwor} />
            <div style={{ marginTop: '15px' }}>
              <Typography className='Title text-focus-in' variant="h3" gutterBottom>
                SMT - M.4/5
              </Typography>
              <Typography className='Cool text-focus-in-decs' variant="h5" gutterBottom>
                We're making things more awesome - Be back soon
              </Typography>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default UnderDev