import { useState } from "react";
import Sidebar from "../../component/sidebar"
import { useParams } from "react-router";
import { ENTITIES } from "../../api/routeApi";
import Default from '../../api/api';
import { useEffect } from "react";
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import _ from "lodash";


function ReservationEdit() {
    const [data, setData] = useState({
        name: "",
        startedAt: "",
        endedAt: "",
        classroom: {},
        user: {},
    });
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Default.getData(ENTITIES.reservation.detail.replace(':id', id))
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };



    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            // Mettez à jour les données de l'élément existant en utilisant l'API
            Default.putData(ENTITIES.reservation.detail.replace(':id', id), data)
                .then(response => {
                    console.log('Données mises à jour avec succès', response);
                    // Gérer la redirection ou l'affichage d'un message de réussite
                })
                .catch(error => {
                    console.log('Erreur lors de la mise à jour des données', error);
                    // Gérer l'affichage d'un message d'erreur ou d'une autre action appropriée
                });
        } else {
            // Créer un nouvel élément en utilisant l'API
            Default.createData(ENTITIES.reservation.create, data)
                .then(response => {
                    console.log('Nouvel élément créé avec succès', response);
                    // Gérer la redirection ou l'affichage d'un message de réussite
                })
                .catch(error => {
                    console.log('Erreur lors de la création de l\'élément', error);
                    // Gérer l'affichage d'un message d'erreur ou d'une autre action appropriée
                });
        }
    };

    const [age, setAge] = useState('');

    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };

    // const periode = () => {
    //     if (data)
    // }

    console.log(data)

    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                <form onSubmit={handleSubmit}>
                    {/* <TextField id="outlined-basic" label="Nom de la réservation" variant="outlined" /> */}
                    <label>Nom du site</label>
                    <input
                        type="text"
                        required
                        value={data?.name}
                        onChange={handleChange}
                    />
                    <label>Date de début</label>
                    <input
                        type="date"
                        required
                        value={data?.startedAt}
                        onChange={handleChange}
                    />
                    <label>Date de fin</label>
                    <input
                        type="date"
                        required
                        value={data?.endedAt}
                        onChange={handleChange}
                    />
                    <label>Classroom</label>
                    <input
                        type="text"
                        required
                        value={data?.classroom?.name}
                        onChange={handleChange}
                    />
                    <label>Utilisateur</label>
                    <input
                        type="text"
                        required
                        value={`${data?.user?.firstname} ${data?.user?.lastname}`}
                        onChange={handleChange}
                    />

                    <button type='submit'>Ajouter</button>
                </form>
            </Box>
        </Box>
    )
}
export default ReservationEdit