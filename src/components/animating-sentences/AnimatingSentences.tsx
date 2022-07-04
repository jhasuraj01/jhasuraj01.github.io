import { useEffect, useState } from 'react';
import AnimatedText from 'react-animated-text-content';
import styles from './AnimatingSentences.module.scss';

interface AnimatingSentencesProps {
    staticPhrase: string
    sentences: string[]
}

let index = 0;

export const AnimatingSentences = ({ staticPhrase, sentences }: AnimatingSentencesProps) => {

    const time = 1;
    const [sentence, setSentence] = useState(sentences[index])

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % sentences.length;
            setSentence(sentences[index])
        }, time * 2000);

        return () => clearInterval(interval);
    }, [sentences])

    console.log(sentence)

    return (
        <div className={styles.text}>
            {staticPhrase} <AnimatedText animationType='bounce' type='words' interval={0.04} duration={time} animation={{ y: '0px', ease: 'ease-in-out', scale: 1 }} includeWhiteSpaces={true}>{sentence}</AnimatedText>
        </div>
    );
}