import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getDoggies, getWishlist, updateDoggies} from './ducks/reducer';
import Card from './Card'
import axios from 'axios';
import Wish from './Wish';
import {Switch, Link} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();

    this.state ={
      input: ""
    }
  }
  componentDidMount(){
    this.props.getDoggies();
    this.props.getWishlist();
  }
  
  handleInput(e){
    this.setState({
      input: e
    })
  }
  search(){
    console.log('click');
    
    axios.get(`/api/search?dog=${this.state.input}`).then(res => {
      
      this.props.updateDoggies(res.data)
    })
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
    // console.log(this.props.doggies);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <input type="text" placeholder="Search by name" onChange={(e) => this.handleInput(e.target.value)}/>
      <button onClick={() => this.search()}>Search</button>
        <div className="products" >
          {list}
        </div>
        <Wish 
        wishlist={this.props.wishlist}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return{
    doggies: state.doggies,
    wishlist: state.wishlist,
  }
}

export default connect(mapStateToProps, {getDoggies, getWishlist, updateDoggies})(App);
