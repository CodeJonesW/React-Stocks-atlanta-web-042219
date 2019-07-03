import React from 'react'

const Stock = (props) => (
  <div >

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stockInfo.name
          }</h5>
        <p className="card-text">{
            props.stockInfo.price
          }</p>
      </div>
      <button onClick={() => props.buyStock(props.stockInfo)}>Buy stock!</button>
      <button onClick={() => props.sellStock(props.stockInfo)}>Sell Stock</button>
    </div>


  </div>
);

export default Stock
