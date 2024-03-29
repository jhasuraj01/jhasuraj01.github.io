import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 48px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: calc(100vh - 250px);
`

const Title = styled.div`
    font-size: 48px;
    text-align: center;
`

const Description = styled.div`
    font-size: 16px;
    color: var(--color-primary_theme);
    text-align: center;
`

const Page404 = () => {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <Container>
            <Title>Woops 404!</Title>
            <Description>The requested url <strong>{location.pathname}</strong> was not found on this server.</Description>
        </Container>
    );
}

export default Page404;