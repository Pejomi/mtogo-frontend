import NavigationBar from "../components/Navigationbar";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

const Home = () => {
    return (
        <>
            <NavigationBar />

            <div style={{ padding: 24, minHeight: 380, textAlign: "center" }}>
                <Title>Welcome to MTOGO</Title>
                <Title level={5} type="secondary"> Try our fantastic food delivery. Create a free account to get started today!</Title>
                <br />
                <Button type="primary">Get started</Button>
            </div>

        </>
    )
}

export default Home;