import React, { Component } from 'react';

const listItemsURL = "http://localhost:8080/listBagItems";

function Item(props) {
    return  <tr>
        <td>{props.item.name}</td>
        <td>{props.item.sku}</td>
        <td>{props.item.price}</td>
        <td><button>Add</button></td>
      </tr>;
};

function ItemTable(props) {
    var rows = [];
    props.items.forEach(function(poduct) {
      rows.push(<Item item={poduct} />);
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

class Items extends Component{
    constructor() {
        super();
        this.items = [];
    }
       componentDidMount() {
           fetch(listItemURL) 
            .then(result=> {
                this.items = result.json();
            });
        };
  render() {
    return (
        <ItemTable items={this.items} />
    );
  }
}

export default Items;