import { ENTITIES } from '../../api/routeApi';
import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { Link } from 'react-router-dom';

function Promotions() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.promotion.list)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log("tesst"+data)

    return (
        <Box display="flex">
        <Sidebar />
        <Box>
            <Link to="/promotions/add"> Ajouter une promotion </Link>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" alignItems="center">
            {data.map((promotion) =>
            (
                <Link to={'detail/' + promotion.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {promotion.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {promotion.city}
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
export default Promotions