# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

It's Hackathon time and we're going to keep flexing our React muscles by building an interactive Flashcards app dedicated to learning React!

Imagine a user-friendly platform where users can dynamically add, view, and interact with flashcards. Each flashcard holds a question on one side and an answer on the other. The user should be able to toggle the card to show the question or answer. The card should start off showing the question.

Click here to access the design assets for this project. You will be able to see individual assets, the complete design and marked up design showing how we would roughly draw component boundaries.
Advice
Once you accept the workshop you should have an empty repo. Start by navigating to the folder in terminal then running:

"npm create vite@latest . -- --template react"

^^ this command will create a new React app using the Vite React template 🙂

Once that command has completed you can run "npm install" then "npm run dev" to get working.

We would always suggest starting with a single component to get something working. Then maybe split out a few bits to create a Header and Footer component.

By the time you finish we think you'll end up with a component tree that looks something like this. You could go even further and split out even more but it's better to keep simple to begin.

App
├── Header
├── Form
├── Flashcards
│ └── Flashcard
└── Footer

🚨 A final piece of advice would be: The Header, Footer, Flashcards and Flashcard are the easier bits. Do them first 🙂. Start off by hard coding some "flashCards" data in the App component to begin with. Once those components are done, then move on to create a Form component.

Forms are new to you and you will need to work out how to give the Form component the ability to update the top level state that holds the list of cards.

Discuss and Explore
Where does my data live? (Identifying where to keep State)

This application probably has at least two main types of state.

Top level state to hold a list of all cards to render. Then each Flashcard will need its own state to track the open/closed status of the card.

Choosing what state to track and what level to keep the state will require some thought. The state tracking the list of all cards will need to be used by Flashcards and Form. Flashcards will render the list and Form will need to use the "setter" state function to add cards to the list. So it makes sense the state lives in the shared parent component App maybe.

The state for each Flashcard (open/closed) doesn't have anything to do with any other component so maybe it just lives in Flashcard.

Useful React Docs: https://react.dev/learn/sharing-state-between-components

Practical Tips for State and Props
Lift state up: If two components need access to the state (reading the state or editing/updating the state) then consider lifting the state into a parent component and passing the state from the parent to the child as props.
Passing state "setter" functions as props: Remember you can pass almost anything to a component as a prop. There is nothing stopping you passing a "setter" state function from a parent to child component using props.
Keep most components simple: Limit the amount you use state. Most components should just be passed props and render some UI.

Stretch Goals
After you've built the core features of your React Flashcards app and it's up and running smoothly, why stop there? Consider these stretch goals as your next steps for growth and improvement:

Enable Editing Existing Flashcards: Allow users to go back and edit the questions or answers on their flashcards.
Add Labels or Categories to Flashcards: Introduce a way for users to organize their flashcards by topic, difficulty, or any other category they find useful.
Create a Shuffle Feature: Introduce the ability to shuffle the order of flashcards.
Implement a Search Function: Add the ability for users to quickly search for specific flashcards.
Incorporate a Daily Review Limit: Set up a feature that allows users to limit how many new flashcards they review each day, promoting a steady learning pace and preventing burnout.

Feel free to explore and pursue other stretch goals as a group, beyond the suggestions provided and remember to bring all your thoughts and learnings together for presentations 👀

Presentation Guidelines ⭐
Prepare a 6-minute end-of-day demo.
Each team will present to a coach.
Each team member must participate in the presentation.

Evaluation Criteria ⚡
Teamwork: How well did the team work together? What worked well? What would you change for next time?
Presentation: Was the presentation clear, concise, and kept on time?
Plan Quality: How well was the project planned out? Did they create and follow a requirements table for their chosen resource? Did they plan their database tables/schema?
Code Quality: Is the code clean, formatted and organised?
Git Practices: Were changes documented with frequent, clear commits?
Functionality: Do the Flashcards do what is expected?
Completion: Are all required features implemented?
