// import { AnimatingSentences } from "../components/animating-sentences/AnimatingSentences";
import styled from "styled-components";
import { RollingText } from "../components/rolling-text/RollingText";
import profileImage from '../assets/profile.webp'
import { Highlight } from "../components/highlight/Highlight";
import { Link } from "react-router-dom";

const iam = [
    "I am a Developer!",
    "I am a Designer!",
    "I am an Engineer!",
    "I am an Educator!",
    "I am a Student!"
]

const ilike = [
    "I like Photography!",
    "I like Travelling!",
    "I like Music!",
]

const HomeHeader = styled.div`
    margin-top: 48px;
`

const Profile = styled.img`
    display: block;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin: 32px auto;
`

const PageSection = styled.div`
    position: relative;
    top: -250px;
`

const Highlights = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 64px;
`

const HighlightsLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const HighlightsRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    align-items: flex-end;
`



const Home = () => {
    return (
        <>
        <HomeHeader>
            <RollingText sentences={iam}/>
            <Profile src={profileImage} alt="" />
        </HomeHeader>
        <PageSection>
            <Highlights>
                <HighlightsLeft>
                    <Highlight text="Internships" data="+2" />
                    <Highlight text="Certifications" data="+8" />
                    <Highlight text="Research Papers" data="+2" />
                </HighlightsLeft>
                <HighlightsRight>
                    <Highlight text="Games Developed" data="+2" align="right" />
                    <Highlight text="DSA Problems Solved" data="+400" align="right" />
                    <Link to="/projects"><Highlight text="Projects" data="+10" align="right" /></Link>
                </HighlightsRight>
            </Highlights>
            <RollingText sentences={ilike}/>
        </PageSection>
        </>
    );
}

export default Home;