import { useState, useEffect } from 'react';

const Home = () => {
    const [count, setCount ] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted')
        }
    }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment </button>
        </div>
    )
} 

export default Home;