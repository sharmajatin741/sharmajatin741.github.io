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
        <img src={mypic} className="mypiccss" alt="logo" />
        <p>
          Jatin Sharma
        </p>
        <div>
        <a href="https://github.com/sharmajatin741" title="Github">
        <img src={github} className="cfcss" alt="logo" />
        </a>
        <a href="mailto:sharmajatin741@gmail.com" title="Email">
        <img src={email} className="cfcss" alt="logo" />
        </a>
        <a href="https://codeforces.com/profile/sharmajatin741" title="Codeforces">
        <img src={codeforces} className="cfcss" alt="logo" />
        </a>
        <a href="https://www.linkedin.com/in/sharmajatin741/" title="Linkedin">
        <img src={linkedin} className="cfcss" alt="logo" />
        </a>
        <a href="https://www.hackerearth.com/@sharmajatin741" title="Hackerearth">
        <img src={hackerearth} className="cfcss" alt="logo" />
        </a>
        <a href="https://www.codechef.com/users/sharmajatin741" title="Codechef">
        <img src={cc} className="cfcss" alt="logo" />
        </a>
        </div>
      </header>
    </div>
    </div>
    )
  }
}

export default App;
