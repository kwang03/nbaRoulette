import React, { Component } from 'react';

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
}


export class TeamResults extends React.Component<TeamProps>{
    state: TeamState

    constructor(props: TeamProps) {
        super(props);

        const index = this.props.segments.findIndex((element) => element === props.abbrev);
        this.state = {
            winner: this.props.fullName[index],
            logoURL: this.props.logos[index],
            players: []
        }

        this.updateTeamInfo(props.abbrev).then((list) => {this.setState({players: list})});
    }

    async fetchData(team: string) {
        // const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';
        // const options = {
        //   method: 'GET',
        //   headers: {
        //     'X-RapidAPI-Key': '49c6138059msh78f27c3b84c094dp13883djsnf27c15f7e301',
        //     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        //   }
        // };
        
        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
        return {
            "get": "players/",
            "parameters": {
              "season": "2021",
              "team": "1"
            },
            "errors": [],
            "results": 43,
            "response": [
              {
                "id": 553,
                "firstname": "Lou",
                "lastname": "Williams",
                "birth": {
                  "date": "1986-10-27",
                  "country": "USA"
                },
                "nba": {
                  "start": 2005,
                  "pro": 16
                },
                "height": {
                  "feets": "6",
                  "inches": "2",
                  "meters": "1.88"
                },
                "weight": {
                  "pounds": "175",
                  "kilograms": "79.4"
                },
                "college": "South Gwinnett HS (GA)",
                "affiliation": "South Gwinnett HS (GA)/USA",
                "leagues": {
                  "standard": {
                    "jersey": 6,
                    "active": true,
                    "pos": "G"
                  }
                }
              },
              {
                "id": 402,
                "firstname": "Jahlil",
                "lastname": "Okafor",
                "birth": {
                  "date": null,
                  "country": null
                },
                "nba": {
                  "start": 0,
                  "pro": 0
                },
                "height": {
                  "feets": null,
                  "inches": null,
                  "meters": null
                },
                "weight": {
                  "pounds": null,
                  "kilograms": null
                },
                "college": null,
                "affiliation": null,
                "leagues": {
                  "standard": {
                    "jersey": 14,
                    "active": false,
                    "pos": null
                  }
                }
              },
              {
                "id": 564,
                "firstname": "Delon",
                "lastname": "Wright",
                "birth": {
                  "date": "1992-04-26",
                  "country": "USA"
                },
                "nba": {
                  "start": 2015,
                  "pro": 6
                },
                "height": {
                  "feets": "6",
                  "inches": "5",
                  "meters": "1.96"
                },
                "weight": {
                  "pounds": "185",
                  "kilograms": "83.9"
                },
                "college": "Utah",
                "affiliation": "Utah/USA",
                "leagues": {
                  "standard": {
                    "jersey": null,
                    "active": true,
                    "pos": "G"
                  }
                }
              },
              {
                "id": 588,
                "firstname": "Cat",
                "lastname": "Barber",
                "birth": {
                  "date": "1994-07-25",
                  "country": "USA"
                },
                "nba": {
                  "start": 2021,
                  "pro": 0
                },
                "height": {
                  "feets": null,
                  "inches": null,
                  "meters": null
                },
                "weight": {
                  "pounds": null,
                  "kilograms": null
                },
                "college": "North Carolina State",
                "affiliation": "North Carolina State/USA",
                "leagues": {
                  "standard": {
                    "jersey": 5,
                    "active": false,
                    "pos": null
                  }
                }
              },
              {
                "id": 329,
                "firstname": "Timothe",
                "lastname": "Luwawu-Cabarrot",
                "birth": {
                  "date": "1995-05-09",
                  "country": "France"
                },
                "nba": {
                  "start": 2016,
                  "pro": 5
                },
                "height": {
                  "feets": "6",
                  "inches": "7",
                  "meters": "2.01"
                },
                "weight": {
                  "pounds": "215",
                  "kilograms": "97.5"
                },
                "college": "Mega Basket",
                "affiliation": "Mega Basket/France",
                "leagues": {
                  "standard": {
                    "jersey": 7,
                    "active": true,
                    "pos": "G-F"
                  },
                  "africa": {
                    "jersey": null,
                    "active": true,
                    "pos": "G-F"
                  }
                }
              },
              {
                "id": 761,
                "firstname": "John",
                "lastname": "Collins",
                "birth": {
                  "date": "1997-09-23",
                  "country": "USA"
                },
                "nba": {
                  "start": 2017,
                  "pro": 4
                },
                "height": {
                  "feets": "6",
                  "inches": "9",
                  "meters": "2.06"
                },
                "weight": {
                  "pounds": "226",
                  "kilograms": "102.5"
                },
                "college": "Wake Forest",
                "affiliation": "Wake Forest/USA",
                "leagues": {
                  "standard": {
                    "jersey": 20,
                    "active": true,
                    "pos": "F-C"
                  },
                  "africa": {
                    "jersey": 20,
                    "active": true,
                    "pos": "F-C"
                  },
                  "vegas": {
                    "jersey": 20,
                    "active": true,
                    "pos": "F-C"
                  },
                  "utah": {
                    "jersey": 20,
                    "active": true,
                    "pos": "F-C"
                  }
                }
              },
              {
                "id": 738,
                "firstname": "Jordan",
                "lastname": "Bell",
                "birth": {
                  "date": "1995-01-07",
                  "country": "USA"
                },
                "nba": {
                  "start": 2017,
                  "pro": 4
                },
                "height": {
                  "feets": "6",
                  "inches": "7",
                  "meters": "2.01"
                },
                "weight": {
                  "pounds": "216",
                  "kilograms": "98.0"
                },
                "college": "Oregon",
                "affiliation": "Oregon/USA",
                "leagues": {
                  "standard": {
                    "jersey": 20,
                    "active": true,
                    "pos": "F"
                  },
                  "sacramento": {
                    "jersey": 2,
                    "active": true,
                    "pos": "F"
                  },
                  "vegas": {
                    "jersey": 24,
                    "active": true,
                    "pos": "F"
                  }
                }
              },
              {
                "id": 802,
                "firstname": "Wes",
                "lastname": "Iwundu",
                "birth": {
                  "date": "1994-12-20",
                  "country": "USA"
                },
                "nba": {
                  "start": 2017,
                  "pro": 0
                },
                "height": {
                  "feets": null,
                  "inches": null,
                  "meters": null
                },
                "weight": {
                  "pounds": null,
                  "kilograms": null
                },
                "college": "Kansas State",
                "affiliation": "Kansas State/USA",
                "leagues": {
                  "standard": {
                    "jersey": 24,
                    "active": false,
                    "pos": null
                  },
                  "vegas": {
                    "jersey": 25,
                    "active": true,
                    "pos": "F"
                  }
                }
              },
              {
                "id": 1011,
                "firstname": "Cameron",
                "lastname": "Oliver",
                "birth": {
                  "date": "1996-07-11",
                  "country": "USA"
                },
                "nba": {
                  "start": 2020,
                  "pro": 1
                },
                "height": {
                  "feets": "6",
                  "inches": "8",
                  "meters": "2.03"
                },
                "weight": {
                  "pounds": "239",
                  "kilograms": "108.4"
                },
                "college": "Nevada",
                "affiliation": "Nevada/USA",
                "leagues": {
                  "standard": {
                    "jersey": 21,
                    "active": true,
                    "pos": "F"
                  },
                  "vegas": {
                    "jersey": 27,
                    "active": true,
                    "pos": "F"
                  },
                  "sacramento": {
                    "jersey": 27,
                    "active": true,
                    "pos": "F"
                  }
                }
              },
              {
                "id": 980,
                "firstname": "Kevin",
                "lastname": "Huerter",
                "birth": {
                  "date": "1998-08-27",
                  "country": "USA"
                },
                "nba": {
                  "start": 2018,
                  "pro": 3
                },
                "height": {
                  "feets": "6",
                  "inches": "7",
                  "meters": "2.01"
                },
                "weight": {
                  "pounds": "198",
                  "kilograms": "89.8"
                },
                "college": "Maryland",
                "affiliation": "Maryland/USA",
                "leagues": {
                  "standard": {
                    "jersey": 3,
                    "active": true,
                    "pos": "G-F"
                  },
                  "vegas": {
                    "jersey": 1,
                    "active": true,
                    "pos": "G"
                  },
                  "utah": {
                    "jersey": 1,
                    "active": true,
                    "pos": "G"
                  }
                }
              },
            ]
          }
    }

    async updateTeamInfo(team: string): Promise<string[]> {
        const playerslist: string[] = []
        this.fetchData(team).then((value) => {
            for (const index in value["response"]) {
                const playerInfo = value["response"][index];
    
                const firstname = playerInfo["firstname"];
                const lastname = playerInfo["lastname"];
    
                playerslist.push(firstname + " " + lastname);
            }
        });

        return playerslist;
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
           
            <form onSubmit={this.handlesubmit.bind(this)}>
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
    }
}

export default TeamResults