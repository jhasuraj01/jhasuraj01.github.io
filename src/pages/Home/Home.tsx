import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import { SocialConnect } from "../Links/SocialConnect";
import { Experience } from "./Experience";
import { HomeHeader } from "./HomeHeader";
import { LatestProjects } from "./LatestProjects";
import { ProblemSolving } from "./ProblemSolving";
import { Skills } from "./Skills";

const ilike = [
    "I like Photography!",
    "I like Travelling!",
    "I like Music!",
]

const LikesContainer = styled.div`
    display: flex;
    padding: 100px 0;
    justify-content: center;
    align-content: center;
`
const Home = () => {
    return (
        <>
            <HomeHeader />
            <LikesContainer>
                <RollingText sentences={ilike}/>
            </LikesContainer>
            <LatestProjects />
            <Experience />
            <ProblemSolving />
            <Skills />
            <SocialConnect />
        </>
    );
}

export default Home;