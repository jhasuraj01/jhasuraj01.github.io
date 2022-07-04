// import { AnimatingSentences } from "../components/animating-sentences/AnimatingSentences";
import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import { Experience } from "./Experience";
import { HomeHeader } from "./HomeHeader";
import { HomeHighlights } from "./HomeHighlights";
import { LatestProjects } from "./LatestProjects";
import { ProblemSolving } from "./ProblemSolving";
import { SkillGraph } from "./SkillGraph";

const ilike = [
    "I like Photography!",
    "I like Travelling!",
    "I like Music!",
]

const PageSection = styled.div`
    position: relative;
    top: -220px;
`

const Home = () => {
    return (
        <>
        <HomeHeader />
        <PageSection>
            <HomeHighlights />
            <RollingText sentences={ilike}/>
        </PageSection>
        <LatestProjects />
        <Experience />
        <ProblemSolving />
        <SkillGraph />
        </>
    );
}

export default Home;