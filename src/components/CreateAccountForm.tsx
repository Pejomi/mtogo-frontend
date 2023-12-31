import { Button, Form, Input } from "antd";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface CreateAccountFormProps {
    setUser: (user: User) => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ setUser }) => {
    const navigate = useNavigate();
    async function fetchRegistration(params: RegisterRequest) {
        try {
            const response = await axios.post("http://localhost:8082/api/auth/register/consumer", params);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    async function fetchLogin(params: UserRequest) {
        try {
            const response = await axios.post("http://localhost:8082/api/auth/login", params);
            const data = response.data;
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    const onFinish = (values: RegisterRequest) => {
        fetchRegistration(values)
            .then((data: string) => {
                fetchLogin({ email: values.email, password: values.password })
                    .then((data: AuthResponse) => {
                        setUser({ email: values.email, token: data.accessToken });
                        navigate("/");
                    })
                    .catch((error: AxiosError) => {
                        console.error("Error occurred:", error);
                    });
            })
            .catch((error: AxiosError) => {
                console.error("Error occurred:", error);
            });
    };


    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            {...formItemLayout}
        >
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid email!',
                    },
                    {
                        required: true,
                        message: 'Please input your email!'
                    }]}
            >
                <Input id="email" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input id="password" type="password" />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input id="phone" />
            </Form.Item>
            <Form.Item
                name="street"
                label="Street"
                rules={[{ required: true, message: 'Please input your street!' }]}
            >
                <Input id="street" />
            </Form.Item>
            <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please input your city!' }]}
            >
                <Input id="city" />
            </Form.Item>
            <Form.Item
                name="zipCode"
                label="Zipcode"
                rules={[{ required: true, message: 'Please input your zipcode!' }]}
            >
                <Input id="zipcode" />
            </Form.Item>
            <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: 'Please input your country!' }]}
            >
                <Input id="country" />
            </Form.Item>
            <Form.Item style={{ float: "right" }}>
                <Button id="submit-create-account" type="primary" htmlType="submit" className="login-form-button">
                    Create
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateAccountForm;