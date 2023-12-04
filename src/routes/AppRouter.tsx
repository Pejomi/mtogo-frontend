import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Restaurants from "../pages/Restaurants";
import Error from "../pages/Error";
import React from "react";
import RequireAuth from "./RequireAuth";
import Logout from "../pages/Logout";
import Restaurant from "../pages/Restaurant";
import Cart from "../pages/Cart";

interface AppRouterProps {
    user: User | null;
    setUser: (user: User) => void;
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

const AppRouter: React.FC<AppRouterProps> = ({ user, setUser, cart, setCart }) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/error' element={<Error />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/logout' element={<Logout setUser={setUser} setCart={setCart} />} />
            <Route path='/create_account' element={<CreateAccount setUser={setUser} />} />

            <Route path='/restaurants' element={
                <RequireAuth isAuthorized={user !== null} children={<Restaurants />} />
            } />
            <Route path='/restaurants/:id' element={
                <RequireAuth isAuthorized={user !== null} children={<Restaurant cart={cart} setCart={setCart} />} />
            } />
            <Route path='/cart/' element={
                <RequireAuth isAuthorized={user !== null} children={<Cart cart={cart} setCart={setCart} />} />
            } />
        </Routes>
    );
}

export default AppRouter;