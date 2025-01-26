
import styles from './Flashcard.module.css'

export default function Flashcard({value, handleClickProp, index}) {

    
    return (
        <section className={styles.flashcard} 
        onClick={() => handleClickProp(index)}
        key={index} 
        >
        {value}  
        </section>
    )
}



