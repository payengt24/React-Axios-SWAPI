import React, { Component } from 'react';

class StarList extends Component {


  render() {
    return (
      <ul>
        {this.props.starList.map(star => <li key={star.name}>
          The star {star.name} is {star.diameter} million km in diameter
        </li>)}
      </ul>

    );
  }
}

export default StarList;



