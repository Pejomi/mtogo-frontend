import Title from "antd/es/typography/Title";
import { Col, Flex } from "antd";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <>
            <div style={{ padding: 24 }}>
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