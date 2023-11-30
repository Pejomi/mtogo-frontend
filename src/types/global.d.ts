import { type } from "os"

declare global {
    type User = {
        email: string;
        token: string;
    }

    type UserRequest = {
        email: string;
        password: string;
    }

    type RegisterRequest = {
        email: string;
        password: string;
        phone: string;
        street: string;
        city: string;
        zipCode: string;
        country: string;
    }

    type AuthResponse = {
        accessToken: string;
        tokenType: string;
    }

    type MenuItem = {
        id: number,
        name: string,
        description: string,
        price: number
    }

    type Restaurant = {
        id: number,
        name: string,
        menus: MenuItem[]
    }
}

export {
    User,
    UserRequest,
    AuthResponse,
    MenuItem,
    Restaurant
}
