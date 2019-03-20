import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    removeFromCart=()=>{
        this.props.removeFromCart(this.state.item)
    }

    addItemToCart=()=>{
        this.props.addItemToCart(this.state.item)
    }

    render(){
        return(
            <div>
                <h1>{this.state.item.name}</h1>
                <p>Price: {this.state.item.price}</p>
                {
                    (this.state.isCart) ? 
                    (<button onClick={this.removeFromCart}>Remove</button>) : 
                    (<button onClick={this.addItemToCart}>Add to cart</button>)
                }
                
            </div>
        )
    }
}

export default Item;