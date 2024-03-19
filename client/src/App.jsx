import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import MyReservations from "./pages/myReservations/MyReservations"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/hotels" element={<List/>}/>
                <Route path="/hotels/:id" element={<Hotel/>}/>
                <Route path="/reservations/myreservations" element={<MyReservations />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
