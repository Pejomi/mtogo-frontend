import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const CreateAccountForm = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
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
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="street"
                label="Street"
                rules={[{ required: true, message: 'Please input your street!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please input your city!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="zipcode"
                label="Zipcode"
                rules={[{ required: true, message: 'Please input your zipcode!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: 'Please input your country!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item style={{ float: "right" }}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Create
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateAccountForm;