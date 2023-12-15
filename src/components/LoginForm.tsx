import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    setUser: (user: User) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setUser }) => {
    const navigate = useNavigate();
    async function fetchLogin(params: UserRequest) {
        try {
            const response = await axios.post("http://localhost:8082/api/auth/login", params);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    const onFinish = (values: UserRequest) => {
        fetchLogin(values)
            .then((data: AuthResponse) => {
                setUser({ email: values.email, token: data.accessToken });
                navigate("/");
            })
            .catch((error: AxiosError) => {
                console.error("Error occurred:", error);
            });
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input id="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    id="password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
                <Button id="submit-login" type="primary" htmlType="submit" className="login-form-button" name="login">
                    Log in
                </Button>
                <span style={{ paddingLeft: "10px" }}>Or <a href="/create_account">register now!</a></span>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;