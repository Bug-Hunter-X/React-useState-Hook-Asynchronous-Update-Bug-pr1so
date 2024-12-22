# React useState Asynchronous Update Bug
This repository demonstrates a common issue encountered when working with the `useState` hook in React: the asynchronous nature of state updates.

## Bug Description
The `MyComponent` component uses `useState` to manage a counter.  When the increment button is clicked, the `setCount` function is called.  However, because state updates are asynchronous, the `console.log` statement inside the `incrementCount` function will print the *old* value of `count` before the component re-renders with the updated value.

## Solution
The solution involves understanding that state updates in React are batched and asynchronous. To get the updated value immediately, you shouldn't rely on the value of `count` in the `incrementCount` function after calling `setCount`.  Instead, you can either access the updated state in the subsequent render or use a functional update approach.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npm start`.
5. Click the "Increment" button. Observe the unexpected output in the console.
