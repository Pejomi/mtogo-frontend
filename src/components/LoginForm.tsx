import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>

                <span style={{ paddingLeft: "10px" }}>Or <a href="/create_account">register now!</a></span>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;