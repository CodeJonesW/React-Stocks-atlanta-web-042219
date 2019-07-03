import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(data => this.setState({stocks: data}))
  }

  buyStock = (stockInfo) => {
    this.setState({portfolio: [...this.state.portfolio, stockInfo]})
  }

  sellStock = (stockInfo) => {
    let newPortfolio = this.state.portfolio.filter(stock => stock.id !== stockInfo.id)
    console.log(newPortfolio)
    this.setState({
      ...this.state,
      portfolio: newPortfolio
    })
  }

  handleChange = (e) => {
    
    let filteredStocks = this.state.stocks.filter(stock => stock.type === e.target.value)
    this.setState({
      ...this.state,
      stocks: filteredStocks
    })
  }

  sortBy = (e) => {
    console.log(e.target.value)
  }

  
  render() {
    return (
      <div>
        <Header/>
        <MainContainer sortBy={this.sortBy} handleChange={this.handleChange}sellStock={this.sellStock} portfolio={this.state.portfolio} buyStock={this.buyStock} stocks={this.state.stocks}/>
      </div>
    );
  }
}

export default App;
