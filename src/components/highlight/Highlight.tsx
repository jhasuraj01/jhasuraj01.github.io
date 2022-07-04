import styled from "styled-components"

interface ContainerProps {
    align: 'right' | 'left'
}

interface HighlightProps {
    text: string
    data: string
    align?: 'right' | 'left'
}


const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
    gap: 9px;
`

const Text = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
`

const Data = styled.div`
    font-size: 64px;
    font-weight: 400;
    line-height: 71px;
    letter-spacing: 0em;
    text-align: center;
`

export const Highlight = ({ text, data, align = 'left' }: HighlightProps) => {
    return (
        <Container {...{ align }}>
            <Text>{text}</Text>
            <Data>{data}</Data>
        </Container>
    )
}