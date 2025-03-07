import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/project-card/ProjectCard";
import { SocialConnect } from "../Links/SocialConnect";
import { useLayoutEffect } from "react";

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

const ProjectsContainer = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 64px;
    padding: 64px;

    @media (max-width: 428px) {
        padding: 64px 32px;
    }
`

const Projects = () => {

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <>
        <ProjectHeader>
            <SubTitle>Created 10+ Projects in various domain</SubTitle>
            <RollingText sentences={domain} />
        </ProjectHeader>
        <ProjectsContainer>
            { projects.map(project => <ProjectCard {...project} /> )}
        </ProjectsContainer>
        <SocialConnect showThemeBg />
        </>
    );
}

export default Projects;