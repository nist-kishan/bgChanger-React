import { useState } from 'react';
import './App.css';


function App() {
  let [color, SetColor] = useState("brown")
  return (
    <>
      <div className='container-fluid d-flex bottom-1 justify-content-center align-items-end min-vh-100' style={{ backgroundColor: color }}>
        <div className='row'>
          <div className='col-lg-5 text-center box-1'>
            <button className='btn btn-primary m-1 bluebtn-1' onClick={() => SetColor("blue")}>Blue</button>
            <button className='btn btn-primary m-1 bluebtn-2' onClick={() => SetColor("green")}>Green</button>
            <button className='btn btn-primary m-1 bluebtn-3' onClick={() => SetColor("yellow")}>Yellow</button>
            <button className='btn btn-primary m-1 bluebtn-4' onClick={() => SetColor("black")}>Black</button>
            <button className='btn btn-primary m-1  bluebtn-5' onClick={() => SetColor("grey")}>Gray</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
