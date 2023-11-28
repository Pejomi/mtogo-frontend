import { Content } from "antd/es/layout/layout";
import NavigationBar from "../components/Navigationbar";
import Title from "antd/es/typography/Title";
import { Col, Flex } from "antd";
import RegisterForm from "../components/CreateAccountForm";

const CreateAccount = () => {
    return (
        <>
            <NavigationBar />

            <div style={{ padding: 24, minHeight: 380 }}>
                <Title level={2} style={{ textAlign: "center" }}>Create Account</Title>
                <br />
                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "400px" }}>
                        <RegisterForm />
                    </Col>
                </Flex>
            </div>
        </>
    )
}

export default CreateAccount;