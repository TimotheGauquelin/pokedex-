import React, { Component } from 'react';

//Ant & Scss
import 'antd/dist/antd.css';
import './stylesheets/App.scss';

import { Col, Button, Row } from 'antd';
import { Input } from 'antd';


class App extends Component {

  state = {

  }

  render() {

    const { Search } = Input;

    const onSearch = value => console.log(value);

    return (
      <Row>
        <Col className="App">
          <h1>Que recherchez-vous ?</h1>
          <h2>Un pokemon, une attaque, un lieu ?</h2>
          <Search
            placeholder="Que recherchez-vous ?"
            allowClear
            enterButton="Entrer"
            size="large"
            onSearch={onSearch}
          />
          <Button size="large" className="button">Pokedex</Button>
          <Button size="large" disabled className="button">Attaque</Button>
          <Button size="large" disabled className="button">Compétence</Button>
        </Col>



      </Row>
    )
  }
}

export default App;
