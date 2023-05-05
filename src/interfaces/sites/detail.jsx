import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

function SitesDetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        Default.getData(ENTITIES.site.detail + '/' + id)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);


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


    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        Default.deleteData(ENTITIES.site.delete + '/' + id)
            .then(response => {
                setData(response.data);
                setOpen(false);
                redirect('/' + ENTITIES.site.list)
            })
            .catch(error => {
                console.log(error);
            });
    }




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
                <Box>
                    <Link to="classroom/add">
                        <Button>Ajouter une salle</Button>
                    </Link>
                    <Button onClick={() => setOpen(true)} size="small" color="primary">
                        Supprimer
                    </Button>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <DialogTitle>Confirmation de suppression</DialogTitle>
                        <DialogContent>
                            Êtes-vous sûr de vouloir supprimer cet élément ?
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)} color="primary">
                                Annuler
                            </Button>
                            <Button onClick={handleSubmit} color="primary">
                                Confirmer
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>

            </Box>
            <Box>
                <NavLink to={`/sites/edit/${data.id}`}>Modifier le site</NavLink>
            </Box>
            <Box>
                {dataClassroom.map((siteClassroom) =>
                (
                    <NavLink to={`/classrooms/${siteClassroom.id}`}>
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
                    </NavLink>
                )
                )}
            </Box>
        </Box>
    )

}
export default SitesDetail