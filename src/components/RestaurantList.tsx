import { Button, List } from "antd";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[] | []>(
        []
    );

    async function fetchRestaurant() {
        try {
            const response = await axios.get(`http://localhost:8083/api/restaurant/zip/2730`);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    useEffect(() => {
        fetchRestaurant()
            .then((data: any) => {
                setRestaurants(data);
            })
            .catch((error: any) => {
                console.error("Error occurred:", error);
            });
    }, []);

    return (
        <>
            {restaurants?.length && restaurants.length > 0 ?
                <List
                    id="restaurant-list"
                    header={<Title style={{ textAlign: "right" }} level={5}>Total ({restaurants.length})</Title>}
                    size="small"
                    pagination={{ align: "center", position: "bottom" }}
                    dataSource={restaurants}
                    renderItem={(item: Restaurant) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={<div style={{ fontSize: "16px" }}>{item.name}</div>}
                                description={item.city ? `City: ${item.city}` : "Nothing registered"}
                            />
                            <Link to={`/restaurants/${item.id}`}>
                                <Button type="primary">See more</Button>
                            </Link>
                        </List.Item>
                    )}
                />
                :
                <Title style={{ textAlign: "center" }} level={3}>No restaurants found</Title>
            }
        </>

    )
}

export default RestaurantList;