import { FunctionComponent } from "react";
import styled from "styled-components"

const Wrapper = styled.a`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 24px;
    gap: 24px;
    border-radius: 8px;

    border: 1px solid var(--card-border);
    transition: all 250ms ease-in-out;

    &:hover {
        box-shadow: 0 0 16px 4px #00000011;
    }
`

const ProfileTitle = styled.div`
    font-size: 32px;
`
const ProfileSubTitle = styled.div`
    font-size: 14px;
    color: var(--color-secondary)
`
const ProfileDescription = styled.div`
    font-size: 16px;
`
const ProfileValue = styled.div`
    font-size: 20px;
    color: var(--color-theme);
`

export interface ProfileLinkProps {
    link: string
    title: string
    subtitle: string
    description: string
    value: string
}

export const ProfileLink = ({ link, title, subtitle, description, value }: ProfileLinkProps) => {
    return (
        <Wrapper href={link} target="new" rel="noopener noreferrer">
            <ProfileTitle>{title}</ProfileTitle>
            <ProfileSubTitle>{subtitle}</ProfileSubTitle>
            <ProfileDescription>{description}</ProfileDescription>
            <ProfileValue>{value}</ProfileValue>
        </Wrapper>
    )
}