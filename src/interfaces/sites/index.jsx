import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link } from 'react-router-dom';




function Sites() {
    //const dataApi = Api(ENTITIES.site.list)
    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.site.list)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // console.log(data)


    return (
        <Box display="flex">
            <Sidebar />
            <Button>
                <Link to="/sites/add">Ajouter un site</Link>
            </Button>
            <Box>
                {data.map((site) =>
                (
                    <Link to={'detail/' + site.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {site.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {site.city}
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
    )
}
export default Sites