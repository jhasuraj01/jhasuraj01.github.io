import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import GitHubIcon from "../../assets/contact-icons-outlined/github.svg?react";
import LinkedInIcon from "../../assets/contact-icons-outlined/linkedin.svg?react";
import MailIcon from "../../assets/contact-icons-outlined/mail.svg?react";
import TwitterIcon from "../../assets/contact-icons-outlined/twitter.svg?react";
import profileImage from '../../assets/profile.webp';
import { RollingText } from "../../components/rolling-text/RollingText";
import { useTheme } from "../../providers/ThemeProvider";
import { HomeHighlights } from "./HomeHighlights";
import { dateDiff } from "./utils/dateDiff";
import { experiences } from "../../data/experience";

const iam = [
    "Engineer!",
    "Learner!",
    "Traveller!",
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
    width: 350px;
    height: auto;
    max-width: 80vw;
    transform: translate3d(-5%, -5%, 0) scale3d(1.1, 1.1, 1);
`

export const HomeHeader = () => {
    const { width } = useWindowSize()
    const { themeName, toggleTheme } = useTheme();
    const careerStart = new Date("20 Aug, 2024")
    const today = new Date()

    return (
        <Wrapper>
            <ImageContainer>
                {width > 600 && <SocialLinks>
                    <a href="mailto:contact@jhasuraj.com" target="_blank" rel="noopener noreferrer"><MailIcon /></a>
                    <a href="https://linkedin.jhasuraj.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    <a href="https://github.jhasuraj.com" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    <a href="https://twitter.jhasuraj.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                    <Expand
                        duration={200}
                        toggled={themeName === 'dark'}
                        toggle={toggleTheme}
                        style={{
                            aspectRatio: '1/1',
                            fontSize: '24px',
                            color: 'var(--color-primary_theme)'
                        }}
                    />
                </SocialLinks>}
                <Profile loading="lazy" src={profileImage} alt="" width={1318} height={1957} />
            </ImageContainer>
            <InfoContainer>
                <HeadLine><span>I am</span> <ThemeColor><RollingText sentences={iam}/></ThemeColor></HeadLine>
                <MySelf>
                    <span>I graduated with </span>
                    <strong>BTech. Information Technology </strong>
                    <span>with Honors in </span>
                    <strong>Blockchain </strong>
                    <span> Technology from Pimpri-Chinchwad College of Engineering, Pune. My final CGPA is </span>
                    <strong>9.11/10. </strong>

                    <span>Currently, I am working at </span>
                    <strong>{experiences[0].company} </strong>
                    <span>as </span>
                    <strong>{experiences[0].role} </strong>
                    <span>with total </span>
                    <strong>{dateDiff(careerStart, today)} </strong>
                    <span>of full-time experience. </span>
                    <span>I am an AI enthusiast and like to work on complex problems & high scale applications. I love to explore and generally feel excited to learn new things about anything, whether technology related or not.</span>
                </MySelf>
                <HomeHighlights />
            </InfoContainer>
        </Wrapper>
    );
}
