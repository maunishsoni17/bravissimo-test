import React, { Component } from 'react';
//import serviceWorker from './serviceWorker';

var items = [
   {
      "name" : "Isla Bra",
	  "sku" : "LN332",
	  "price" : "£29"
   }
];


class Item extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.sku}</td>
        <td>{this.props.item.price}</td>
        <td><button>Add</button></td>
      </tr>);
  }
};

class ItemTable extends Component {
  render() {
    var rows = [];
    this.props.items.forEach(function(item) {
      rows.push(<Item item={item} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th><th>sku</th><th>Price</th><th>Add</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>);
  }
};

class Items extends Component {
  render() {
    return (
      <ItemTable items={items} />
    );
  }
}

export default Items;