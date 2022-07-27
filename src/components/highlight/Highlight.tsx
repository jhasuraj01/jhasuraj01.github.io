import styled from "styled-components"

interface HighlightProps {
    title: string
    data: string
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    gap: 9px;
    border: 2px solid var(--card-border-light);
    border-radius: 16px;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 600px) {
        font-size: max(4vw, 16px);
    }
`

const Data = styled.div`
    font-size: 40px;
    text-align: center;
    color: var(--color-theme);
`

export const Highlight = ({ title, data }: HighlightProps) => {
    return (
        <Container>
            <Data>{data}</Data>
            <Title>{title}</Title>
        </Container>
    )
}