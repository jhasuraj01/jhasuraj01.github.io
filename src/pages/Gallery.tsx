import { useLayoutEffect } from "react";

const Gallery = () => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, []);
    
    return (
        <p>Gallery</p>
    );
}

export default Gallery;