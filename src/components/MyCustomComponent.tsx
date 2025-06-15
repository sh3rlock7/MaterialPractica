
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import fondoJap from '../assets/fondoJap.jpg';

const customTheme = createTheme({
  palette: {
    secondary: {
      main: '#9dd0cc',
      dark: '#868492',
    },
  },
  
});

export const MycustomComponent = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: 300,
          height: 150,
          backgroundImage: `url(${fondoJap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&:hover': {
            bgcolor: 'secondary.dark',
          },
          p: 2,
          m: 'auto',
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: '90%'
        }}
      >
        <Typography variant="h4" align="center" color="black" >
          Hola, me llamo Kevin
        </Typography>
        <Button variant='contained' color='primary'> Click para mas info</Button>
      </Box>
        
    </ThemeProvider>
  );
};