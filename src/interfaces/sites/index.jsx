import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"




function Sites() {
    const [data, setData] = useState([]);
  
    useEffect(() => {

        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        // }
        axios.get('http://localhost:8080/api/sites')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);



    console.log(data);

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Typography>Sites</Typography>
            </Box>
        </>
    )
}
export default Sites