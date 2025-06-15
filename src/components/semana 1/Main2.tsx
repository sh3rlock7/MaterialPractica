import { Box, Container } from "@mui/material"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { Plans } from "./Plans"
import { Contact } from "./Contact"
import { Footer } from "./Footer"



export const Main2 = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
        
        <Header />
        <Box sx={{flex: 1}}>
          <Container maxWidth="lg" sx={{padding: 0}} >
              <Hero />
              <Plans />
              <Contact />
          </Container>
        </Box>
        <Footer  />
    </Box>
  )
}
