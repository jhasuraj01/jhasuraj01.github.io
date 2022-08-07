import styled from "styled-components";
import { ProjectCard, ProjectCardProps } from "../../components/project-card/ProjectCard";
import { ReactComponent as SpecialViewProjectIcon } from '../../assets/special-view-project.svg'
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import { projects } from "../../data/projects";

const SectionTitle = styled.div`

    font-size: max(10vw, 32px);
    padding: max(10vw, 32px) 0;
    text-align: center;

    @media (min-width: 744px) {
        width: 265px;
        height: 142px;
        font-size: 64px;
        font-weight: 700;
        padding: 32px 0;
        margin-left: 64px;
        text-align: left;
    }
`

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`
const Row = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    gap: 48px;
    padding: 0 48px;
    flex-wrap: wrap;
`
const Project = styled.div<{top: number}>`
    flex: 1 0 300px;
    max-width: 400px;
    @media (min-width: 744px) {
        transform: translateY(${props => props.top}%);
    }
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
    margin-left: auto;
    margin-right: 20%;

    @media (min-width: 744px) {
        margin-right: 120px;
    }
`

export const LatestProjects = () => {
    const { width } = useWindowSize();
    const maxCards = width > 1450 ? 4 : 2;

    const projectGrid: ProjectCardProps[][] = [];
    const selectedProjects = projects.slice(0, 4);

    for(let row = 0; row < selectedProjects.length/maxCards; ++row) {
        projectGrid.push([]);
        for(let col = 0; col < maxCards; ++col) {
            projectGrid[row].push(selectedProjects[row * maxCards + col]);
        }
    }

    return (
        <section>
            <SectionTitle>Latest Projects</SectionTitle>
            <Projects>
                { projectGrid.map(projects => <ProjectRow key={projects[0].title} projects={projects} />) }
            </Projects>
            <AllProjectsLink to="projects">
                <SpecialViewProjectIcon />
            </AllProjectsLink>
        </section>
    )
}