import React, {PureComponent} from 'react'
import Item from './Item'

class Catalog extends PureComponent{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    addItemToCart=(item)=>{
        console.log(item)
        this.props.addItemToCart(item)
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    render(){
        console.log('rendering catalog')
        return(
            <div>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} addItemToCart={this.addItemToCart} isCart={false}/>
                    })
                }
            </div>
        )
    }
}

export default Catalog;