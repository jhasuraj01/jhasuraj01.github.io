import styled from "styled-components";
import { ProfileLink } from "../../components/profile-link/ProfileLink";
import { profiles } from "../../data/profiles";

const Wraper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 36px;
    padding: 36px;
    max-width: 1344px;
    margin: auto;
`

export const PublicProfile = () => {
    return (
        <Wraper>
            {profiles.map(profile => <ProfileLink key={profile.link} {...profile} />)}
        </Wraper>
    );
}