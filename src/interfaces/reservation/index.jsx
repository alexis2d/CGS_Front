import { Box, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"

function Reservation() {
    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Typography>Resevation</Typography>
            </Box>
        </>
    )
}
export default Reservation