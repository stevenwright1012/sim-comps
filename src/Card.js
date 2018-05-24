import React, { Component } from 'react';
import axios from 'axios';
import {updateWishlist} from './ducks/reducer';
import {connect} from 'react-redux'

class Card extends Component{
    constructor(){
        super()

        this.state={
            qunatity: 0
        }
    }
    addToWishlist(){
        axios.post(`/api/addwish/${this.props.id}`).then(res=> {
            this.props.updateWishlist(res.data)
        })
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
                <button onClick={() => this.addToWishlist()} >Add to wish list</button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        doggies: state.doggies
    }
}


export default connect(mapStateToProps, {updateWishlist})(Card)