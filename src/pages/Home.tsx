import Title from "antd/es/typography/Title";
import { Button } from "antd";

const Home = () => {
    return (
        <>
            <div style={{ padding: 24, textAlign: "center" }}>
                <Title>Welcome to MTOGO</Title>
                <Title level={5} type="secondary"> Try our fantastic food delivery. Create a free account to get started today!</Title>
                <br />
                <Button type="primary">
                    <a href="/login">Get started</a>
                </Button>
            </div>
        </>
    )
}

export default Home;