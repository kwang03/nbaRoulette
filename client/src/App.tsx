import React, {useState, useEffect} from 'react';
import './App.css';
import Lineup from './components/Lineup';
import { Wheel } from './components/Wheel';
import Popup from 'reactjs-popup';

function App() {
  const [currentlineup, updatelineup] = useState([]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [year, setYear] = useState(process.env.SEASON_HIGH === undefined ? "2022" : process.env.SEASON_HIGH)

  var handleSubmit = (event) => {
    event.preventDefault()
    const year: string = event.target[0].value;

    setYear(year);
    setInitialLoad(false);
  }
  var getYears = () => {const years: string[] = [];
                        const low: number = process.env.SEASON_LOW === undefined ? 2000 : parseInt(process.env.SEASON_LOW);
                        const high: number = process.env.SEASON_HIGH === undefined ? 2022 : parseInt(process.env.SEASON_HIGH);
                        for (var i = high; i >= low; i--) {
                          years.push(i.toString());
                        }
                        return years}
  return (
    <div className="App">
      <Popup open={initialLoad} closeOnDocumentClick={false} onClose={() => setInitialLoad(false)} modal>
        <div className='yearPopup'>
          <h1>Select a Year</h1>
          <form onSubmit={handleSubmit}>
            <select required defaultValue={"2022"}>
              <option value="" disabled hidden>Choose year</option>
              {getYears().map((year) => <option key={year} value={year}>{year}</option>)}
            </select>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </Popup>
      <header className="App-header">
        Build a NBA Lineup
      </header>
      <div className='App-body'>
        <Wheel setopen={setOpen} currentlineup={currentlineup} updatelineup={updatelineup} season={year}></Wheel>
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
