import { Box, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from "../../api/routeApi";
import { useEffect, useState } from "react";

function Reservation() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.reservation.list)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data)

    return (
        <Box display="flex">
            <Sidebar />
            <Typography>Resevation</Typography>
        </Box>
    )
}
export default Reservation