import { Box, Breadcrumbs, Typography } from "@mui/material";
import Sidebar from "../../component/sidebar";
import { ENTITIES } from "../../api/routeApi";
import { useState } from "react";
import { useParams } from "react-router";
import Default from '../../api/api';
import { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

function ReservationAdd() {
    const [name, setName] = useState("");
    const [startedAt, setStartedAt] = useState("");
    const [endedAt, setEndAt] = useState("");
    const [classroom_id, setClassroom] = useState("");
    const [user_id, setUser] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = { name, startedAt, endedAt, classroom_id, user_id };
        console.log(reservation)

        Default.postData(ENTITIES.reservation.add, reservation)
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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to={ENTITIES.home}>
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" to={"/" + ENTITIES.reservation.list}>
                        Réservation
                    </Link>
                    <Typography color="text.primary">Ajouter</Typography>
                </Breadcrumbs>
                <form onSubmit={handleSubmit}>
                    <label>Nom du site</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Date de début</label>
                    <input
                        type="date"
                        required
                        value={startedAt}
                        onChange={(e) => setStartedAt(e.target.value)}
                    />
                    <label>Date de fin</label>
                    <input
                        type="date"
                        required
                        value={endedAt}
                        onChange={(e) => setEndAt(e.target.value)}
                    />
                    <label>Classroom</label>
                    <input
                        type="text"
                        required
                        value={classroom_id}
                        onChange={(e) => setClassroom(e.target.value)}
                    />
                    <label>Utilisateur</label>
                    <input
                        type="text"
                        required
                        value={user_id}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    <button type='submit'>Ajouter</button>
                </form>
            </Box>
        </Box>
    )
}
export default ReservationAdd