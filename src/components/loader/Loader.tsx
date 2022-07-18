import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 250px);
`

const Text = styled.div`
    width: 120px;
    font-size: 24px;
    color: var(--color-theme);
`

export const Loader = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count + 1) % 4)
        }, 500);
        return () => clearInterval(interval)
    }, [count])

    return (
        <Container>
            <Text>Loading{'.'.repeat(count)}</Text>
        </Container>
    );
}