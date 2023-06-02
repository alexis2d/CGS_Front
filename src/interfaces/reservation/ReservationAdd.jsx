import { Box, Breadcrumbs, MenuItem, Select, TextField, Typography } from "@mui/material";
import Sidebar from "../../component/sidebar";
import { ENTITIES } from "../../api/routeApi";
import { useEffect, useState } from "react";
import Default from '../../api/api';
import _ from "lodash";
import { Link } from "react-router-dom";

function ReservationAdd() {
    const [data, setData] = useState({
        name: null,
        startedAt: new Date(),
        endedAt: "",
        classroom_id: null,
        user_id: 2,
        periode: null,
    });
    const [classroom, setClassroom] = useState([])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = data;

        Default.postData(ENTITIES.reservation.add, reservation)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        Default.getData(ENTITIES.classroom.list)
            .then(response => {
                setClassroom(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



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
                    <TextField name="name" onChange={handleChange} label={data?.name ?? "Nom de la réservation"} variant="outlined" />
                    <label>Date de début</label>
                    <input
                        type="date"
                        name="startedAt"
                        required
                        onChange={handleChange}
                    />
                    <label>Date de fin</label>
                    <input
                        type="date"
                        name="endedAt"
                        required
                        onChange={handleChange}
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="classroom_id"
                        value={data?.classroom_id ?? 0}
                        label="Salles"
                        onChange={handleChange}
                    >
                        <MenuItem value={0} disabled><i>Veuillez choisir une salle</i></MenuItem>
                        {classroom?.map(salle => {
                            return (
                                <MenuItem key={salle?.id} value={salle?.id}>{salle?.name}</MenuItem>
                            )
                        })}
                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="periode"
                        value={data.periode ?? "JOURNEE"}
                        label="Périodes"
                        onChange={handleChange}
                    >
                        <MenuItem value="MATIN">Matin</MenuItem>
                        <MenuItem value="APRES_MIDI">Après midi</MenuItem>
                        <MenuItem value="JOURNEE">Journée</MenuItem>
                    </Select>
                    {/* <label>Classroom</label>
                    <select>
                        {classroom?.map(salle => {
                            return (
                                <option key={salle?.id} value={salle?.id}>{salle?.name}</option>
                            )
                        })}
                    </select> */}

                    <button type='submit'>Ajouter</button>
                </form>
            </Box>
        </Box >
    )
}
export default ReservationAdd