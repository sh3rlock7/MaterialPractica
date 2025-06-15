import { FitnessCenter } from "@mui/icons-material"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box>
        <AppBar position="absolute">
            <Toolbar sx={{bgcolor: 'black', display: 'flex'}}>
                <FitnessCenter  sx={{fontSize: '2rem', mr:'1rem', verticalAlign: 'middle'}} />
                <Typography sx={{flexGrow: 1, textAlign: 'left', verticalAlign: 'middle'}} variant="h4">
                  FitLife
                </Typography>
                <Button sx={{mr: '5px'}} color="success" variant="contained">Iniciar Sesion</Button>
                <Button sx={{color:'secondary'}} variant="contained">Registrarse</Button>
            </Toolbar>

        </AppBar>
    </Box>
  )
}
