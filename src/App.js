import './App.css';
import React from 'react';

const logo = require('../src/111.jpeg')
class Nav extends React.Component {
  render() {
    return (
      <div style={{
        top: "0px",
        position: "fixed",
        overflow: "hidden",
        width: "100%"
      }}>
        <header className='page-header'>
          <div className="header-container">
            <div className="logo-container">
              <a className="logo-header" href="#">
                <img className="logo" alt="logo" src={logo} />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="#">Test</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Test</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div style={{
        "margin-top": "100px",
        "height": "5000px"
      }}>
        <div>
          <p class="test" id="al">Alumni Sans Pinstripe</p>
          <p class="test" id="mo">Montserrat</p>
          <p class="test" id="or">Orbitron</p>
          <p class="test" id="wo">Work Sans</p>
        </div>
        <p>Website unfinished at the moment</p>
        <p>Meanwhile check out my other <a href="https://maxhu787.github.io/g4o2-website/" target="_blank" rel="noopener, noreferrer">WEBSITE</a></p>
      </div>
    )
  }
}

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
        <Main></Main>
      </>
    )
  }
}

export default App;