import React, { Component } from 'react';

const listProductsURL = "http://localhost:8080/listProducts";
function Product(props) {
    return  <tr>
        <td>{props.product.name}</td>
        <td>{props.product.sku}</td>
        <td>{props.product.price}</td>
        <td><button>Add</button></td>
      </tr>;
};

function ProductTable(props) {
    var rows = [];
    props.products.forEach(function(poduct) {
      rows.push(<Product product={poduct} />);
    });
    return <table>
        <thead>
          <tr>
            <th>Name</th><th>sku</th><th>Price</th><th>Add</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>;
};

class Products extends Component{
    constructor() {
        super();
        this.products = [];
    }
       componentDidMount() {
           fetch(listProductsURL) 
            .then(result=> {
                console.log(result.json());
                this.products = result.json();
            });
        };
  render() {
    return (
        <ProductTable products={this.products} />
    );
  }
}

export default Products;