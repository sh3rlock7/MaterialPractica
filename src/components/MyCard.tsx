import { Box, Button, Card, CardContent, Typography } from "@mui/material"

export const MyCard = () => {
    const titulos = [
        'Kevin',
        'Carla',
        'Emma',
        'Alessia',
    ]
  return (
    <Box sx={{width: 'full', height: 'fit',bgcolor: 'inherit', display: 'flex', gap: 2, mt: '2rem' }}>
        {
            titulos.map((titulo, index) => (
                <Card key={index} sx={{p: '2px', width:'400px', height:'100%', '&:hover': {bgcolor: 'black', color: 'white'} }}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', height:'100%'}}>
                        <Typography variant="h5">{titulo}</Typography>
                        <Typography sx={{p: '5px', flexGrow: 1}} variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consectetur consequatur quasi assumenda fugiat, ducimus dicta quae esse ab dolores.</Typography>
                        <Button sx={{mt: '20px' }} variant="contained">Aprender más...</Button>
                    </CardContent>
                </Card>
            ))
        }
    </Box>
  )
}
