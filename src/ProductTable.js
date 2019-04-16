import React, { Component } from 'react';
import './App.css';
import settings from './properties/settings.json';

class ProductTable extends Component {

    constructor(){
        super();
        this.state = {
            products: []
        };        
        this.products_url = settings.api_url + ':' + settings.api_port + '/products';  
    }

    componentDidMount() {
        fetch(this.products_url)
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({products: data});
            console.log("state", this.state.products);
        })
    }

    render() {
        return (
        <div className="App">
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead">ProductID</div>
                    <div className="rTableHead">ProductName</div>
                    <div className="rTableHead">Quantity per unit</div>
                    <div className="rTableHead">Unit price</div>
                </div>
                {this.state.products.map(function(item, key) {             
                    return (
                        <div className="rTableRow" key = {key}>
                            <div className="rTableCell">{item.productID}</div>
                            <div className="rTableCell">{item.productName}</div>
                            <div className="rTableCell">{item.quantityPerunit}</div>
                            <div className="rTableCell">{item.unitPrice}</div>
                        </div>
                    )})}
            </div>
        </div>
        );
    }
    }

export default ProductTable;
