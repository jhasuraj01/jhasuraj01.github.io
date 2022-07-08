import styled from "styled-components"

const ProgressBarContainer = styled.div<{ background: string, height: string}>`
    background-color: ${props => props.background};
    height: ${props => props.height};
    width: 100%;
    border-radius: calc(${props => props.height} / 2);
    overflow: hidden;
`
const Progress = styled.div<{ color: string, percent: number, height: string}>`
    background-color: ${props => props.color};
    width: ${props => props.percent}%;
    height: ${props => props.height};
    border-radius: calc(${props => props.height} / 2);
`

interface ProgressBarProps {
    percent: number;
    color: string;
    background: string;
    height?: string;
}

export const ProgressBar = ({ percent, color, background, height}: ProgressBarProps) => {
    if(!height) height = "100%";

    return (
        <ProgressBarContainer background={background} height={height}>
            <Progress color={color} percent={percent} height={height}/>
        </ProgressBarContainer>
    )
}