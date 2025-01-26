
import styles from './Flashcard.module.css'

export default function Flashcard({cardSide, handleClick}) {

    
    return (
        <section className={styles.flashcard} onClick={handleClick} >
            <p>{cardSide}</p>
        </section>
    )
}



