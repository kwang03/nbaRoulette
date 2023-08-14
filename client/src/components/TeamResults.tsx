import React, { Component } from 'react';
import { TailSpin } from  'react-loader-spinner'

const fetch = require('node-fetch');

interface TeamProps {
    abbrev: string
    segments : string[]
    logos: string[]
    fullName: string[]
    handlesubmit:Function
}

interface TeamState {
    winner: string
    logoURL: string
    players: string[]
    loading: boolean
}


export class TeamResults extends React.Component<TeamProps>{
    state: TeamState

    constructor(props: TeamProps) {
        super(props);

        const index = this.props.segments.findIndex((element) => element === props.abbrev);
        this.state = {
            winner: this.props.fullName[index],
            logoURL: this.props.logos[index],
            players: [],
            loading: false
        }

        this.updateTeamInfo(props.abbrev).then((list) => {this.setState({players: list})});
    }

    async fetchData(team: string) {
      const team_id = await this.getTeamId(team);
      const url = 'http://localhost:4000/api/players?' + new URLSearchParams({
        team: team_id.toString(),
        season: process.env.SEASON === undefined ? '2022' : process.env.SEASON
      });
      
      try {
        const response = await fetch(url);
        const result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      }
    }

    async updateTeamInfo(team: string): Promise<string[]> {
        const playerslist: string[] = []
        try {
            this.setState({loading: true});
            await this.fetchData(team).then((value) => {
            for (const index in value["response"]) {
                const playerInfo = value["response"][index];
    
                const firstname = playerInfo["firstname"];
                const lastname = playerInfo["lastname"];
    
                playerslist.push(firstname + " " + lastname);
            }
          });
        } catch (error) {
          console.log(error)
        } finally {
          this.setState({loading: false});
        }
        return playerslist;
    }

    async getTeamId(code: string): Promise<number> {
      const url = 'http://localhost:4000/api/team?' + new URLSearchParams({
        code: code
      });
      
      try {
        const response = await fetch(url);
        const result = await response.json();
        const id = result["response"][0]["id"];
        return id;
      } catch (error) {
        console.error(error);
        return -1;
      }
    }

    componentDidUpdate(prevProps: Readonly<TeamProps>): void {
        if (prevProps.abbrev !== this.props.abbrev) {
            const index = this.props.segments.findIndex((element) => element === this.props.abbrev);
            this.setState({winner: this.props.fullName[index], logoURL: this.props.logos[index]});

            this.updateTeamInfo(this.props.abbrev).then((list) => {this.setState({players: list})});
        }
    }

    handlesubmit(event) {
      this.props.handlesubmit(event);
    }

    render(): React.ReactNode {
        const positions: string[] = ["PG", "SG", "SF", "PF", "C"];
        return <div className='results'>
            <h2 className='chosen'>Chosen Team: {this.state.winner}</h2>
            <img className='logo' src={this.state.logoURL.toString()} alt={this.state.winner + " logo"}></img>
           
            <div className='player-selection'>
              {this.state.loading && <TailSpin
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />}
              <form className='form' onSubmit={this.handlesubmit.bind(this)}>
                <select required defaultValue={""}>
                  <option value="" disabled hidden>Choose player</option>
                  {this.state.players.map((player) => <option key={player} value={player}>{player}</option>)}
                </select>
                <select required defaultValue={""}>
                  <option value="" disabled hidden>Choose position</option>
                  {positions.map((position) => <option key={position} value={position}>{position}</option>)}
                </select>
                <input type="submit" value="Submit"/>
              </form>
            </div>
            
        </div>
    }
}

export default TeamResults