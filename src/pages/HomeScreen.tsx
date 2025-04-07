import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";


const HomeScreen = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            Home
        </Container> 
    );
}

export default HomeScreen;