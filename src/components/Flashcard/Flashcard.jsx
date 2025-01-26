import { useState } from 'react'
import styles from './Flashcard.module.css'

export default function Flashcard() {

    // make the form change state on CLick- DONE
    // make the form toggle from 'Question' to 'Answer'


    // set up useState
    const [cardSide, setCardSide] = useState("Question")

    function handleClick() {
        setCardSide(prev => prev === "Question" ? "Answer" : "Question")
    }

    return (
        <section className={styles.flashcard} onClick={handleClick} >
            <p>{cardSide}</p>
        </section>
    )
}



