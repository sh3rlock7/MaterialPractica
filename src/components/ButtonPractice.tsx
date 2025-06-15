import {  Delete, Send, ShoppingCart, CloudUpload } from '@mui/icons-material';
import {  Badge, badgeClasses, Button,   ButtonBase,   IconButton, styled, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';



export const ButtonPractice = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
   const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });


  // crear componente estilizado personalizado
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge}{
      top: -12px;
      right: -6px;
    }
  `
  
  // Boton personalizado

  const MyButton = styled(Button) `
      color: white;
      background-color: purple;
    
  `;



  //Boton personalizado en base a ButtonBase

  const MyButtonBase = styled(ButtonBase)`
    color: white;
    background: #254866;
    border-radius: 5%;
    padding: 5px;
    font-size: 1rem;
    
  `

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });

  return (
    <>
      
      <h1>Hola este es mi proyecto de material ui</h1>
      <div className='miDiv'>
          <Button variant='text'>Text</Button>
          <Button 
            variant='contained'
            color='secondary'
            
            onClick={() => alert('someone click')}
          >
            Alerta
          </Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='contained' color='error' disabled>Disabled</Button>


          {/* botones con iconos */}
          <Button variant='contained' startIcon={<Send />}>enviar</Button>
          <Button variant='contained' endIcon={<Delete />}>eliminar</Button>

          {/* Que los iconos sean los botones */}
          {/* para cambiar de tamaño el icono se utiliza fontSize */}
          <IconButton aria-label='delete' color='primary' size='small'>
            <Delete fontSize='large' />   
          </IconButton>

         
        {/* Boton con loading nativo -- el title es obligatorio*/}
        <Tooltip title="click para ver loading">
          <IconButton onClick={()=> setLoading(true)} loading={loading} color='primary' >
              <ShoppingCart fontSize='large' />
              <CartBadge badgeContent={2} color="primary" overlap="circular"/>
          </IconButton>
        </Tooltip>


        {/* Boton personalizado  */}
        <MyButton>Custom button</MyButton>


        {/* Boton personalizado desde ButtonBase */}

        <MyButtonBase >CustomBase </MyButtonBase>

          {/* Boton para subir archivos */}
              <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUpload />}
          >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
          </Button>

          

      </div>
    </>
  )
}
