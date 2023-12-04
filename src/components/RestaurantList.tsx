import { Button, List } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[] | []>(
        [
            {
                id: "1",
                name: "test",
                menus: [
                    {
                        id: "1",
                        name: "test",
                        restaurantId: "1",
                        price: 10.0
                    }
                ]
            },
            {
                id: "2",
                name: "test2",
                menus: [
                    {
                        id: "1",
                        name: "test",
                        restaurantId: "1",
                        price: 10.0
                    },
                    {
                        id: "1",
                        name: "test",
                        restaurantId: "1",
                        price: 10.0
                    }
                ]
            },
            {
                id: "3",
                name: "test3",
                menus: [

                ]
            }
        ]
        /* [] */
    );

    /*  async function fetchRestaurant(params: { id: string }) {
         try {
             const response = await axios.post(`http://localhost:8083/api / restaurants / ${ id } `, params);
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
                     setRestaurant(data);
                 })
                 .catch((error: any) => {
                     console.error("Error occurred:", error);
                 });
         }
     }, [id]); */

    return (
        <>
            {restaurants.length > 0 ?
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
                                description={item.menus.length > 0 ? `Menu items: ${item.menus.length}` : "No menu items"}
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