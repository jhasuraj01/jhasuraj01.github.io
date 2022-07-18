import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 48px;
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
    color: var(--color-theme);
    text-align: center;
`

const Page404 = () => {
    const location = useLocation()

    return (
        <Container>
            <Title>Woops 404!</Title>
            <Description>The requested url <strong>{location.pathname}</strong> was not found on this server.</Description>
        </Container>
    );
}

export default Page404;