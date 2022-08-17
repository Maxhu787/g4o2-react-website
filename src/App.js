import './App.css';
import React from 'react';

const logo = require('../src/111.jpeg')
const backgroundPic = require('../src/0000001.jpg') 
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
                <button className="navbar-btn navbar-btn-right">&#9776;</button>
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
        marginTop: "100px",
        height: "1000px"
      }}>
        <div>
          <p className="test mo">Website unfinished at the momentt</p>
          <p className="test mo">Meanwhile check out my other <a className="test or rainbow_text_animated" href="https://maxhu787.github.io/g4o2-website/" target="_blank" rel="noopener, noreferrer">WEBSITE &#x2197;</a></p>
        </div>
        <Image></Image>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" style={{
        marginBottom: "0"
      }}>
        <p>No stuff here yet</p>
      </div>
    )
  }
}

class Image extends React.Component {
  render() {
    return (
      <div className="img-container">
        <img src={backgroundPic} />
        <img src={backgroundPic} />
        <img src={backgroundPic} />
        <img src={backgroundPic} />
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
        <Footer></Footer>
      </>
    )
  }
}
export default App;