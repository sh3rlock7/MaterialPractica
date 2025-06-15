import { Button, Container, Typography } from "@mui/material"

export const Hero = () => {

  const handleScroll = () => {
    const section = document.getElementById('planType');
    section?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <Container  sx={{mt: '50px', p: '20px'}}>
        
        <Typography variant="h1"> Cambia tu vida ahora </Typography>
        <Typography variant="h6" sx={{mt: '24px'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veniam dolores ullam    impedit dicta delectus maiores, quisquam laborum nisi earum error temporibus voluptas officiis, est laudantium possimus rem corporis quia tempore praesentium quibusdam fuga adipisci omnis voluptate. Quis ullam delectus voluptatibus qui suscipit provident quae, vero sit fuga, praesentium eum nostrum quam nobis laborum amet itaque minus minima ratione sed odio porro molestias enim error et. Voluptatem minima reprehenderit quidem adipisci odio nesciunt perferendis provident mollitia necessitatibus nam laborum et suscipit facilis laboriosam debitis itaque officia dolore, iusto consectetur soluta porro ducimus corrupti similique. Aspernatur dolore ipsum ipsa. Delectus, molestias!
        </Typography>
        <Button onClick={handleScroll} variant="contained" sx={{mt: "25px"}} size="large">Comenzar ahora</Button>
    </Container>
  )
}
