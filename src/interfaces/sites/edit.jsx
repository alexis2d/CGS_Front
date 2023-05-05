import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';



function SitesEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const redirect = useNavigate();


    // const [name, setName] = useState('');
    // const [city, setCity] = useState('');
    // const [adress, setAdress] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        Default.getData(ENTITIES.site.detail + '/' + id)
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
        // const site = { name, city, adress, description };
        //console.log(site)

        Default.putData(ENTITIES.site.edit + '/' + id, data)
            .then(response => {
                console.log(response);
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
                {<form onSubmit={handleSubmit}>
                    {_.entries(data).filter(([field]) => field !== "id").map(([field, fieldValue]) =>
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
export default SitesEdit