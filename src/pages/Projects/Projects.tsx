import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/project-card/ProjectCard";
import { SocialConnect } from "../Links/SocialConnect";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";

const domain = [
    "Frontend Web",
    "Full Stack",
    "Cloud",
    "BlockChain",
    "UI & UX"
]

const SubTitle = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
`

const ProjectHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin: 132px auto;
`

const ProjectsContainer = styled(SectionWrapper)`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 64px;
    padding: 64px;
`

const Projects = () => {
    return (
        <>
        <ProjectHeader>
            <SubTitle>Created 10+ Projects in various domain</SubTitle>
            <RollingText sentences={domain} />
        </ProjectHeader>
        <ProjectsContainer themeBg={true}>
            { projects.map(project => <ProjectCard {...project} /> )}
        </ProjectsContainer>
        <SocialConnect />
        </>
    );
}

export default Projects;