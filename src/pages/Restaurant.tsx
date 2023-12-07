import Title from "antd/es/typography/Title";
import { Flex, Col } from "antd";
import MenuList from "../components/MenuList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShopOutlined } from "@ant-design/icons";

interface RestaurantProps {
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

const Restaurant: React.FC<RestaurantProps> = ({ cart, setCart }) => {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [menus, setMenus] = useState<Menu[] | []>([]);

    async function fetchRestaurant(params: { id: string }) {
        try {
            const response = await axios.post(`http://localhost:8083/api/restaurant/${params.id}`);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    async function fetchRestaurantMenus(params: { restaurantId: string }) {
        try {
            const response = await axios.post(`http://localhost:8083/api/menu/restaurant/${params.restaurantId}`);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    useEffect(() => {
        if (id) {
            fetchRestaurant({ id })
                .then((data: any) => {
                    setRestaurant({
                        id: data.id,
                        name: data.name,
                        city: data.city,
                    });

                    fetchRestaurantMenus({ restaurantId: data.id })
                        .then((menuData: any) => {
                            setMenus(
                                menuData.map((menu: any) => ({
                                    id: menu.id,
                                    items: menu.items.map((item: any) => ({
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                    })),
                                }))
                            );
                        })
                })
                .catch((error: any) => {
                    console.error("Error occurred:", error);
                });
        }
    }, [id]);

    return (
        <>
            <div style={{ margin: "0px 100px", padding: 24 }}>
                {
                    restaurant &&
                    <>
                        <Title style={{ textAlign: "center" }}><ShopOutlined /> {restaurant.name}</Title>
                        <Flex justify="center" align="flex-start">
                            <Col style={{ width: "100%", maxWidth: "900px" }}>
                                <MenuList data={menus[0].items} cart={cart} setCart={setCart} />
                            </Col>
                        </Flex>
                    </>
                }
            </div >
        </>
    )
}

export default Restaurant;