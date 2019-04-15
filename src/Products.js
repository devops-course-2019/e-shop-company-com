import React, { Component } from 'react';
import './App.css';
import ProductTable from './ProductTable';

class Products extends Component {
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h1>
                    Product available from Company.com
                    </h1>
                </header>
                <ProductTable />
            </div>    
        );
    }
}

export default Products;