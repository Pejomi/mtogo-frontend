import { Button, Result } from "antd";

interface OrderConfirmationProps {
    success: boolean;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ success }) => {
    return (
        <>
            {
                success ?
                    <Result
                        status="success"
                        title="Order successfully created!"
                        subTitle="Thank you for your purchase"
                        extra={[
                            <Button type="primary" key="console" href="/">
                                Back Home
                            </Button>,
                        ]}
                    />
                    :
                    <Result
                        status="warning"
                        title="Something went wrong"
                        subTitle="Please try again later"
                        extra={[
                            <Button type="primary" key="console" href="/">
                                Back Home
                            </Button>,
                        ]}
                    />

            }

        </>
    );
}

export default OrderConfirmation;