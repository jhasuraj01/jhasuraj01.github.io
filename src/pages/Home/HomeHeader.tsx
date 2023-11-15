import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import profileImage from '../../assets/profile2.jpg'
import { HomeHighlights } from "./HomeHighlights";
import MailIcon from "../../assets/contact-icons-outlined/mail.svg?react"
import LinkedInIcon from "../../assets/contact-icons-outlined/linkedin.svg?react"
import GitHubIcon from "../../assets/contact-icons-outlined/github.svg?react"
import TwitterIcon from "../../assets/contact-icons-outlined/twitter.svg?react"
import { useWindowSize } from "react-use";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useTheme } from "../../providers/ThemeProvider";

const iam = [
    "Developer!",
    "Designer!",
    "Engineer!",
    "Educator!",
    "Student!"
]

const Wrapper = styled.section`
    display: flex;
    align-items: flex-start;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 32px;
        padding-top: 40px;
    }
`

const ImageContainer = styled.div`
    position: sticky;
    top: 120px;
    flex: 1 2 45%;
    background-color: var(--background-secondary_theme);

    @media (max-width: 1200px) {
        flex: auto;
        width: calc(50% + min(200px, 40vw) + 24px);
        position: initial;
        top: initial;
    }
`
const InfoContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex: 1 1 55%;
    padding: 0 96px;
    gap: 32px;
    
    @media (max-width: 1300px) {
        padding: 0 48px;
    }

    @media (max-width: 1200px) {
        padding: 0 32px;
    }
`
const HeadLine = styled.div`
    font-size: 48px;
    font-weight: 200;
    margin: 28px 0;

    @media (max-width: 600px){
        font-size: 36px;
    }

    @media (max-width: 400px){
        font-size: 28px;
    }
`
const ThemeColor = styled.span`
    color: var(--color-primary_theme);
`
const MySelf = styled.div`
    cursor: crosshair;
    user-select: none;
    span, strong {
        transition: all 150ms ease-in-out;
    }

    &:hover {
        span {
            opacity: 0.5;
        }
        strong {
            color: var(--color-primary_theme)
        }
    }
`

const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    padding: 16px;
    & > * {
        transition: all 250ms ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            transition: all 250ms ease-out;
            background-color: var(--background-primary);
            border-radius: 50%;
        }
    }
`

const Profile = styled.img`
    position: relative;
    float: right;
    left: -24px;
    top: -24px;
    width: 400px;
    height: auto;
    max-width: 80vw;
`

export const HomeHeader = () => {
    const { width } = useWindowSize()
    const { themeName, toggleTheme } = useTheme();

    return (
        <Wrapper>
            <ImageContainer>
                {width > 600 && <SocialLinks>
                    <a href="mailto:contact@jhasuraj.com" target="_blank" rel="noopener noreferrer"><MailIcon /></a>
                    <a href="https://linkedin.jhasuraj.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    <a href="https://github.jhasuraj.com" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    <a href="https://twitter.jhasuraj.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                    <Classic
                        duration={200}
                        toggled={themeName === 'light'}
                        toggle={toggleTheme}
                        style={{
                            aspectRatio: '1/1',
                            fontSize: '24px',
                            color: 'var(--color-primary_theme)'
                        }}
                    />
                </SocialLinks>}
                <Profile loading="lazy" src={profileImage} alt="" width={413} height={550} />
            </ImageContainer>
            <InfoContainer>
                <HeadLine><span>I am</span> <ThemeColor><RollingText sentences={iam}/></ThemeColor></HeadLine>
                <MySelf>
                    <span>I am currently pursuing BTech. in </span>
                    <strong>Information Technology</strong>
                    <span> and Engineering with Honors in </span>
                    <strong>Blockchain</strong>
                    <span> Technology at Pimpri Chinchwad College of Engineering, Pune. My current CGPA is </span>
                    <strong>9.15/10</strong>
                    <span> and I will graduate in </span>
                    <strong>June 2024</strong>
                    <span>. I am a technology enthusiast and passionate about programming, design, and art. I love to explore and generally feel excited to learn new things about anything, whether technology related or not.</span>
                </MySelf>
                <HomeHighlights />
            </InfoContainer>
        </Wrapper>
    );
}
