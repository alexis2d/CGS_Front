import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function PromotionDetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [classroom, setClassroom] = useState([])
;
    useEffect(() => {
        Default.getData(ENTITIES.promotion.detail + '/' + id)
            .then(response => {
                setData(response.data);
                setUser(response.data.user);
                setClassroom(response.data.classroom);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        Default.deleteData(ENTITIES.promotion.delete + '/' + id)
            .then(response => {
                setData(response.data);
                setUser(response.data.user);
                setClassroom(response.data.classroom);
            })
            .catch(error => {
                console.log(error);
            });
    }

    //style={{color: "white", backgroundColor: "red", padding: "1rem" }}

    return (
        <Box display="flex">
            <Sidebar />
            <Box width="100%">
                <Box display="flex" gap="1rem" flexDirection="column" width="50%" margin="auto" backgroundColor="#EEEEEE" padding="2rem"
                borderRadius="5px" marginTop="200px">
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
                        Référent : {user.firstname} {user.lastname}
                    <Typography>
                        Classe attribuée : {classroom.name}
                    </Typography>
                    <Box display="flex" gap="2rem">

                        <Button onClick={handleSubmit} variant="contained" color="error" startIcon={<DeleteIcon />}>
                            Supprimer
                        </Button>
                        <Link to={"/promotions/edit/" + id}>   
                            <Button variant="contained" color="success" startIcon={<EditIcon />}>Modifier</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
    
}
export default PromotionDetail;