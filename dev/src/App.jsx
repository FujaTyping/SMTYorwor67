import React from 'react'
import './App.css'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { hcaptchakey } from './config.json'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

/* Components */
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UnderDev from './components/UnderDev'

/* Script */
import Verify from './script/SimpleCaptcha';

function App() {
  return (
    <>
      <UnderDev />
      <div id='VerifySuccess' style={{ display: 'none' }}>
        <Alert className='Cool bounce-in-bottom' style={{ width: '300px', margin: 'auto', borderRadius: '30px' }} variant="filled" severity="success">
          Verify success , Thank you for testing our auth system!
        </Alert>
        <br />
      </div>
      <div id='captcha' style={{ textAlign: 'center' }}>
        <Typography className='Title' variant="h5" gutterBottom>
          Just a captcha :D
        </Typography>
        <HCaptcha sitekey={hcaptchakey} theme='dark' onVerify={Verify} />
        <br />
      </div>

    </>
  )
}

export default App
