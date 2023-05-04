import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from '../../api/routeApi';




function Sites() {
    //const dataApi = Api(ENTITIES.site.list)
    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.site.list)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      console.log(data)




    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Typography>Sites</Typography>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Avatar with text and icon
                    </Typography>
                        <List>
                            <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                {/* <DeleteIcon /> */}
                                </IconButton>
                            }
                            >
                            <ListItemAvatar>
                                <Avatar>
                                {/* <FolderIcon /> */}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                            </ListItem>,
                        </List>
                </Grid>
            </Box>
        </>
    )
}
export default Sites