import { useEffect, useState } from 'react';
import styles from './RollingText.module.scss'

interface RollingTextProps {
    sentences: string[]
}

export const RollingText = ({ sentences }: RollingTextProps) => {
    
    let [ index ] = useState(0);
    const [sentence, setSentence] = useState(sentences[index])

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % sentences.length;
            setSentence(sentences[index])
        }, 1500);

        return () => clearInterval(interval);
    }, [sentences])

    return (
        <div key={sentence} className={styles.text}>{sentence}</div>
    )
}