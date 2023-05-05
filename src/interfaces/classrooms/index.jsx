import {Box, Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from "../../api/api";
import {ENTITIES} from "../../api/routeApi";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Classrooms() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.classroom.list)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data);

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Box>
                    {data.map((classroom) =>
                        (
                            <Link to={'' + classroom.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {classroom.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {classroom.capacity}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Consulter
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        )
                    )}

                </Box>
            </Box>
        </>
    )
}
export default Classrooms