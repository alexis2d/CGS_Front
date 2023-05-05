import { Box, Breadcrumbs, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import { ENTITIES } from "../../api/routeApi";
import { useParams } from "react-router";
import { useState } from "react";
import Default from '../../api/api';
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to={ENTITIES.home}>
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" to={"/" + ENTITIES.reservation.list}>
                        Réservation
                    </Link>
                    <Typography color="text.primary">Liste</Typography>
                </Breadcrumbs>
                <Typography variant="h4">
                    {data.name}
                </Typography>
            </Box>
        </Box>
    )
}
export default ReservationDetails