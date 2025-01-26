import Flashcard from '../Flashcard/Flashcard'
import { useState } from 'react'
export default function FlashcardContainer() {

    const [cardSide, setCardSide] = useState("Question")

    function handleClick() {
        setCardSide(prev => prev === "Question" ? "Answer" : "Question")
    }

    return (
        <section style={{ border: '2px solid black', padding: '20px', borderRadius: '8px' }}>
        {/* Flashcards content will go here */}
            <Flashcard cardSide={cardSide} handleClick={handleClick}/>
            <Flashcard cardSide={cardSide} handleClick={handleClick}/>
            <Flashcard cardSide={cardSide} handleClick={handleClick}/>
        </section>
    )
}





 // now that ive set up the toggle, how do I push new data to each Flashcard? 