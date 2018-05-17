import React, { Component } from 'react';

class PlanetList extends Component {


  render() {
    return (
      <ol>
        {this.props.planetList.map(planet => <li key={planet.name}>
          The planet {planet.name} is {planet.diameter} million km in diameter
        </li>)}
      </ol>

    );
  }
}

export default PlanetList;



