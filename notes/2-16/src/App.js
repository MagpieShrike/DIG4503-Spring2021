import { useState } from 'react';

function App() {

                                // method - takes the value and gives us an array and a function to change that value
  const [counter, setCounter] = useState(0);
  // ISSUE: useStae only handle one value

// Above is equal to the next two lines
  //const counter = array[0];
  //const setCounter = array[1];

  return (
    <div className="App">
      var truthValue = true;
if (truthValue) {console.log("This is true!")} else {
    console.log("This is not true!")
}
      
      
    </div>
  );
}

export default App;

/*
<button onClick={() => {
        setCounter(5); // changes the value of counter
        console.log(counter);
      }}>Click me!</button>
      {counter}
*/