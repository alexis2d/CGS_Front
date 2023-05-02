import { List, ListItem, Stack } from "@mui/material";

function Navigation() {
    return (
        <Stack width="100%">

            <List >
                <ListItem sx={{ color: "white" }}>
                    <img src={process.env.PUBLIC_URL + 'img/home.png'} alt="logo" width={24} style={{ marginRight: "20px" }} />
                    Home
                </ListItem>
                <ListItem sx={{ color: "white" }}>
                    <img src={process.env.PUBLIC_URL + 'img/reservations.png'} alt="logo" width={24} style={{ marginRight: "20px" }} />
                    Réservations en attente
                </ListItem>
                <ListItem sx={{ color: "white" }}>
                    <img src={process.env.PUBLIC_URL + 'img/sites.png'} alt="logo" width={24} style={{ marginRight: "20px" }} />
                    Sites / Salles
                </ListItem><ListItem sx={{ color: "white" }}>
                    <img src={process.env.PUBLIC_URL + 'img/referent.png'} alt="logo" width={24} style={{ marginRight: "20px" }} />
                    Référents
                </ListItem><ListItem sx={{ color: "white" }}>
                    <img src={process.env.PUBLIC_URL + 'img/promotion.png'} alt="logo" width={24} style={{ marginRight: "20px" }} />
                    Promotions
                </ListItem>
            </List>
        </Stack>
    )
}

export default Navigation