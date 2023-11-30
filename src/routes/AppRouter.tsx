import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Restaurants from "../pages/Restaurants";
import Error from "../pages/Error";
import React from "react";
import RequireAuth from "./RequireAuth";
import Logout from "../pages/Logout";

interface AppRouterProps {
    user: User | null;
    setUser: (user: User) => void;
}

const AppRouter: React.FC<AppRouterProps> = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/error' element={<Error />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/logout' element={<Logout setUser={setUser} />} />
            <Route path='/create_account' element={<CreateAccount setUser={setUser} />} />

            <Route path='/restaurants' element={
                <RequireAuth isAuthorized={user !== null} children={<Restaurants />} />
            } />

        </Routes>
    );
}

export default AppRouter;