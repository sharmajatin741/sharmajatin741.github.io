import logo from './logo.svg';
import './App.css';
import mypic from './images/mypic.jpg'
import React, { Component } from 'react'
import codeforces from './images/codeforces.png';
import email from './images/email.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import resume from './images/resume.png';
import hackerearth from './images/hackerearth.png'
import cc from './images/cc.png'
class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
      <header className="App-header">
        <img src={mypic} className="mypiccss" alt="logo" border="1" />
        <div className="nameCss">
          Jatin Sharma
        </div>
        <div className="appsHeadCss">
        <div>
        <a href="https://github.com/sharmajatin741" title="Github" style={{textDecoration: "none"}}>
        <img src={github} className="cfcss" alt="logo" />
        <div className="gitCss" >
          github
        </div>
        </a>
        </div>
        <div>
        <a href="mailto:sharmajatin741@gmail.com" title="Email" style={{textDecoration: "none"}}>
        <img src={email} className="cfcss" alt="logo" />
        <div className="emailCss">
          email
        </div>
        </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/sharmajatin741/" title="Linkedin" style={{textDecoration: "none"}}>
        <img src={linkedin} className="cfcss" alt="logo" />
        <div className="linkedinCss">
          linkedin
        </div>
        </a>
        </div>
        <div>
        <a href="https://codeforces.com/profile/sharmajatin741" title="Codeforces" style={{textDecoration: "none"}}>
        <img src={codeforces} className="cfcss" alt="logo" />
        <div className="cfCss">
          codeforces
        </div>
        </a>
        </div>
        {/* <div>
        <a href="https://www.hackerearth.com/@sharmajatin741" title="Hackerearth">
        <img src={hackerearth} className="cfcss" alt="logo" />
        </a>
        <div className="HECss">
          Hackerearth
        </div>
        </div> */}
        <div>
        <a href="https://www.codechef.com/users/sharmajatin741" title="Codechef" style={{textDecoration: "none"}}>
        <img src={cc} className="cfcss" alt="logo" />
        <div className="CCCss">
          codechef
        </div>
        </a>
        </div>
        </div>
      {/* <footer className="copyFootCss">&copy; 2020 Jatin Sharma.</footer> */}
      </header>
      {/* <footer className="copyFootCss">&copy; 2020 Jatin Sharma.</footer> */}
    </div>
    </div>
    )
  }
}

export default App;
