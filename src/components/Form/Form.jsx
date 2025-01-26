import styles from "./Form.module.css"; 

export default function Form() {
    return (
        <section className={styles["form-section"]}>
            <form >
                <label htmlFor="">Question:
                    <input 
                        type="text"
                        />
                </label>
                <label htmlFor="">Answer:
                    <input 
                        type="text"
                        />
                </label>
            </form>
            <button>Submit!</button>
        </section>
    )
}


