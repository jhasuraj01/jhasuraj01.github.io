import { FunctionComponent } from "react";
import styled from "styled-components"

const Wrapper = styled.a`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 12px;
    gap: 16px;
    border-top: 1px solid #9A4DFF;
    transition: all 250ms ease-in-out;

    &:hover {
        box-shadow: 0 0 16px 4px #00000011;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const CardTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 400px) {
        font-size: 13px;
    }
`
const CardValue = styled.div`
    font-weight: 400;
    font-size: 20px;
    text-overflow: ellipsis;
    @media (max-width: 400px) {
        font-size: 16px;
    }
`
const IconContainer = styled.div`
    flex-shrink: 0;
`

export interface SocialLinkProps {
    link: string,
    title: string,
    value: string,
    icon: FunctionComponent
}

export const SocialLink = ({ link, title, value, icon: Icon }: SocialLinkProps) => {
    return (
        <Wrapper href={link} target="new" rel="noopener noreferrer">
            <IconContainer>
                <Icon />
            </IconContainer>
            <TextWrapper>
                <CardTitle>{title}</CardTitle>
                <CardValue>{value}</CardValue>
            </TextWrapper>
        </Wrapper>
    )
}