import { ReactNode } from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components"

interface WrapperProps {
    width: number
    height: number
    fill: boolean
}
const Wrapper = styled.div<WrapperProps>`
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    background-color: ${props => props.fill ? 'var(--background-theme)' : 'var(--background)'};
    scroll-snap-align: start;
    position: relative;
`

interface SectionWrapperProps {
    children?: ReactNode
    fill?: boolean
}
export const SectionWrapper = ({ children, fill = false }: SectionWrapperProps) => {
    const {width, height} = useWindowSize();
    return (
        <Wrapper width={width} height={height} fill={fill}>
            {children}
        </Wrapper>
    )
}