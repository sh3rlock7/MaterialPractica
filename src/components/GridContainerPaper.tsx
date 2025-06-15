//Creando una mini pagina utilizando Container, Grid y Box
import { Box, Grid, Paper, styled, TextField } from "@mui/material"


export const GridContainerPaper = () => {

  const Item = styled(Paper)(({theme}) => ({
    color: theme.palette.text.secondary,
    padding: '2px',
    textAlign: 'center',
    fontSize: '2rem'
    
  }))

  
  return (
    //El contenido esta aplicando valores resposivos crear siempre un solo  container y luego dividir las secciones en lo que se necesite
    <Box>
        <Grid container columns={{ xs: 4, sm: 6, md: 12 }}  spacing={2}>

            <Grid size={{xs:4, sm:6,md:12}}>
              <Item sx={{height: '100px'}}>Titulo</Item>
            </Grid>
            
           
              <Grid size={{xs: 4,sm: 6, md: 6}}>
                <Item  sx={{width: '100%', height:'600px'}} >
                  <TextField sx={{mt: '25px'}} id="outlined-basic" label="Alessia" variant="filled" />
                </Item>
              </Grid>
              
              <Grid size={{xs: 4, sm:6, md: 6}}>
                <Item sx={{width: '100%', height:'600px'}}>Seccion Derecha</Item>
              </Grid>
            
            
            
            
            <Grid size={{xs:4, sm:6, md:12}}>
              <Item sx={{height:'100px'}}>Footer</Item>
            </Grid>

        </Grid>
    </Box>
  )
}
