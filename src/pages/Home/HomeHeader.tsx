import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import profileImage from '../../assets/profile2.jpg'
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";
import { HomeHighlights } from "./HomeHighlights";

const iam = [
    "Developer!",
    "Designer!",
    "Engineer!",
    "Educator!",
    "Student!"
]

const Wrapper = styled(SectionWrapper)`
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
    background-color: var(--background-theme);

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
    color: var(--color-theme);
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
            color: var(--color-theme)
        }
    }
`

const Profile = styled.img`
    position: relative;
    float: right;
    left: -24px;
    top: -24px;
    width: 400px;
    max-width: 80vw;
`

export const HomeHeader = () => {
    return (
        <Wrapper>
            <ImageContainer>
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
                    <strong>9.37/10</strong>
                    <span> and I will graduate in </span>
                    <strong>June 2024</strong>
                    <span>. I am a technology enthusiast and passionate about programming, design, and art. I love to explore and generally feel excited to learn new things about anything, whether technology related or not.</span>
                </MySelf>
                <HomeHighlights />
            </InfoContainer>
        </Wrapper>
    );
}