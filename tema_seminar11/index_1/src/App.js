import React, {useState,useEffect} from 'react';

const App = () => {
    const [steps,setSteps] = useState(0);

    useEffect( () =>{
        document.title = `Titlul dupa rularea ${steps}`;
    },[]);

    return (
    <div className="container">
      <p>Today you've taken {steps} steps!</p>
      <button onClick={() => setSteps(steps + 1)}>Click Me</button>

     

    </div>
  );
}

export default App;