import {  Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const Sidebar = () => (
    <Box sx={{ marginLeft: 5, marginTop: 3 }}>
        <Typography sx={{ color: 'black', fontSize: 30, marginBottom: 4 }}>
            Welcome to the <br /> Legistai!
        </Typography>
        <Box sx={{ marginLeft: 3, color: 'rgb(126 126 126)' }}>
            <Link href={'#'} >
                <Box sx={{ display: 'flex', color:"black",width: 245, height: 53, padding: 1, alignItems: "center", marginBottom: 2   }}>
                    <img src={'/Category.svg'}/>
                    <Typography sx={{ marginLeft: 2, color: 'rgb(126 126 126)' }}>Dashboard</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex',  width: 245, height: 53, padding: 1, color:"black", alignItems: "center", marginBottom: 2  }}>
                    <img src={'/cases-svgrepo-com 1.svg'} />
                    <Typography sx={{ marginLeft: 2, color: 'rgb(126 126 126)' }}>Drive</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex', width: 245, padding: 1, height: 53, color:"black", alignItems: "center", marginBottom: 2, backgroundColor: "black" , width: 245, height: 53, borderRadius: '25px', marginLeft:-1, paddingLeft: 2, boxShadow: '1px 4px 3px grey' }}>
                <PersonIcon sx={{color:'#55c7c6' }}/>
                    <Typography sx={{ marginLeft: 2, color: 'white' }}>Profile</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex', width: 245, padding: 1, height: 53, color:"black", alignItems: "center", marginBottom: 2 }}>
                <img src={'/Calendar.svg'} />
                    <Typography sx={{ marginLeft: 2, color: 'rgb(126 126 126)' }}>calender</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex',  width: 245, padding: 1, height: 53,color:"black", alignItems: "center", marginBottom: 2 }}>
                <img src={'/law-book-trial-svgrepo-com 1.svg'} />
                    <Typography sx={{ marginLeft: 2, color: 'rgb(126 126 126)' }}>Law Firm Options</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex', width: 245, padding: 1, height: 53, color:"black", alignItems: "center", marginBottom: 2 }}>
                <img src={'/Setting - 3.svg'} />
                    <Typography sx={{ marginLeft: 2, color: 'rgb(126 126 126)' }}>Settings</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                    marginBottom: 2,
                    backgroundColor: '#ecf8f8',
                    borderRadius: "25px",
                    color: "#55c7c6",
                    width: 245,
                    height: 53,
                    padding: 3,
                    marginLeft: -2,
                    
                }}>
                    <img style={{ color: "#55c7c6" }} src={'/message-circle.svg'} />
                    <Typography sx={{ marginLeft: 2, color: '#55c7c6' }}>Start New Chat</Typography>
                </Box>
            </Link>
            <Link href={'#'} >
                <Box sx={{ display: 'flex', color:"black", marginTop: 20, alignItems: "center", marginBottom: 2, backgroundColor: "#f7f8fa", width: 245, height: 53, padding: 3, marginLeft: -2, borderRadius: "25px",   }}>
                    <img src={'/Logout.svg'} />
                    <Typography sx={{ marginLeft: 2 }}>Log Out</Typography>
                </Box>
            </Link>
        </Box>
    </Box>
);

export default Sidebar;
