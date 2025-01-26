import Flashcard from '../Flashcard/Flashcard'

export default function FlashcardContainer() {
    return (
        <section style={{ border: '2px solid black', padding: '20px', borderRadius: '8px' }}>
        {/* Flashcards content will go here */}
            <Flashcard />
            <Flashcard />
            <Flashcard />
        </section>
    )
}