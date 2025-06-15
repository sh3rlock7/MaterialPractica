import { Star } from "@mui/icons-material"
import { Box, Button, Divider, Paper, Stack, styled, Typography } from "@mui/material"

interface Plan {
    id: number
    title: string,
    desc: string
    reco?: string
}

export const Plans = () => {

    const MyPaper = styled(Paper)(({theme}) => ({
        ...theme.typography.body1,
        padding: '2rem',        
        display: 'flex',
        flexDirection: 'column'
    }))

    
    
    const plans: Plan[] = [
        {
            id: 1,
            title: 'Plan 1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem. ',
        },
        {
            id: 2,
            title: 'Plan 2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem. ',
            reco: 'Recomendado'
            
        },
        {
            id: 3,
            title: 'Plan 3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem. ',

        },
    ]

  return (
    <>
        <Typography variant="h1" sx={{mt: '150px'}}>Nuestros Planes</Typography>
        <Stack id="planType" direction='row' spacing={5} justifyContent="center" sx={{mt: '20px', padding: '10px'}}>
            {plans.map(plan => (
                <MyPaper key={plan.id} elevation={24} >
                 <Typography variant="h2"> {plan.title} </Typography>
                 <Divider />
                { plan.reco 
                    ? <Box display="flex" alignItems="center" justifyContent="center" gap={1} sx={{mt: '15px'}}>
                        <Star sx={{color: 'green'}}/>
                        <Typography variant="h5">Best Seller</Typography>
                    </Box>
                    : ''  
                }
                 <Typography variant="body1" sx={{p: '20px'}}> {plan.desc} </Typography>   
                 <Button variant="contained" sx={{mt: 'auto'}}>Suscribirme</Button>
                </MyPaper>
            ))}
        </Stack>
    </>
  )
}
