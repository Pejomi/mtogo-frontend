import { Button, List } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

interface MenuListProps {
    data: MenuItem[];
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

const MenuList: React.FC<MenuListProps> = ({ data, cart, setCart }) => {
    return (
        <List
            header={<Title style={{ textAlign: "right" }} level={5}>Menu items ({data.length})</Title>}
            size="small"
            pagination={{ align: "center", position: "bottom" }}
            dataSource={data}
            renderItem={(item: MenuItem) => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={<div style={{ fontSize: "16px" }}>{item.name}</div>}
                        description={`Price: ${item.price} kr.`}
                    />
                    <Button
                        name="add-to-cart-button"
                        type="primary"
                        style={{ background: "#00c936" }}
                        onClick={() => {
                            setCart(
                                cart ?
                                    {
                                        items: [...cart.items, item]
                                    } :
                                    {
                                        items: [item]
                                    }
                            );
                        }}
                    >
                        Add to cart
                    </Button>
                </List.Item >
            )}
        />
    )
}

export default MenuList;