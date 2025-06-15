
import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Form {
    name: string,
    lastName: string,
    email: string,
    message: string
 
}

const initialForm: Form = {
  name: '',
  lastName: '',
  email: '',
  message: '',
};


export const Contact = () => {

    const [form, setForm] = useState<Form>(initialForm)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target
         
        setForm(prev => ({
        ...prev,
        [name]: e.target.value

        }));
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setForm(initialForm);
    }

  return (
     <Box onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', gap: '10px', width: '380px', height: 'full', m: 'auto', bgcolor: 'white', p: '25px', borderRadius: '20px', color: 'black'}} component="form" autoComplete="off" >
        <Typography variant="h3" sx={{color: 'black'}}>Contacta con nosotros</Typography>
        <div className="form-div">
            <TextField required name="name" label="Nombre" value={form.name} onChange={handleChange} />
            <TextField name="lastName" label="Apellido" sx={{ml: '10px'}} value={form.lastName} onChange={handleChange}/>
        </div>
            <TextField name="email" label="Email" value={form.email} onChange={handleChange} />
            <TextField name="message" label="message" multiline rows={5} value={form.message} onChange={handleChange}/>
            <Stack direction="row" sx={{display: 'flex', flexWrap: 'nowrap', }} alignItems="center" justifyContent="center">
                <Checkbox    aria-label="Acepto recibir promociones de FitLife"/>
                <Typography  variant="body1" color="black">Acepto recibir promociones de FitLife</Typography>
            </Stack>
        <Button sx={{p: '15px', '&:hover':{ bgcolor: 'green' } }} variant="contained" type="submit" >Enviar</Button>
    </Box>
  )
}
