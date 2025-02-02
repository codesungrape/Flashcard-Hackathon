# Flashcards App - React Hackathon

## Overview

It's Hackathon time and I had 24 hours to building an interactive Flashcards app dedicated to learning React, and present upon it!

This user-friendly platform allows users to dynamically add, view, and interact with flashcards. Each flashcard holds a question on one side and an answer on the other. The user should be able to toggle the card to show the question or answer. The card should start off showing the question.

![Render Tree] (src/assets/ComponentTree.png)

## ✨ Features

- Create custom flashcards with questions and answers
- Flip cards to reveal answers
- Responsive design that works on both desktop and mobile
- Persistent storage using localStorage
- Intuitive user interface for easy navigation

## 💻 Tech Stack

- React 18
- Vite
- CSS Modules
- localStorage for data persistence

## 📁 Project Structure

```sh
src/
  ├── components/
  │   ├── Flashcard/
  │   ├── FlashcardList/
  │   └── AddFlashcard/
  ├── assets/
  ├── styles/
  └── App.jsx
```

## 🎯 Usage

Here's a quick example of how to use the flashcard app:

1. Click "Add Flashcard" button
2. Enter your question and answer
3. Click "Create" to add the flashcard
4. Click on any flashcard to flip it

## Acknowledgements

- [Vite](https://vite.dev/guide/)
- [React](https://react.dev/)

## Authors

- [@shanti](https://github.com/codesungrape)

## Contributing

Contributions are always welcome!

## 🚀 Deployment

### Locally (Development Mode)

To start the development server, run:

```sh
npm run dev
```

## 🛠 Installation

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Setup Steps

1. Clone the repository

```sh
git clone https://github.com/codesungrape/Flashcard-Hackathon.git
```

2. Navigate to the project directory

```sh
cd Flashcard-Hackathon
```

3. Install dependencies

```sh
npm install
```

4. Start the development server

```sh
npm run dev
```

8. Add a Bug Reporting section:

```markdown
## 🐛 Bug Reporting

Feel free to [open an issue](https://github.com/codesungrape/Flashcard-Hackathon/issues) if you find any bugs or want to suggest improvements.
```

## RoadMap

- Add a feature to allow users to delete flashcards
- Add a feature to allow users to edit flashcards
- Add a feature to allow users to shuffle flashcards
- Add a feature to allow users to filter flashcards

## Testing Roadmap

- Add tests for the Flashcard component
- Add tests for the FlashcardList component
- Add tests for the AddFlashcard component
- Add tests for the App component

## 📝 License

[MIT](LICENSE.md) - feel free to use this project for any purpose
