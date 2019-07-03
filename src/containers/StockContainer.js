import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, idx) => <Stock key={idx} sellStock={this.props.sellStock} buyStock={this.props.buyStock} stockInfo={stock}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
