import { Box, Link, Paper, Stack, TextField, Typography } from "@mui/material";

function Login() {
    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Stack>
                <Typography variant="h6">
                    Connectez-vous à votre compte
                </Typography>
                <Typography>
                    Ou créez votre compte
                </Typography>
            </Stack>

            <Paper sx={{ width: "375px" }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Login"
                    defaultValue="Hello World"
                />
                <TextField
                    required
                    type="password"
                    id="outlined-required"
                    label="Password"
                />
            </Paper>
        </Box>
    )
}

export default Login