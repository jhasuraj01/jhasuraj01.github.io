import { useLayoutEffect } from "react";
import { PublicProfile } from "./PublicProfiles";
import { SocialConnect } from "./SocialConnect";

const Links = () => {

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])
    
    return (
        <>
        <PublicProfile />
        <SocialConnect />
        </>
    );
}

export default Links;