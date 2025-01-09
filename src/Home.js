import React, { useEffect, useState } from "react";



const Home = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div>
            <h1>{isClient ? 'Hello from client':'Hello from server'}</h1>
        </div>

    );
};
export default Home;