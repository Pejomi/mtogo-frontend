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
        id: string,
        name: string,
        price: number
    }

    type Menu = {
        restaurantId: string,
        items: MenuItem[]
    }

    type Restaurant = {
        id: string,
        name: string,
        city: string,
    }

    type Cart = {
        items: MenuItem[],
    }

    type OrderItem = {
        menuItemId: string,
        price: number,
        quantity: number
    }

    type OrderRequest = {
        consumerId: string,
        restaurantId: string,
        orderState: string,
        price: number,
        orderItemsDto: OrderItem[]
    }
}

export {
    User,
    UserRequest,
    AuthResponse,
    MenuItem,
    Restaurant,
    Menu
}
