import { useState } from 'react'
import Flashcard from '../Flashcard/Flashcard'
import Form from '../Form/Form'
import QAData from '../../assets/QAData';
import styles from './FlashcardContainer.module.css'

export default function FlashcardContainer() {
    
    const [currentQAData, setCurrentQAData] = useState(QAData)
    
    const [qAndA, setQandA] = useState(QAData.map(qa => qa.question))

    // function to add new Flashcards
    function addFlashcard(newFlashcard) {
        // add new flashcard to the list 
        setCurrentQAData( prevFlashcards => [...prevFlashcards, newFlashcard]);

        //update card states to include new flashcard's question
        setQandA(prevStates => [...prevStates, newFlashcard.question])
    }
    
    function handleClick(index) {
        setQandA(prevStates => {
            // create new array for mutuation concerns
            const newStates = [...prevStates]

            // Toggle between question and answer for the clicked card
            newStates[index] = newStates[index] === currentQAData[index].question  ? currentQAData[index].answer : currentQAData[index].question ;

            return newStates;
        })     
    }

    return (
        <div>
            <Form addFlashcardProp={addFlashcard} />
            <section className={styles['flashcard-container']}>
            {/* Flashcards content will go here */}
                    {currentQAData.map((card, index) => 
                        (<Flashcard 
                            key={index} 
                            handleClickProp={handleClick}
                            value={qAndA[index]}
                            index={index}
                            />)
                    )}
            </section>
        </div>
    )
}




// now that ive set up the toggle, how do I push new data to each Flashcard? 