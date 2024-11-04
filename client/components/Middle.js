import React from 'react'
import Secondsidebar from './Secondsidebar'
import Link from 'next/link'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';


const Middle = ({ user }) => {
  return (
    <Box sx={{
      background: "#f7f8fa",
      borderTopLeftRadius: "20px",
      height: 835,
      marginLeft: 8,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        width: '95.5%',
        height: 790,
        backgroundColor: "white",
        marginTop: 3,
        borderRadius: '20PX',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{ marginLeft: 3, marginTop: 3 }}>

          <Typography sx={{ fontWeight: "bold", marginBottom: 0.5 }}>Proflie</Typography>
          <Typography>Manage your details and personal prefrence here</Typography>
          <Box sx={{
            width: '99%',
            height: 675,
            backgroundColor: '#f7f8fa',
            marginTop: 3,
            borderRadius: '20px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <Secondsidebar />
            <Box sx={{ width: '100%', padding: { xs: 2, sm: 3 } }} >
              <Typography sx={{marginTop: 2,  marginLeft:5.5, marginBottom: 2 }}>Basic Information</Typography>
              {/* card container */}

              <Box sx={{
                backgroundColor: 'white',
                marginLeft: 5,
                borderRadius: "21px",
                padding: 3
              }}>
                {/* Header Section */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', marginBottom: 3 }}>
                  <img
                    src={'/image.svg'}
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#f7f8fa",
                      borderRadius: "15%",
                      marginRight: 20
                    }} />
                  <Box>
                    <Typography variant='h5'> {user.name} </Typography>
                    <Typography style={{
                      fontSize: '14px',
                      backgroundColor: '#f7f8fa',
                      padding: 2,
                      width: 90,
                      height: 25,
                      borderRadius: "10px",
                      textAlign: 'center'

                    }}> ⭐ {user.rating} Rating </Typography>
                  </Box>
                  <Box sx={{
                    marginLeft: 'auto',
                    backgroundColor: "#ecf8f8",
                    height: 32,
                    padding: 1,
                    borderRadius: "20px",
                    width: 115,
                    display: { xs: 'none', sm: 'block' }
                  }}>
                    <Link href='#' style={{
                      color: '#55c7c6',
                      textDecoration: "none",
                      fontSize: 13,
                      display: 'flex',
                      alignItems: 'center'
                    }}>Website Link <img style={{ marginLeft: 5, height: '100%', width: 'auto' }} src={'/external-link.svg'} /></Link>
                  </Box>
                </Box>
                {/* Contact Information */}
                <Box sx={{
                  display: "flex",
                  flexDirection: { xs: 'column', sm: 'row' },
                  padding: 2,
                  gap: 2,
                  backgroundColor: '#f7f8fa',
                  borderRadius: "20px",
                  alignItems: "flex-start",
                  justifyContent: 'space-between',
                  marginBottom: 2
                }}>
                  <Box >
                    <Box sx={{ display: 'flex', marginBottom: 0, alignItems: 'center' }}>
                      <img src={'/map-pin.svg'} />
                      <Typography sx={{ margin: 0, color: '#7e7e7e' }}> Location </Typography>
                    </Box>
                    <Typography sx={{ marginLeft: 1 }}>{user.location}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', ml: { sm: 'auto' } }} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={'/Phone.svg'} style={{}} />
                      <Typography sx={{ color: '#7e7e7e', ml: 1 }}> Phone Number</Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }} >{user.phone}</Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={'/Message-5.svg'} />
                      <Typography sx={{ color: '#7e7e7e', ml: 1 }}> Email Address</Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }} >{user.email}</Typography>
                  </Box>
                  {/*  Description */}
                </Box>
                <Box style={{
                  padding: 15,
                  backgroundColor: "#f7f8fa",
                  borderRadius: "20px",

                }}
                >
                  <Typography sx={{ color: '#7e7e7e' }}>Description</Typography>
                  <Typography>{user.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Middle
