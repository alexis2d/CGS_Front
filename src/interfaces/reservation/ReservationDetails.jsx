import { Box, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import { ENTITIES } from "../../api/routeApi";
import { useParams } from "react-router";
import { useState } from "react";
import Default from '../../api/api';
import { useEffect } from "react";

function ReservationDetails() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Default.getData(ENTITIES.reservation.detail.replace(":id", id))
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(data)

    return (
        <Box display="flex">
            <Sidebar />
            <Box padding={10}>
                <Typography variant="h4">
                    {data.name}
                </Typography>
            </Box>
        </Box>
    )
}
export default ReservationDetails