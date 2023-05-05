import {Box, Button, Link, Typography} from "@mui/material";
import Sidebar from "../../component/sidebar";
import {ENTITIES} from "../../api/routeApi";
import {useEffect, useState} from "react";
import Default from "../../api/api";
import {useParams} from "react-router-dom";

function SallesEdit() {

    const [data, setData] = useState([]);

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

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Box>
                    <Typography variant="h1">{data.name}</Typography>
                    <Typography>Nombre de places : {data.capacity}</Typography>
                    <Link to={'form/edit'}>
                        <Button>Modifier</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}
export default SallesEdit