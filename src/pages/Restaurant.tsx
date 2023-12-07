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

    async function fetchRestaurant() {
        try {
            const response = await axios.get(`http://localhost:8083/api/restaurant/${id}`);
            const data = response.data;
            console.log(data);
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    async function fetchRestaurantMenus() {
        try {
            const response = await axios.get(`http://localhost:8084/api/menu/restaurant/${id}`);
            const data = response.data;
            console.log(data);
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    useEffect(() => {
        if (id) {
            fetchRestaurant()
                .then((data: any) => {
                    setRestaurant({
                        id: data.id,
                        name: data.name,
                        city: data.city,
                    });

                    fetchRestaurantMenus()
                        .then((menuData: any) => {
                            setMenus(
                                menuData.map((menu: any) => ({
                                    id: menu.id,
                                    items: menu.menuItemsDto.map((item: any) => ({
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
                                {menus.length > 0 &&
                                <MenuList data={menus[0].items} cart={cart} setCart={setCart} />
                                }
                                </Col>
                        </Flex>
                    </>
                }
            </div >
        </>
    )
}

export default Restaurant;