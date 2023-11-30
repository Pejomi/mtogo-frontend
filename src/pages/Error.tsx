import { Button, Result } from "antd";

const Error = () => {
    return (
        <>
            <Result
                status="403"
                title="Page not found"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" href="/">Back Home</Button>}
            />
        </>

    );
}

export default Error;