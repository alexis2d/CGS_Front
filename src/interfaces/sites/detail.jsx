import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { useParams } from 'react-router-dom';

function SitesDetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Default.getData(ENTITIES.site.detail + '/' + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(data)

    const [dataClassroom, setDataClassroom] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.site.detail + '/' + id + '/classrooms')
            .then(response => {
                setDataClassroom(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(dataClassroom)

    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                <Typography>
                    {data.name}
                </Typography>
                <Typography>
                    {data.description}
                </Typography>
                <Typography>
                    {data.city}
                </Typography>
                <Typography>
                    {data.adress}
                </Typography>
            </Box>
            <Box>
                {dataClassroom.map((siteClassroom) =>
                (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {siteClassroom.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {siteClassroom.capacity}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Consulter
                            </Button>
                        </CardActions>
                    </Card>
                )
                )}

            </Box>
        </Box>
    )

}
export default SitesDetail