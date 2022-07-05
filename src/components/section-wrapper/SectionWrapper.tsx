import { ReactNode } from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components"

interface WrapperProps {
    width: number
    height: number
    themeBg: boolean
}
const Wrapper = styled.div<WrapperProps>`
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    background-color: ${props => props.themeBg ? 'var(--background-theme)' : 'var(--background)'};
    scroll-snap-align: start;
    position: relative;
`

interface SectionWrapperProps {
    children?: ReactNode
    themeBg?: boolean
}
export const SectionWrapper = ({ children, themeBg = false }: SectionWrapperProps) => {
    const {width, height} = useWindowSize();
    return (
        <Wrapper width={width} height={height} themeBg={themeBg}>
            {children}
        </Wrapper>
    )
}