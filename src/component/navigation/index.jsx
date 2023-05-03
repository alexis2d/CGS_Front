import { List, ListItem, Stack } from "@mui/material";
import { pages } from "../../utils/navList";
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Stack width="100%">
            <List >
                {
                    pages.map(x => {
                        return (
                            <ListItem key={x.libelle}>
                                <Link to={x.route} style={{ color: "white", textDecoration: "none" }}>
                                    <img src={x.icone} alt={x.libelle} width={24} style={{ marginRight: "20px" }} />
                                    {x.libelle}
                                </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Stack>
    )
}

export default Navigation