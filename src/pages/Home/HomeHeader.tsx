import styled from "styled-components";
import { RollingText } from "../../components/rolling-text/RollingText";
import profileImage from '../../assets/profile.webp'

const iam = [
    "I am a Developer!",
    "I am a Designer!",
    "I am an Engineer!",
    "I am an Educator!",
    "I am a Student!"
]

const Wrapper = styled.div`
    margin-top: 48px;
`

const Profile = styled.img`
    display: block;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin: 32px auto;
`

export const HomeHeader = () => {
    return (
        <Wrapper>
            <RollingText sentences={iam}/>
            <Profile src={profileImage} alt="" />
        </Wrapper>
    );
}