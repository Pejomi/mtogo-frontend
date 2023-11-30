import Title from "antd/es/typography/Title";
import { Button } from "antd";
import logo from '../assets/images/pizza.png';

const Home = () => {
    return (
        <>
            <div style={{ padding: 24, textAlign: "center" }}>
                <img alt="" src={logo} style={{ width: "150px", height: "auto" }} />

                <Title>Welcome to MTOGO</Title>
                <Title level={5} type="secondary"> Try our fantastic food delivery. Create a free account to get started today!</Title>
                <br />
                <Button type="primary" href="/login">
                    Get started!
                </Button>
            </div>
        </>
    )
}

export default Home;