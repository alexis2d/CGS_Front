import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Api from '../../api/api';
import { ENTITIES } from '../../api/routeApi';



function Sites() {
    const data = Api(ENTITIES.site.list)

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