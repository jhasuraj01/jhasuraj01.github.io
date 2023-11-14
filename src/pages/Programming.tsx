import { useLayoutEffect } from "react";

const Programming = () => {

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <p>Programming</p>
    );
}

export default Programming;