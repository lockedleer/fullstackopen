import React, { Component } from 'react';
import Part from './Part.js';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part1 : props.course.parts[0],
            part2 : props.course.parts[1],
            part3 : props.course.parts[2]
        };
    }

    render() {
        return <>
            <Part part={this.state.part1} />
            <Part part={this.state.part2} />
            <Part part={this.state.part3} />
        </>
    }
}

export default Content;