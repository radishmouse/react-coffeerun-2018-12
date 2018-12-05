import React, {Component} from 'react';

import CoffeeForm from './CoffeeForm';
import OrderList from './OrderList';
class CoffeeRun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    render() {
        return (
            <div>
                <h1>CoffeeRun</h1>
                <CoffeeForm 
                    handleSubmit={this._addOrder}
                />
                <OrderList
                    orders={this.state.orders}
                />
            </div>
        );
    }

    _addOrder = (order) => {
        this.setState({
            orders: [
                ...this.state.orders,
                order
            ]
        });
    }

}

export default CoffeeRun;