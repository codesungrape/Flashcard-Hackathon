import styles from "./Form.module.css"; 
import {useState} from 'react'

export default function Form( { addFlashcardProp }) {

    // state for storing form data
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim() && answer.trim()) {
            //Step 1: create a new flashcard
            const newFlashcard = {
                question: question,
                answer: answer
            };

            //Step 2: Call the parent component's method via the propName passed down to add the flashcard
            addFlashcardProp(newFlashcard)

            //Clear form after submission
            setQuestion('');
            setAnswer('');
        }
    }

    return (
        <section className={styles["form-section"]}>
            <form onSubmit={handleSubmit} >
                <label htmlFor="question-input">Question:
                    <input 
                        id="question"
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Enter your question"
                        required
                        />
                </label>
                <label htmlFor="answer-input">Answer:
                    <input
                        id="answer" 
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your question"
                        required
                        />
                </label>
                <button type="submit">Create Flashcard!</button>
            </form>
        </section>
    )
}


