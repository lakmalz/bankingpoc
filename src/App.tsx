import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Navigate to ="/home"/>}/>
      <Route path="/home" element={<HomeScreen />}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/registration" element={<RegistrationScreen/>}/>
    </Routes>
  );
}

export default App;
