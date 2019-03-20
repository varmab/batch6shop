import React, {Component} from 'react'
import Item from './Item';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            items:newProps.items
        })
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.props.removeFromCart(item)
    }

    render(){
        return(
            <div>
                <h1>Cart</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} removeFromCart={this.removeFromCart} isCart={true}/>
                    })
                }
            </div>
        )
    }
}

export default Cart;