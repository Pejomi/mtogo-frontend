import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create_account' element={<CreateAccount />} />
        </Routes>
    );
}
export default AppRouter;