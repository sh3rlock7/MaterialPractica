
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"


export const MyForm = () => {
   
  const suscripciones = [
    {
        value:  'Basic',
        label: 'Basic',
        id: 1
    },
    {
        value: 'Advance',
        label: 'Advance',
        id: 2
    },
    {
        value :'Plus',  
        label: 'Plus',
        id: 3
    }
  ]  

  

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', gap: '10px', width: '380px', height: '350px', m: 'auto', bgcolor: 'white', p: '25px', borderRadius: '20px'}} component="form" autoComplete="off" >
        <Typography variant="h3" sx={{color: 'black'}}>Mi Formulario</Typography>
        <div className="form-div">
            <TextField required name="name" label="Nombre" />
            <TextField name="lastName" label="Apellido" sx={{ml: '10px'}}/>
        </div>
            <TextField name="email" label="Email" />
            <TextField select variant="outlined" color="primary" label="Elige tu Plan De suscripcion" >
                {
                    suscripciones.map(( suscripcion, id) => (
                        <MenuItem key={id} value={suscripcion.value}>{suscripcion.label}</MenuItem>
                    ))
                }
            </TextField>
        <Button sx={{p: '15px', '&:hover':{ bgcolor: 'green' } }} variant="contained" type="submit">Enviar</Button>
    </Box>
  )
}
