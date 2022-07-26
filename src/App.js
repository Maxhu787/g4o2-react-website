import './App.css';
import React from 'react';
const logo = require('../src/111.jpeg')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "test"
    }
  }
  render() {
    return(
      <>
        <Nav></Nav>
        <p>Looking ugly at the moment</p>
        <p>Mean while check out my other <a href="https://maxhu787.github.io/g4o2-website/">website</a></p>
      </>
    )
  }
}

class Nav extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="logo-container">
              <a className="logo-header" href="about.html">
                <img className="logo" alt="logo" src={logo} />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="https://google.com">Home</a></li>
                <li><a href="https://google.com">About</a></li>
                <li><a href="https://google.com">Pricing</a></li>
                <li><a href="https://google.com">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}


export default App;
