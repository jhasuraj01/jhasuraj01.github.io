import styled from 'styled-components';
import GitHubSmall from '../../assets/github-small.svg?react'
import ArrowTopRight from '../../assets/arrow-top-right.svg?react'
import VideoIcon from '../../assets/video-icon.svg?react'

const Card = styled.a`
    display: flex;
    flex-direction: column;
    padding: 8px 0 0;
    gap: 16px;
    min-width: 300px;
    border-top: 2px solid var(--border-primary_theme);
`
const CardDetail = styled.div`
    display: flex;
    gap: 16px;
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
`
const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
`
const CardSubTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`
const CardTags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`
const Tag = styled.div`
    font-size: 14px;
    display: flex;
    padding: 8px 12px;
    color: var(--color-secondary_theme);
    background: var(--background-primary_theme);
    border-radius: 34px;
`
const CardIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const CardImage = styled.img`
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
`

export interface ProjectCardProps {
    title: string
    subtitle: string
    links: {
        github?: string
        youtube?: string
        project?: string
    }
    tags?: string[]
    thumbnail: string
}

export const ProjectCard = ({ title, subtitle, links, tags, thumbnail }: ProjectCardProps) => {
    return (
        <Card href={links.project} target="new" rel="noopener noreferrer">
            <CardDetail>
                <CardText>
                    <CardTitle>{title}</CardTitle>
                    <CardSubTitle>{subtitle}</CardSubTitle>
                    {tags ? <CardTags> {tags.map(tag => <Tag key={tag}>{tag}</Tag> )} </CardTags> : <></> }
                </CardText>
                <CardIcons>
                    { links.project && <a className='hvr-buzz-out' href={links.project} target="_blank" rel="noopener noreferrer"><ArrowTopRight /></a> }
                    { links.github && <a className='hvr-buzz-out' href={links.github} target="_blank" rel="noopener noreferrer"><GitHubSmall /></a> }
                    { links.youtube && <a className='hvr-buzz-out' href={links.youtube} target="_blank" rel="noopener noreferrer"><VideoIcon /></a> }
                </CardIcons>
            </CardDetail>
            <CardImage src={thumbnail} loading='lazy'/>
        </Card>
    );
}