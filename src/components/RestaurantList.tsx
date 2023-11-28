import { Button, List } from "antd";
import Title from "antd/es/typography/Title";

const RestaurantList = () => {
    // DUMMY DATA
    const data = [
        { id: 1, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 2, name: 'Japanese princess to wed commoner.' },
        { id: 3, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 4, name: 'Japanese princess to wed commoner.' },
        { id: 5, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 6, name: 'Japanese princess to wed commoner.' },
        { id: 7, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 8, name: 'Japanese princess to wed commoner.' },
        { id: 9, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 10, name: 'Japanese princess to wed commoner.' },
        { id: 11, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 12, name: 'Japanese princess to wed commoner.' },
        { id: 13, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 14, name: 'Japanese princess to wed commoner.' },
        { id: 15, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 16, name: 'Japanese princess to wed commoner.' },
        { id: 17, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 18, name: 'Japanese princess to wed commoner.' },
        { id: 19, name: 'Racing car sprays burning fuel into crowd.' },
        { id: 20, name: 'Japanese princess to wed commoner.' },

    ];
    return (
        <List
            header={<Title style={{ textAlign: "right" }} level={5}>Total ({data.length})</Title>}
            size="small"
            pagination={{ align: "center", position: "bottom" }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        title={<Title level={4}>{item.name}</Title>}
                        description={item.name}
                    />
                    <div><Button type="primary">See more</Button></div>
                </List.Item>
            )}
        />
    )
}

export default RestaurantList;