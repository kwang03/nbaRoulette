import React, { Component } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import TeamResults from './TeamResults';

const teams = require('../res/NBA.json');

interface WheelProps {
  updatelineup: Function
  currentlineup: string[]
  open: boolean
  setopen: Function
}

interface WheelState {
  show: boolean
  abbrev: string
}

const segments : string[] = [] 
const segColors : string[] = []
const logos: string[] = []
const fullName: string[] = []

for (let index in teams['teams']) {
  segments.push(teams['teams'][index]['abbrev']);
  segColors.push(teams['teams'][index]['colors'][0]);
  logos.push(teams['teams'][index]['imgURL'])
  fullName.push(teams['teams'][index]['name']);
}

export class Wheel extends React.Component<WheelProps>{
    state: WheelState

    constructor(props: WheelProps) {
        super(props);
        this.state = {
            show: false,
            abbrev : ""
        };
    }

    onFinished = (winner) => {
      this.setState({show:true, abbrev: winner})
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const player: string = event.target[0].value;
      const position: string = event.target[1].value;

      //  Can't select same player again
      if (this.props.currentlineup.findIndex((element) => element === player) !== -1) {
        alert("You've already chosen " + player);
        return;
      }      
      var index: number;
      switch (position) {
        case "PG":
          index = 0;
          break;
        case "SG":
          index = 1;
          break;
        case "SF":
          index = 2;
          break;
        case "PF":
          index = 3;
          break;
        case "C":
          index = 4;
          break;
        default:
          alert("Invalid position selection");
          return;
      }

      //  Can't select same position again
      if (this.props.currentlineup[index] !== undefined) {
        alert("You've already chosen a " + position);
        return;
      }

      this.props.currentlineup[index] = player;
      this.props.updatelineup([...this.props.currentlineup]);
      this.setState({show: false});

      //  Reach full roster
      if (this.props.currentlineup.length === 5 && this.props.currentlineup.findIndex((element) => element === undefined) === -1) {
        this.props.setopen(true);
      }
    }
    
    render(): React.ReactNode {
        return <div className='teamselector'>
            <WheelComponent className="wheel"
              segments={segments}
              segColors={segColors}
              onFinished={(winner) => this.onFinished(winner)}
              primaryColor='white'
              contrastColor='white'
              buttonText='Spin'
              isOnlyOnce={false}
              size={290}
              upDuration={50}
              downDuration={150}
              fontFamily='Times'
            />
            {this.state.show && 
            <TeamResults handlesubmit={this.handleSubmit} abbrev={this.state.abbrev} segments={segments} logos={logos} fullName={fullName}></TeamResults>}
          </div>
      
    }
}

export default Wheel;