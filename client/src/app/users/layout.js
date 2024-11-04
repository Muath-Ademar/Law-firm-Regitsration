import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { Box } from "@mui/material"

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh', backgroundColor: 'white' }}>

      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box sx={{ flex: 1, paddingLeft: 3, paddingTop: 3,  overflow: 'hidden' }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
