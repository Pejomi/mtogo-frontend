import Title from "antd/es/typography/Title";
import { Col, Flex } from "antd";
import CreateAccountForm from "../components/CreateAccountForm";

interface CreateAccountProps {
    setUser: (user: User) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ setUser }) => {
    return (
        <>
            <div style={{ padding: 24 }}>
                <Title level={2} style={{ textAlign: "center" }}>Create Account</Title>
                <br />
                <Flex justify="center" align="flex-start">
                    <Col style={{ width: "100%", maxWidth: "400px" }}>
                        <CreateAccountForm setUser={setUser} />
                    </Col>
                </Flex>
            </div>
        </>
    )
}

export default CreateAccount;