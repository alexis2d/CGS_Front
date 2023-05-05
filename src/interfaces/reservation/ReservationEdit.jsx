import { useState } from "react";
import Sidebar from "../../component/sidebar"
import { useParams } from "react-router";
import { ENTITIES } from "../../api/routeApi";
import Default from '../../api/api';
import { useEffect } from "react";
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import _ from "lodash";


function ReservationEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        Default.getData(ENTITIES.reservation.detail.replace(":id", id))
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
        Default.putData(ENTITIES.reservation.edit.replace(":id", id), data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                <form onSubmit={handleSubmit}>
                    <InputLabel>Name</InputLabel>
                    <TextField
                        fullWidth
                        required
                        defaultValue={data.name}
                        id="outlined-required"
                        size="small"
                    />
                    <InputLabel sx={{ mt: 3 }}>Début</InputLabel>
                    <TextField
                        fullWidth
                        required
                        type="password"
                        id="outlined-required"
                        size="small"
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </form>
            </Box>
        </Box>
    )
}
export default ReservationEdit