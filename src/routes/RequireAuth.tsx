import React from "react";

interface RequireAuthProps {
    isAuthorized: boolean;
    children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ isAuthorized, children }) => {
    return (
        <>
            {isAuthorized ? (
                children
            ) : (
                window.location.replace("/error")
            )}
        </>
    );
};

export default RequireAuth;
