import React, { Component } from 'react';
//import serviceWorker from './serviceWorker';

var products = [
   {
      "name" : "Isla Bra",
	  "sku" : "LN332",
	  "price" : "£29"
   },
   {
      "name" : "Nordic Rose Bra",
	  "sku" : "LN336",
	  "price" : "£30"
   }];


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
  render() {
    return (
        <ProductTable products={products} />
    );
  }
}

export default Products;