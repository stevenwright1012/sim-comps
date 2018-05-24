import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getDoggies} from './ducks/reducer';
import Card from './Card'

class App extends Component {
  constructor(){
    super();

    this.state ={
      pups: []
    }
  }
  componentDidMount(){
    this.props.getDoggies();
  }
  render() {
    let list =  this.props.doggies.map((item, i) => {
      let {id, name, price, img_url, energy, legs} = item
      return <Card key={i} 
      id={id}
      name={name}
      price={price}
      img_url={img_url}
      energy={energy}
      legs={legs}
      />
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="products" >
          {list}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    doggies: state.doggies
  }
}

export default connect(mapStateToProps, {getDoggies})(App);
