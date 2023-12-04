import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex, Col, Button } from "antd";
import Title from "antd/es/typography/Title";
import RestaurantList from "../components/RestaurantList";
import CartList from "../components/CartList";

interface CartProps {
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
    return (
        <>
            <div style={{ margin: "0px 100px", padding: 24 }}>
                <Title style={{ textAlign: "center" }}> <ShoppingCartOutlined /> Shopping cart</Title>

                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "900px" }}>
                        <CartList cart={cart} setCart={setCart} />
                    </Col>
                </Flex>
            </div >
        </>
    );
}

export default Cart;