import styled from "styled-components";
import { ProjectCard, ProjectCardProps } from "../../components/project-card/ProjectCard";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";
import { ReactComponent as SpecialViewProjectIcon } from '../../assets/special-view-project.svg'
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const projects: ProjectCardProps[] = [
    {
        title: "Anorcle Notes - Cloud Project",
        subtitle: "Full Stack / Serverless / DBMS",
        links: {
            project: "https://notes.anorcle.com/",
        },
        thumbnail: "https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png",
        // tags: ["game", "react"]
    },
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
        title: "DSA - NPM Package (Ts/Js)",
        subtitle: "Open Source / DSA",
        links: {
            project: "https://www.npmjs.com/package/@anorcle/dsa",
            github: "https://github.com/anorcle/dsa"
        },
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Nv6BP9YSL.jpg",
        // tags: ["game", "react"]
    },
    {
        title: "College Event Certification",
        subtitle: "Web Backend / DBMS",
        links: {
            project: "https://eventspccoe.web.app/",
            youtube: "https://youtu.be/3Odx0EeYmmQ"
        },
        thumbnail: "https://admissions.cofc.edu/explore/campusvisits/events/header-events-02.jpg",
        // tags: ["game", "react"]
    }
]

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
    for(let row = 0; row < projects.length/maxCards; ++row) {
        projectGrid.push([]);
        for(let col = 0; col < maxCards; ++col) {
            projectGrid[row].push(projects[row * maxCards + col]);
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