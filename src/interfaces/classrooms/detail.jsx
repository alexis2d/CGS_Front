import { Box, Button, Typography } from "@mui/material";
import Sidebar from "../../component/sidebar";
import { ENTITIES } from "../../api/routeApi";
import React, { useEffect, useState } from "react";
import Default from "../../api/api";
import { useParams, Link, useNavigate } from "react-router-dom";

function ClassroomsDetail() {

    const [data, setData] = useState([]);
    const redirect = useNavigate();

    const id = useParams().id;
    useEffect(() => {
        Default.getData(ENTITIES.classroom.detail + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Default.deleteData(ENTITIES.classroom.delete + id)
            .then(response => {
                setData(response.data);
                redirect('/' + ENTITIES.salle.list)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Box>
                    <Typography variant="h1">{data.name}</Typography>
                    <Typography>Nombre de places : {data.capacity}</Typography>
                    <Link to="edit">
                        <Button>Modifier</Button>
                    </Link>
                    <Button onClick={handleSubmit}>
                        Supprimer
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default ClassroomsDetail