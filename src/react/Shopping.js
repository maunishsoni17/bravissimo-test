import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Shopping extends Component {
  render() {
    return (
      <table>
        <tr>
          <td><button>View Basket</button></td>
        </tr>
        <tr>
            <td id="productsTable"></td>
        </tr>
      </table>
    );
  }
}

export default Shopping;
