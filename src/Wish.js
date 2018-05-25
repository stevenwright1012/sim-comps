import React from 'react';
import {connect} from 'react-redux';

class Wish extends React.Component{
    constructor(){
        super()

        this.state={
            wishlistItems: []
        }
    }
    componentDidMount(){
        this.setState({
            wishlistItems: this.props.wishlist
        })
    }
    // componentDidUpdate(){
    //     this.setState({
    //         wishlistItems: this.props.wishlist
    //     })
    // }
    render(){
        console.log(this.state);
        
        let wishes = this.props.wishlist.map((item, i) => {
            const {id, qty, name, price, img_url, energy} = item
            return <div className="cart_row" >
                    <img src={img_url} alt={name}/>
                    <p>{name}</p>
                    <p>Cuteness: {(price* 100) + 1}</p>
                    <p>Energy: {energy}</p>                    
                    <p>Quantity:{qty}</p>
                    </div>
          })
        return (
            <div className="wishes" >
                <h1><u>WISHLIST</u></h1>
                {wishes}
            </div>
        )
    }
}

// function mapStateTotProps(state){
//     return{
//         wishlist: state.wishlist
//     }
// }

export default Wish;