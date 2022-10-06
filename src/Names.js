import React, {useEffect, useState} from "react";

const names = ['Peggy', 'Elly', 'Felipe'];

class Names extends React.Component {

    constructor() {
        super()
        this.state = {
            names
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let name = names[Math.floor(Math.random() * names.length)]

        this.setState(prevState => {
            return {
                names: name
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.names}</h1>

                <button onClick={this.handleClick}>
                    Choose a team member
                </button>
            </div>
        );
    }
}

export default Names