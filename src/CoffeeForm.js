import React, {Component} from 'react';

const defaultOrder = {
    coffee: '',
    emailAddress: '',
    flavor: '',
    strength: 50,
    size: ''
};

class CoffeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...defaultOrder};
    }

    render() {
        return (
            <form onSubmit={this._doSubmit}>
                <label>
                    Coffee:
                    <input 
                        value={this.state.coffee} 
                        onChange={this._updateCoffee}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        value={this.state.emailAddress} 
                        onChange={this._updateEmail}
                    />
                </label>
                <br />
                <label>
                    Flavor:
                    <input 
                        value={this.state.flavor} 
                        onChange={this._updateFlavor}
                    />
                </label>
                <br />
                <label>
                    Strength:
                    <input 
                        value={this.state.strength} 
                        onChange={this._updateStrength}
                    />
                </label>
                <br />
                <label>
                    Size:
                    <input 
                        value={this.state.size} 
                        onChange={this._updateSize}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        );
    }

    _doSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this._resetForm();
    }

    _resetForm = () => {
        this.setState({...defaultOrder});
    }

    _updateCoffee = (e) => {
        this.setState({
            coffee: e.target.value
        });
    }
    _updateEmail = (e) => {
        this.setState({
            emailAddress: e.target.value
        });
    }
    _updateFlavor = (e) => {
        this.setState({
            flavor: e.target.value
        });
    }
    _updateSize = (e) => {
        this.setState({
            size: e.target.value
        });
    }
    _updateStrength = (e) => {
        this.setState({
            strength: e.target.value
        });
    }
}

export default CoffeeForm;