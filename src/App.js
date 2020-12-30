import React, { Component } from 'react';

//Ant & Scss
import 'antd/dist/antd.css';
import './stylesheets/App.scss';

import { Col, Button } from 'antd';

class App extends Component {

  state = {

  }

  render() {
    return (
      <Col className="App">
        <h1>Que recherchez-vous ?</h1>
        <h2>Un pokemon, une attaque, un lieu ?</h2>

        <Button size="large" className="button">Pokedex</Button>
        <Button size="large" disabled className="button">Attaque</Button>
        <Button size="large" disabled className="button">Compétence</Button>
      </Col>
    )
  }
}

export default App;
