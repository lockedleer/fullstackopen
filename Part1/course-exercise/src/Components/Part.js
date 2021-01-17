import React, { Component } from 'react';

class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.part.name,
            exercise: props.part.exercise
        };
    }

    render() {
        return <>
            <p>{this.state.name} {this.state.exercise}</p>
        </>
    }
}

export default Part;