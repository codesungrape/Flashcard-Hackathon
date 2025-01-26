import Flashcard from '../Flashcard/Flashcard'
import { useState } from 'react'
import QAData from '../../assets/QAData';
import styles from './FlashcardContainer.module.css'

export default function FlashcardContainer() {

    // set the inital state to the Obj key question 
    const [qAndA, setQandA] = useState(QAData.map(qa => qa.question))

    function handleClick(index) {
        setQandA(prevStates => {
            // create new array for mutuation concerns
            const newStates = [...prevStates]

            // Toggle between question and answer for the clicked card
            newStates[index] = newStates[index] === QAData[index].question  ? QAData[index].answer : QAData[index].question ;

            return newStates;
        }
       )
            
            
    }

    return (
        <section className={styles['flashcard-container']}>
        {/* Flashcards content will go here */}
            {QAData.map((card, index) => 
                (<Flashcard 
                    key={index} 
                    handleClick={handleClick}
                    value={qAndA[index]}
                    index={index}
                    />)
            )}
        </section>
    )
}




// now that ive set up the toggle, how do I push new data to each Flashcard? 