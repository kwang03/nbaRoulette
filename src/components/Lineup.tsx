import React, { Component } from 'react';

interface LineupProps {
    lineup: Array<string>
}

interface LineupState {
    lineup: Array<string>
}

export class Lineup extends React.Component<LineupProps>{
    state: LineupState

    constructor(props: LineupProps) {
        super(props);
        this.state = {
            lineup: props.lineup
        };
    }

    componentDidUpdate(prevProps: Readonly<LineupProps>): void {
        if (prevProps.lineup !== this.props.lineup) {
            this.setState({lineup: this.props.lineup});
        }
    }
    
    render(): React.ReactNode {
        const positions = ["PG", "SG", "SF", "PF", "C"]
        
        return (
            <table className='lineup-table'>
                <thead>
                    Your Lineup
                </thead>
                <tbody>
                        {positions.map((position, index) => 
                        <tr key={index}>
                            <td>{position}</td>
                            <td>{this.state.lineup[index]}</td>
                        </tr>)}
                </tbody>

            </table>
        )
    }
}

export default Lineup;