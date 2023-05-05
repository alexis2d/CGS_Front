import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';



function PromotionsEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Default.getData(ENTITIES.promotion.detail + '/' + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(data)


    const handleSubmit = (e) => {
        e.preventDefault();

        Default.putData(ENTITIES.promotion.edit + '/' + id, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }


    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                {<form onSubmit={handleSubmit}>
                    {_.entries(data).filter(([field]) => field !== "id" && field !== "user" && field !== "classroom").map(([field, fieldValue]) =>
                    (<>
                        <label>{field}</label>
                        <input
                            name={field}
                            type="text"
                            required
                            value={fieldValue}
                            onChange={(e) => setData(_.set(_.cloneDeep(data), field, e.target.value))}
                        />
                    </>
                    ))}
                    <button type='submit'>Modifier</button>
                </form>}
            </Box>
        </Box>
    )
}
export default PromotionsEdit;