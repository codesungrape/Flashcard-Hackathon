
import styles from './Flashcard.module.css'

export default function Flashcard({value, handleClick, index}) {

    
    return (
        <section className={styles.flashcard} 
        onClick={() => handleClick(index)}
        key={index} 
        >
        {value}  
        </section>
    )
}



