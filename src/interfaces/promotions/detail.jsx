import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { useParams } from 'react-router-dom';

function PromotionDetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();
;
    useEffect(() => {
        Default.getData(ENTITIES.promotion.detail + '/' + id)
            .then(response => {
                setData(response.data);
                console.log(response.data.user.firstname);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(data);

    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                <Typography>
                    Nom de la promotion : {data.name}
                </Typography>
                <Typography>
                    Volume : {data.volume}
                </Typography>
                <Typography>
                    Date de début : {data.startedAt}
                </Typography>
                <Typography>
                    Date de fin : {data.endedAt}
                </Typography>
                <Typography>
                </Typography>

                <Typography>
                    
                </Typography>
                <Typography>
                    
                </Typography>
            </Box>
        </Box>
    )

}
export default PromotionDetail;