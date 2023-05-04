import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material"
import Sidebar from "../../component/sidebar"
import Default from '../../api/api';
import { ENTITIES } from "../../api/routeApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PRIMARY } from "../../utils/palette";

function Reservation() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Default.getData(ENTITIES.reservation.list)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data)

    return (
        <Box display="flex">
            <Sidebar />
            <Box sx={{ width: "60%", mx: "auto" }}>
                <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {data.map(x => {
                        return (
                            <ListItem key={x.id} sx={{ border: `1px solid ${PRIMARY.moyen}`, borderRadius: 3 }}>
                                <Stack marginRight={15} width="100%" flexDirection="row" justifyContent="space-between">
                                    <Typography>{x.name}</Typography>
                                    <Typography>{x.user.nickname}</Typography>
                                    <Typography>{x.classroom.name}</Typography>
                                </Stack>
                                <Link to={"salle/:id".replace(":id", x.user.id)}>
                                    <Button variant="contained" sx={{ width: "100%", bgcolor: PRIMARY.moyen }}>
                                        Voir la réservation
                                    </Button>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
    )
}
export default Reservation