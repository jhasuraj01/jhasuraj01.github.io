import styled from "styled-components";

const Wrapper = styled.div`
    padding: 24px 16px;
    text-align: center;
    font-size: 16px;
`

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Wrapper>
            © {year} - {year + 1} Suraj Jha. All Right Reserved.
        </Wrapper>
    )
}