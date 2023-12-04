import { Button, Col, Flex, List, Spin } from "antd";
import Title from "antd/es/typography/Title";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
import { LoadingOutlined } from "@ant-design/icons";

interface CartListProps {
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

const CartList: React.FC<CartListProps> = ({ cart, setCart }) => {
    const [success, setSuccess] = useState<boolean | null>(null);
    const [showOrderConfirmation, setShowOrderConfirmation] = useState<boolean>(false);

    async function fetchPlaceOrder(params: OrderRequest) {
        try {
            const response = await axios.post("http://localhost:8080/api/orders", params);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    const onFinish = () => {
        fetchPlaceOrder({
            consumerId: "1",
            restaurantId: "1",
            orderState: "created",
            price: 100,
            orderItems: cart?.items
                ? cart.items.map((item: MenuItem) => ({
                    menuItemId: item.id,
                    price: item.price,
                    quantity: 1,
                }))
                : [],
        })
            .then((data: any) => {
                setSuccess(true);
                setCart({ items: [] });
            })
            .catch((error: AxiosError) => {
                setSuccess(false);
            });
        setShowOrderConfirmation(true);
    };

    return (
        <>
            {
                showOrderConfirmation ?
                    success !== null ?
                        <OrderConfirmation success={success} />
                        :
                        <Flex justify="center" align="center" style={{ margin: "50px 0px" }}>
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
                        </Flex>
                    :
                    cart && cart.items.length > 0 ?
                        <>
                            <Button id="create-order" type="primary" style={{ float: "right", background: "#00c936" }} onClick={() => onFinish()}>Create order</Button>
                            <br />
                            <List
                                id="cart-list"
                                header={<Title style={{ textAlign: "right" }} level={5}>Total ({cart.items.length})</Title>}
                                size="small"
                                pagination={{ align: "center", position: "bottom" }}
                                dataSource={cart.items && cart.items.length > 0 ? cart.items as MenuItem[] : []}
                                renderItem={(item: MenuItem) => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            title={<div style={{ fontSize: "16px" }}>{item.name}</div>}
                                            description={`Price: ${item.price}`}
                                        />
                                    </List.Item>
                                )}
                            />
                        </>
                        :
                        <Title style={{ textAlign: "center" }} level={3}>Nothing in your shopping cart</Title>
            }
        </>
    )
}

export default CartList;