import Title from "antd/es/typography/Title";
import { Flex, Col } from "antd";
import MenuList from "../components/MenuList";

const Restaurant = () => {
    return (
        <>
            <div style={{ margin: "0px 100px", padding: 24 }}>
                <Title style={{ textAlign: "center" }}> [Restaurant Name]</Title>
                <br />
                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "900px" }}>
                        <MenuList />
                    </Col>
                </Flex>
            </div >
        </>
    )
}

export default Restaurant;