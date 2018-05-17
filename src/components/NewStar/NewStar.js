import React, { Component } from 'react';

class NewStar extends Component {


    render() {
        return (
            //props pass the children to the new components
            <p>
                New star is {this.props.newStar.name} and has a diameter of {this.props.newStar.diameter}
            </p>

        );
    }
}

export default NewStar;