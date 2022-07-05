import styled from "styled-components";
import { ProjectCard, ProjectCardProps } from "../../components/project-card/ProjectCard";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";
import { ReactComponent as SpecialViewProjectIcon } from '../../assets/special-view-project.svg'
import { Link } from "react-router-dom";

const projects: ProjectCardProps[] = [
    {
        title: "Online Sudoku Web Game",
        subtitle: "Web Frontend / DSA",
        links: {
            project: "https://jhasuraj.com/sudoku/",
            github: "https://github.com/jhasuraj01/sudoku"
        },
        thumbnail: "https://t4.ftcdn.net/jpg/00/01/31/81/360_F_1318176_WoOuwog3nfY4wpCiaxLqjbzrEk7MNt.jpg",
        // tags: ["game", "react"]
    },
    {
        title: "Online Sudoku Web Game 2",
        subtitle: "Web Frontend / DSA",
        links: {
            project: "https://jhasuraj.com/sudoku/",
            github: "https://github.com/jhasuraj01/sudoku"
        },
        thumbnail: "https://t4.ftcdn.net/jpg/00/01/31/81/360_F_1318176_WoOuwog3nfY4wpCiaxLqjbzrEk7MNt.jpg",
        // tags: ["game", "react"]
    },
    {
        title: "Online Sudoku Web Game 3",
        subtitle: "Web Frontend / DSA",
        links: {
            project: "https://jhasuraj.com/sudoku/",
            github: "https://github.com/jhasuraj01/sudoku"
        },
        thumbnail: "https://t4.ftcdn.net/jpg/00/01/31/81/360_F_1318176_WoOuwog3nfY4wpCiaxLqjbzrEk7MNt.jpg",
        // tags: ["game", "react"]
    },
    {
        title: "Online Sudoku Web Game 4",
        subtitle: "Web Frontend / DSA",
        links: {
            project: "https://jhasuraj.com/sudoku/",
            github: "https://github.com/jhasuraj01/sudoku"
        },
        thumbnail: "https://t4.ftcdn.net/jpg/00/01/31/81/360_F_1318176_WoOuwog3nfY4wpCiaxLqjbzrEk7MNt.jpg",
        // tags: ["game", "react"]
    }
]

const SectionTitle = styled.div`
    /* Latest Projects */
    position: absolute;
    width: 265px;
    height: 142px;
    left: 64px;
    top: 32px;

    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 71px;
`

const Projects = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
`

const Project = styled.div<{top: number}>`
    position: relative;
    top: ${props => props.top}%;
`

const AllProjectsLink = styled(Link)`
    position: absolute;
    width: 171.48px;
    height: 171.48px;
    left: 1203px;
    top: 498px;
`

export const LatestProjects = () => {

    const m = -10;
    const l = projects.length - 1;
    const displaceY = (i: number) => m*i - l*m/2;

    return (
        <SectionWrapper fill={true}>
            <SectionTitle>Latest Projects</SectionTitle>
            <Projects>
                {projects.map((project, i) => 
                    <Project top={displaceY(i)}><ProjectCard key={project.title} {...project} /></Project>
                )}
            </Projects>
            <AllProjectsLink to="projects">
                <SpecialViewProjectIcon />
            </AllProjectsLink>
        </SectionWrapper>
    )
}