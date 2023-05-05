import { Box, Button, ButtonGroup, List, ListItem, Stack, Typography } from "@mui/material"
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
            <Box sx={{ width: "60%", mx: "auto", p: 10 }}>
                <Stack flexDirection="row" justifyContent="space-between" marginBottom={6}>
                    <Typography variant="h4">Réservation</Typography>
                    <ButtonGroup>
                        <Button sx={{ borderColor: PRIMARY.moyen, color: PRIMARY.moyen }} >
                            Filtrer
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: PRIMARY.moyen, boxShadow: "none" }}>
                            Ajouter une réservation
                        </Button>
                    </ButtonGroup>
                </Stack>
                <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {data.map(x => {
                        return (
                            <ListItem key={x.id} sx={{ border: `1px solid ${PRIMARY.moyen}`, borderRadius: 3 }}>
                                <Stack marginRight={15} width="100%" flexDirection="row" justifyContent="space-between">
                                    <Typography>{x.name}</Typography>
                                    <Typography>{x.user.nickname}</Typography>
                                    <Typography>{x.classroom.name}</Typography>
                                </Stack>
                                <Link to={`detail/${x.id}`}>
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