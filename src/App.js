import './App.css';
import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
const logo = require('../src/111.jpeg')

class Nav extends React.Component {
  render() {
    const g4o2 = 'https://maxhu787.github.io/g4o2-website/index.html';
    /*const openLink = (url) => {
      window.open(url, "_blank", "noopener, noreferrer")
    }*/
    return (
      <>
        <header className='page-header'>
          <div className="header-container">
            <div className="logo-container">
              <a className="logo-header" href="about.html">
                <img className="logo" alt="logo" src={logo} />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href={g4o2} target="_blank" rel="noopener, noreferrer">Temp</a></li>
                <li><a href={g4o2} target="_blank" rel="noopener, noreferrer">Temp</a></li>
                <li><a href={g4o2} target="_blank" rel="noopener, noreferrer">Temp</a></li>
                <li><a href={g4o2} target="_blank" rel="noopener, noreferrer">Temp</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
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
        <p>Website looking ugly at the moment</p>
        <p>Meanwhile check out my other <a href="https://maxhu787.github.io/g4o2-website/" target="_blank" rel="noopener, noreferrer">WEBSITE</a></p>
      </>
    )
  }
}



export default App;
