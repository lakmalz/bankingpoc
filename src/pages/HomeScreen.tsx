import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const HomeScreen = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <Typography>
                Welcome to the home screen
            </Typography>
            <Stack spacing={2} direction="column">
                <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
                <Button variant="contained" onClick={()=> navigate("/registration")}>Registration</Button>
            </Stack>
        </Container> 
    );
}

export default HomeScreen;