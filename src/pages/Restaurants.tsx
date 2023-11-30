import Title from "antd/es/typography/Title";
import RestaurantList from "../components/RestaurantList";
import { Flex, Col } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { useState } from "react";

const Restaurants = () => {
    return (
        <>
            <div style={{ margin: "0px 100px", padding: 24 }}>
                <Title style={{ textAlign: "center" }}> <ShopOutlined /> Restaurants</Title>
                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "900px" }}>
                        <RestaurantList />
                    </Col>
                </Flex>
            </div >
        </>
    )
}

export default Restaurants;