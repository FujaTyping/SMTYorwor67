import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import useSound from 'use-sound';
import Countdown from 'react-countdown';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

/* Assets */
import Yorwor from '../assets/Icon/Yorwor.png'
import MenuSound from '../assets/Sound/Outerspace.mp3'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function UnderDev() {
  const [volume] = React.useState(0.35);
  const [MenuOST, { stop }] = useSound(MenuSound, { volume, loop: true });
  let StateOST = 1;
  MenuOST();

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
              <hr />
              <Typography style={{ marginTop: '18px' }} className='Cool text-focus-in-decs' variant="h5" gutterBottom>
                We're making things more awesome <br />Be back soon (<Countdown date={1715018400000} />)
              </Typography>
            </div>
          </Box>
        </Box>
        <Fab onClick={() => { if (StateOST == 1) { document.getElementById('MusicOFF').style.display = 'block'; document.getElementById('MusicON').style.display = 'none'; stop(); StateOST = 0; } else { document.getElementById('MusicOFF').style.display = 'none'; document.getElementById('MusicON').style.display = 'block'; stop(); MenuOST(); StateOST = 1; } }} id='ControlMusic' className='FabPause' aria-label="add">
          <MusicNoteIcon id='MusicON' />
          <MusicOffIcon style={{ display: 'none' }} id='MusicOFF' />
        </Fab>
      </ThemeProvider>
    </>
  )
}

export default UnderDev