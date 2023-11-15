import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import { SocialConnect } from "../Links/SocialConnect";
import { Experience } from "./Experience";
import { HomeHeader } from "./HomeHeader";
import { LatestProjects } from "./LatestProjects";
import { ProblemSolving } from "./ProblemSolving";
import { Skills } from "./Skills";
import { useLayoutEffect } from "react";

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
    
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <>
            <HomeHeader />
            <LikesContainer>
                <RollingText sentences={ilike}/>
            </LikesContainer>
            <Experience />
            <LatestProjects />
            <ProblemSolving />
            <Skills />
            <SocialConnect />
        </>
    );
}

export default Home;