import React, {useState} from 'react';
import './App.css';
import Lineup from './components/Lineup';
import { Wheel } from './components/Wheel';
import Popup from 'reactjs-popup';

function App() {
  const [currentlineup, updatelineup] = useState([]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        Build a NBA Lineup
      </header>
      <div className='App-body'>
        <Wheel currentlineup={currentlineup} updatelineup={updatelineup}></Wheel>
        <Lineup lineup={currentlineup}></Lineup>
      </div>
      {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
          &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
          ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
          doloribus. Odit, aut.
        </div>
      </Popup> */}
    </div>
  );
}

export default App;
