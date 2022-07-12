import styled from "styled-components";
import { ProjectCard, ProjectCardProps } from "../../components/project-card/ProjectCard";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";
import { ReactComponent as SpecialViewProjectIcon } from '../../assets/special-view-project.svg'
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import { projects } from "../../data/projects";

const SectionTitle = styled.div`
    /* Latest Projects */
    width: 265px;
    height: 142px;
    margin-left: 64px;
    padding: 32px 0;

    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 71px;
`

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 128px;
`
const Row = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
`
const Project = styled.div<{top: number}>`
    width: 300px;
    transform: translateY(${props => props.top}%);
`

const ProjectRow = ({ projects }: { projects: ProjectCardProps[] }) => {
    
    const m = -20;
    const l = projects.length - 1;
    const displaceY = (i: number) => m*i - l*m/2;

    return (
        <Row>
            {projects.map((project, i) => {
                return <Project key={project.title} top={displaceY(i)}><ProjectCard {...project} /></Project>
            })}
        </Row>
    )
}

const AllProjectsLink = styled(Link)`
    position: relative;
    top: -28px;
    display: block;
    width: 171.48px;
    height: 171.48px;
    margin: 56px 0;
    margin-right: 120px;
    margin-left: auto;
`

export const LatestProjects = () => {
    const { width } = useWindowSize();
    const maxCards = width > 1270 ? 4 : 2;

    const projectGrid: ProjectCardProps[][] = [];
    const selectedProjects = projects.slice(0, 4);
    console.log(selectedProjects)
    for(let row = 0; row < selectedProjects.length/maxCards; ++row) {
        projectGrid.push([]);
        for(let col = 0; col < maxCards; ++col) {
            projectGrid[row].push(selectedProjects[row * maxCards + col]);
        }
    }

    return (
        <SectionWrapper themeBg={true}>
            <SectionTitle>Latest Projects</SectionTitle>
            <Projects>
                { projectGrid.map(projects => <ProjectRow key={projects[0].title} projects={projects} />) }
            </Projects>
            <AllProjectsLink to="projects">
                <SpecialViewProjectIcon />
            </AllProjectsLink>
        </SectionWrapper>
    )
}