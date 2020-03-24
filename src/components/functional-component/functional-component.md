Components in its simplest form is a function which returns a JSX

## Functional Components

- These are also called stateless, dumb and presentational components, because they do not have their internal state which is on contrary with the class-based components.
- It is advisable to use functional components as much as possible, as they do not alter states and behave as pure components

Note: Since React ^16.8, the React team has introduced a support for functional components to also maintain their own state, these are called React Hooks(These are nothing but certain functions that are exposed to the outer world, used for maintaining states in functional components, the most important of them is useState() -> This returns an array of two elements, the first one being the actual state object and second one being the function which helps save state, one downside in using useState(), when merges happen, it only cares for properties for which merged is needed, and removes other properties). So, it is recommended to use individual useState() calls for each state property
