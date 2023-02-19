import { useState } from 'react';
import './App.css';
// import Box from "./comonent/Box"

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);

  const increase =()=> {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter : ", counter, "counter2 State : ", counter2);
  } 

  return (
    <div>
      {/* <Box name="content1" num="1"/>
      <Box name="content2" num="2"/>
      <Box name="content3" num="3"/> */}

      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
