import React, {Component} from 'react';
import logo from './logo.svg';
import CoffeeForm from './CoffeeForm';
import OrderList from './OrderList';
class CoffeeRun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders')
        .then(r => r.json())
        .then(coffeeArray => {
          console.table(Object.values(coffeeArray))
          this.setState({
            orders: Object.values(coffeeArray)
          })
        })
    }

    render() {
        if (this.state.orders.length === 0) {
          return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Waiting...for...coffee...
            </p>
          </header>
          );          
        } else {
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

    }

    // shouldComponentUpdate() {
    //     // This is to optimize your app if each update/re-render
    //     // does A LOT OF STUFF
    //     // return true
    //     // return false
    // }

    // componentWillUnmount() {
    //     // Clean up
    // }

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