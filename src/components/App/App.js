import React, { Component } from 'react';
import axios from 'axios';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Gacrux', diameter: 117 },
        { name: 'Hadar', diameter: 13 },
        { name: 'Fomalhaut', diameter: 2 },
      ],
      newStar: {
        name: '',
        diameter: '',
      },
      planetList: [],
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name: '',
        diameter: '',
      }
    });
  }

  getPlanets = events => {
    axios({
      method: 'GET',
      url: 'https://swapi.co/api/planets/?format=json'

    })
      .then(response => {
        console.log('response', response.data);
        console.log('planetList', this.state.planetList);
        this.setState({
          starList: [...this.state.starList],
          newStar: { ...this.state.newStar },
          planetList: [response.data.results],
        })

        let count = response.data.count
        let page = 1;
        for (let i = 0; i <= count; i += 10) {
          let url = `https://swapi.co/api/planets/?page=${page}&format=json`;
          axios({
            method: 'GET',
            url: url,
          })
            .then(response => {
              console.log('response', response.data);
              console.log('planetList', this.state.planetList);
              this.setState({
                starList: [...this.state.starList],
                newStar: { ...this.state.newStar },
                planetList: [...this.state.planetList, ...response.data.results],
              })
            })
            .catch(error => {
              console.log('error', error);
            })
          page++;
        }
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  componentDidMount() {
    this.getPlanets();
  }

  render() {
    return (
      <div>
        <Introduction />
        <NewStar newStar={this.state.newStar} />

        <p>
          The first item in the array is: {this.state.starList[0].name}
        </p>


        <NewStarForm newStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmitChild={this.handleSubmit} />
        <p>The Star List</p>
        <StarList starList={this.state.starList} />
        <p>The Planet List</p>
        <PlanetList planetList={this.state.planetList} />

        {/* <p>
          {JSON.stringify(this.state.newStar)}
        </p> */}
      </div>
    );
  }
}

export default App;