import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link } from 'react-router-dom';




function PromotionAdd() {

    const [name, setName] = useState("");
    const [volume, setVolume] = useState("");
    const [startedAt, setStartedAT] = useState("");
    const [endedAt, setEndedAt] = useState("");
    const [user_id, setUser] = useState("");
    const [classroom_id, setClassroom] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const promotion = { name, volume, startedAt, endedAt, user_id, classroom_id };
        //console.log(promotion)

        Default.postData(ENTITIES.promotion.add, promotion)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    //console.log(handleSubmit)


    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                <form onSubmit={handleSubmit}>
                    <label>Nom de la promotion</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Volume</label>
                    <input
                        type="text"
                        required
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                    <label>Début</label>
                    <input
                        type="date"
                        required
                        value={startedAt}
                        onChange={(e) => setStartedAT(e.target.value)}
                    />
                    <label>Fin</label>
                    <input
                        type="date"
                        required
                        value={endedAt}
                        onChange={(e) => setEndedAt(e.target.value)}
                    />
                    <label>User</label>
                    <input
                        type="text"
                        required
                        value={user_id}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <label>Class</label>
                    <input
                        type="text"
                        required
                        value={classroom_id}
                        onChange={(e) => setClassroom(e.target.value)}
                    />

                    <button type='submit'>Ajouter</button>
                </form>
            </Box>
        </Box>
    )
}
export default PromotionAdd;