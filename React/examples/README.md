To install Dependencies we use npm install packagename
To install devDependencies we use npm install -D packagename

What is React?
React is a open source javascript library for building user interfaces or single page applications using component base approach .

1. Pure React refers to writing React code without using JSX

2. What is Single-Page Applications
   SPA stands for Single-Page Application, which dynamically updates its content without requiring a full page reload.

3. Features of React js?

- Components :- Components are reusable Building blocks of user interfaces in React.

- Virtual DOM:- React uses a virtual DOM to improve performance by minimising direct DOM manipulations.

- One-Way Data Flow:- In React data Flow from Top to Bottom in a single direction. Data Flow from Parent Component to Child Component via Props.

- JSX stands for JavaScript XML, which allows writing HTML in React components.

4. # What is component?

- Components are Building blocks of user interfaces in React.
- Each components have its own data, logic, and appearance.
- We build complex UIs by building multiple components and combining them.
- we can reuse Components in react

## Two important rules for components

- Function name needs to start with capital letter.
- Function needs to return some markup.

5. # Functional Component

- Functional Component in react is nothing but a javascript functions.
- A Functional component accepts props as an argument and returns a React Element.
- A function component is called as stateless functional component.

6. # JSX in React

- JSX stands for JavaScript XML.
- With the help of JSX we can write html code inside js.
- ⇒JSX ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render).

if your using common js as module system we use module.export = moduleName
to import module we use require function

7. # What is props in React?

- Props (short for "properties") in React are used to pass data from a parent component to a child component.
- With props, parent components control how child components look and work.
- Props are read-only, they are immutable! This is one of Reacts strict rules.
- If you need to mutate props, you actually need state.

8. # Rendering the Lists

When we have an array and we want to create one component for each element of array

9. # Why we need keys in React? When do we need keys in React?

Keys in React are needed to uniquely identify elements in a list. They help React efficiently update, add, or remove items from list.

10. # What is Conditional Rendering?

Conditional rendering in React allows components to render differently based on certain conditions, using JavaScript’s conditional statements like `if`, `ternary operators`, or `&&`.

11. # What is State in React

- State is a Component’s memory
- In React, **state** is a object that holds information about the component that may change over time.
- State in react is like a container where components store and manages their state.

12. # React Hooks

-React hook is just javascript function
-hooks are used inside functional components only not in class
-all hooks executed in same order in code
-hooks are placed at top lvl code only

13. # Why do we need a useState Hook

The useState Hook in React allows you to add state to functional components, which were previously stateless. Before hooks, only class components could manage state.

With useState, you can Store and update data within a functional component.

Syntax:-
const [state, setState] = useState(initialValue)
`state` is the state variable.
`setState` is the *setter function* that lets us update the state variable, triggering React to re-render the component.
`initialValue` is the value we use to initialize the state variable.

14. # Master useEffect Hook

useEffect is a React Hook that allows you to perform side effects in function components.

In React, a side effect is anything that happens after the component renders but is not part of the UI return.

Side effects include things like:

Fetching data from an API

Running Timers (like setInterval, setTimeout)

15. #
