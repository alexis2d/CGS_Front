import { Box, Button, Checkbox, Drawer, FormControlLabel, FormLabel, InputLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { GREY, PRIMARY } from "../../palette";
import navList, { nav } from "../../utils/navList";

function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box bgcolor={GREY.light} display="flex" alignItems="center" flexDirection="column" justifyContent="center" height="100vh">
            <img src={process.env.PUBLIC_URL + 'img/logo_cefim_color.png'} />
            <Stack textAlign="center" gap={1} mb={2} mt={4}>
                <Typography variant="h6">
                    Connectez-vous à votre compte
                </Typography>
                <Typography>
                    Ou créez votre compte
                </Typography>
            </Stack>

            <Paper sx={{ width: "100%", maxWidth: "420px", padding: 4 }}>
                <InputLabel>Adresse mail</InputLabel>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    size="small"
                />
                <InputLabel sx={{ mt: 3 }}>Mot de passe</InputLabel>
                <TextField
                    fullWidth
                    required
                    type="password"
                    id="outlined-required"
                    size="small"
                />
                <Stack flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={4} marginBottom={6}>
                    <FormControlLabel
                        label="Se souvenir de moi"
                        control={
                            <Checkbox />
                        }
                    />
                    <Typography>Mot de passe oublié ?</Typography>
                </Stack>
                <Button variant="contained" fullWidth sx={{ bgcolor: PRIMARY.moyen }}
                >Se connecter</Button>
            </Paper>
        </Box>
    )
}

export default Login