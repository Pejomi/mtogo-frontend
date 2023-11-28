import { Content } from "antd/es/layout/layout";
import NavigationBar from "../components/Navigationbar";
import Title from "antd/es/typography/Title";
import { Button, Col, Flex, Row } from "antd";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <>
            <NavigationBar />

            <div style={{ padding: 24, minHeight: 380 }}>
                <Title level={2} style={{ textAlign: "center" }}>Login</Title>
                <br />
                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "400px" }}>
                        <LoginForm />
                    </Col>
                </Flex>
            </div>
        </>
    )
}

export default Login;