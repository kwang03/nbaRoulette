import React, {useState} from 'react';
import './App.css';
import Lineup from './components/Lineup';
import { Wheel } from './components/Wheel';
import Popup from 'reactjs-popup';

function App() {
  const [currentlineup, updatelineup] = useState(["a","b","c","d"]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        Build a NBA Lineup
      </header>
      <div className='App-body'>
        <Wheel open={open} setopen={setOpen} currentlineup={currentlineup} updatelineup={updatelineup}></Wheel>
        <div className='lineup'>
          <Lineup lineup={currentlineup}></Lineup>
          <button className='reset' onClick={() => {updatelineup([])}}>
            Reset
          </button>
        </div>
        
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} modal>
        <div className="modal">
          <div className="header"> Your Final Team </div>

          <div className='content'>
            <Lineup lineup={currentlineup}></Lineup>
          </div>
          <div className="actions">
            <button className='playAgain' onClick={() => {updatelineup([]);
            closeModal()}}>
              Play again
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default App;
