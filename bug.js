```javascript
//This is a React component that uses the useState hook to manage component state.  The problem is that the state update is asynchronous, meaning the console log will print the old value of count, then the new value after a rerender.
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log('Count after increment:', count); // This will print the OLD value
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```