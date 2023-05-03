import { Box, Button, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Card from "../../component/card/Card"

function HomePage() {
    return (
        <Box display="flex">
            <Sidebar />
            <Typography>Home</Typography>
        </Box>
    )
}
export default HomePage