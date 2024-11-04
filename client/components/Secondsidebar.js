import React from 'react'
import {  Typography, Box } from '@mui/material';
const Secondsidebar = () => {
  return (
    <Box sx={{marginLeft:5, paddingTop:2, height:"70%" , width: '19%', position: 'relative', '&::after':{content:'""', position:'absolute', top:"20px", right:0, height: "calc(100% + 90px)", width:"0.5px", backgroundColor: '#818181'}}}>
      <Typography sx={{marginBottom:2.5, marginTop:2, color:'black', backgroundColor: 'white', width: '90%',  padding: "9px ", marginLeft: -1,  borderRadius: "21px"}}>Basic Information</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Specialization</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Lawyer Team</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Reviews</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Case Information</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Financial Information</Typography>
      <Typography sx={{marginBottom:2.5, color:'#818181'}}>Communication</Typography>
      <Typography sx={{ color:'#818181'}}>Documents</Typography>
    </Box>
  )
}

export default Secondsidebar
