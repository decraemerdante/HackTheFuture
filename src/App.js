import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cities: []
        };
}

    componentDidMount(){
        fetch('http://cunning-convoys.azurewebsites.net/api/Cities')
         .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    this.setState({cities: data});
                }

            );

    }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <ul>
          {
              this.state.cities.map(function(city, i) {
                  return <li key={i}>{city.name}</li>
              })
          }
      </ul>
      </div>


    );
  }
}

export default App;
