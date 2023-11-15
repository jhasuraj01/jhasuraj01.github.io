import styled from "styled-components";
import { SocialLink } from "../../components/social-link/SocialLink"
import MailIcon from "../../assets/contact-icons-filled/mail.svg?react"
import LinkedInIcon from "../../assets/contact-icons-filled/linkedin.svg?react"
import GitHubIcon from "../../assets/contact-icons-filled/github.svg?react"
import TwitterIcon from "../../assets/contact-icons-filled/twitter.svg?react"

const Wraper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 128px;
    padding: 128px 64px;
    background-color: var(--background-secondary_theme);
    
    @media (max-width: 600px) {
        padding: 128px 0;
    }
`
const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
`
const SectionSubtitle = styled.div`
    font-weight: 400;
    font-size: 32px;
    text-align: center;
`
const SectionTitle = styled.div`
    font-weight: 400;
    font-size: 48px;
    text-align: center;
`

const SocialLinkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100vw), 1fr));
    gap: 40px;
`

export const SocialConnect = () => {
    return (
        <Wraper>
            <SectionHeader>
                <SectionSubtitle>Let's get in Touch!</SectionSubtitle>
                <SectionTitle>Connect With Me</SectionTitle>
            </SectionHeader>
            <SocialLinkContainer>
                <SocialLink
                    link="mailto:contact@jhasuraj.com"
                    title="Email, Official"
                    value="contact@jhasuraj.com"
                    icon={MailIcon} />
                <SocialLink
                    link="mailto:suraj.jha20@pccoepune.org"
                    title="Email, College"
                    value="suraj.jha20@pccoepune.org"
                    icon={MailIcon} />
                <SocialLink
                    link="mailto:jhasurajdev@gmail.com"
                    title="Email, Alternate"
                    value="jhasurajdev@gmail.com"
                    icon={MailIcon} />
                <SocialLink
                    link="https://linkedin.jhasuraj.com/"
                    title="LinkedIn"
                    value="linkedin.com/in/jhasuraj01"
                    icon={LinkedInIcon} />
                <SocialLink
                    link="https://github.jhasuraj.com/"
                    title="GitHub"
                    value="github.com/jhasuraj01"
                    icon={GitHubIcon} />
                <SocialLink
                    link="https://twitter.jhasuraj.com/"
                    title="Twitter"
                    value="twitter.com/jhasuraj01"
                    icon={TwitterIcon} />
            </SocialLinkContainer>
        </Wraper>
        
    );
}