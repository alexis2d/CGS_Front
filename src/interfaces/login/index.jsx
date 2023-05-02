import { Box, Button, Checkbox, Drawer, FormLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { PRIMARY } from "../../palette";

function Login() {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" height="100vh">
            <Stack>
                <Typography variant="h6">
                    Connectez-vous à votre compte
                </Typography>
                <Typography>
                    Ou créez votre compte
                </Typography>
            </Stack>

            <Paper sx={{ maxWidth: "375px", padding: 4 }}>
                <FormLabel label="Adresse mail" />
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Login"
                />
                <TextField
                    fullWidth
                    required
                    type="password"
                    id="outlined-required"
                    label="Password"
                />
                <Stack>
                    <Checkbox aria-label="Checkbox" defaultChecked />
                    <Typography>Mot de passe oublié ?</Typography>
                </Stack>
                <Button variant="contained" fullWidth sx={{ bgcolor: PRIMARY.moyen }}
                >Se connecter</Button>
            </Paper>
        </Box>
    )
}

export default Login