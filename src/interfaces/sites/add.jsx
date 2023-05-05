import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link } from 'react-router-dom';




function SitesAdd() {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [adress, setAdress] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const site = { name, city, adress, description };
        console.log(site)

        Default.postData(ENTITIES.site.add, site)
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
                <form onSubmit={handleSubmit}>
                    <label>Nom du site</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Ville</label>
                    <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label>Adresse</label>
                    <input
                        type="text"
                        required
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type='submit'>Ajouter</button>
                </form>
            </Box>
        </Box>
    )
}
export default SitesAdd