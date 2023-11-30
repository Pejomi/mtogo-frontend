import { SmileOutlined } from "@ant-design/icons";
import { Result, Button } from "antd";

import React from "react";

interface LogoutProps {
    setUser: (user: any) => void;
}

const Logout: React.FC<LogoutProps> = ({ setUser }) => {
    setUser(null);

    return (
        <>
            <Result
                icon={<SmileOutlined />}
                title="You have successfully logged out"
                subTitle="Hope to see you again soon!"
                extra={<Button type="primary" href="/">Back Home</Button>}
            />
        </>
    )
}

export default Logout;