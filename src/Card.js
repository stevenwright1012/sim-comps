import React, { Component } from 'react';


class Card extends Component{
    bark(){
        alert(`${this.props.name} says Woof`)
    }
    render(){
        const {name, price, img_url, energy, legs} = this.props
        return (
            <div>
                <div className="product_card" >
                <h1>{name}</h1>
                <img src={img_url} alt={name}/>
                <p>Cuteness: {(price* 100) + 1}</p>
                <p>Energy: {energy}</p>
                <p># of legs: {legs}</p>
                <button onClick={() => this.bark()} >Add to wish list</button>
            </div>
            </div>
        )
    }
}

export default Card