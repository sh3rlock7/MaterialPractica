import {  Paper, Typography } from '@mui/material'


export const Footer = () => {
  return (
        <Paper 
            sx={{
                width: '100vw', // ocupa todo el ancho del viewport
                position: 'relative', // para evitar scroll horizontal no deseado
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                bgcolor: 'black',
                color: 'white',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '50px'
            }} 
            elevation={1}
        >
  <Typography variant="h6">FitLife 2025</Typography>
</Paper>
   
  )
}
