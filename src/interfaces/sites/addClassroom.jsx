import {Box, Button, Link, Typography} from "@mui/material";
import Sidebar from "../../component/sidebar";
import {ENTITIES} from "../../api/routeApi";
import React, {useEffect, useState} from "react";
import Default from "../../api/api";
import {useParams} from "react-router-dom";
import _ from "lodash";

function SitesAddClassroom() {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState(0);
    const [site_id, setSiteId] = useState(id);


    const handleSubmit = (e) => {
        e.preventDefault();
        const salle = { name, capacity, site_id };
        console.log(salle)

        Default.postData(ENTITIES.classroom.add, salle)
            .then(response => {
                console.log(response);
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
                    <form onSubmit={handleSubmit}>
                        <label>Nom de la salle </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Nombre de place</label>
                        <input
                            type="text"
                            required
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                        />

                        <button type='submit'>Ajouter</button>
                    </form>
                </Box>
            </Box>
        </>
    )
}
export default SitesAddClassroom