import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Restaurants from "../pages/Restaurants";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create_account' element={<CreateAccount />} />
            <Route path='/restaurants' element={<Restaurants />} />
        </Routes>
    );
}
export default AppRouter;