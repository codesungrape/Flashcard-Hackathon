const QAData = [
  {
    question: "Why do you capitalize function names in React?",
    answer:
      "React capitalizes function names to distinguish components from HTML tags. JSX treats components with a capital letter as user-defined, not native elements.",
  },
  {
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension that lets you write HTML-like code in JavaScript, which is then transpiled into regular JavaScript by tools like Babel.",
  },
  {
    question:
      "What is the difference between a class component and a functional component?",
    answer:
      "Class components extend React.Component and have lifecycle methods. Functional components are simpler and, with hooks, can manage state and side effects.",
  },
  {
    question: "What is a React hook?",
    answer:
      "A React hook is a function that lets you use features like state and lifecycle methods in functional components. Examples include useState and useEffect.",
  },
  {
    question: "What is state in React?",
    answer:
      "State is an object in a component that holds data, which can be updated to trigger a re-render when it changes.",
  },
  {
    question: "What is a prop in React?",
    answer:
      "Props are read-only inputs passed from parent to child components and cannot be modified by the child.",
  },
];

export default QAData;
