import React, {Component} from 'react';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise1 : props.course.parts[0].exercise,
            exercise2 : props.course.parts[1].exercise,
            exercise3 : props.course.parts[2].exercise
        };
    }

    render() {
        return <>
            <p>Number of exercises {this.state.exercise1 + this.state.exercise2 + this.state.exercise3}</p>
        </>
    }
}

export default Total;