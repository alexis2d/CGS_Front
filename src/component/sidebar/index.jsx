import { Box, Stack, Drawer, Avatar } from "@mui/material"
import Navigation from "../navigation"
import { PRIMARY } from "../../palette"

function Sidebar() {
    return (
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: 300,
                    backgroundColor: PRIMARY.moyen,
                },
            }}
            variant="permanent"
            anchor="left"

        >
            <Box display="flex" flexDirection="column" alignItems="center" padding-top={2} justifyContent="space-between" height="100%">
                <Stack width="100%">
                    <Stack display="flex" width="100%" alignItems="center" paddingBottom={3} paddingTop={5}>
                        <img src={process.env.PUBLIC_URL + 'img/logo_cefim_blanc.png'} alt="logo" width={100} />
                    </Stack>
                    <Navigation />
                </Stack>
                <Stack backgroundColor={PRIMARY.claire} fullWidth paddingTop={3} paddingBottom={3} width="100%">
                    <Avatar alt="Monsieur" src={process.env.PUBLIC_URL + 'img/photoUser.png'} />
                </Stack>
            </Box>
        </Drawer>
    )
}

export default Sidebar


