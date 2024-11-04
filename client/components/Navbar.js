import React from 'react'
import { Box, Typography, Button, InputBase, InputAdornment, FormControl, InputLabel, MenuItem, Select, Badge, } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import { Flag, Language, Notifications, Person, Search } from '@mui/icons-material';

const Navbar = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", padding: "0 20px", marginTop: 4.5 }}>
            
            <img src={'/Group.png'}  style={{marginLeft: 19}}/>
            
            <Box sx={{ flexGrow: 1, mx:25 }}>

                <InputBase
                    placeholder="Search"

                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    sx={{ backgroundColor: "#f7f8fa", borderRadius: '18px', padding: '6px 12px', width: '110%', maxWidth: 1100 }}
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

                <FormControl variant='outlined' size='small' sx={{ width: 100, '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, backgroundColor: '#f7f8fa', borderRadius: 5 }} >
                    <InputLabel id="demo-simple-select-label" sx={{display: 'flex', alignItems: 'center'}}><img src={'/United.svg'}/> <p style={{fontSize: '12px'}}>ENG</p></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ borderRadius: 5, border: "none" }}
                        label=" ll"
                    >
                
                    </Select>
                </FormControl>
                
                    <img style={{ backgroundColor: "#f7f8fa", padding: '12px', width: 48, height: 48, borderRadius: "50%" }} src={'/Notification - 3.svg'} />
                
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, marginLeft: 2, backgroundColor: "#f7f8fa", padding: "10px", borderRadius: "40px" }}>
                <img src={"/Rectangle 7506.svg"} style={{ width: "30px", height: "30px" }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Typography sx={{ fontSize: 10, fontWeight: 600 }}>Arun Singh</Typography>
                    <Typography sx={{ fontSize: 10, color: "#818181" }}>Product Manager</Typography>
                </Box>
            </Box>
        </Box>

    );
}

export default Navbar
