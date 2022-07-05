// import { AnimatingSentences } from "../components/animating-sentences/AnimatingSentences";
import { useWindowSize } from "react-use";
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

const PageSection = styled.div<{width: number}>`
    position: relative;
    top: ${({ width }) => width > 1000 ? -220 : Math.min(-220 + 1000 - width, 0)}px;

    @media screen and (max-width: 1000) {
        top: 0px;
    }
`

const Home = () => {
    const { width } = useWindowSize()
    return (
        <>
        <HomeHeader />
        <PageSection width={width}>
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