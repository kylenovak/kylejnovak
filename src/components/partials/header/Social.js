import React, { Component } from 'react';
import './styles/social.css';

class Social extends Component {
  constructor(props) {
    super(props);

    this.linkedinButtonText = 'Connect with Kyle';
    this.twitterButtonText = 'Follow Kyle';

    this.linkedinURL = 'https://www.linkedin.com/in/KyleJosephNovak';
    this.twitterURL = 'https://www.twitter.com/KyleJosephNovak';
  }

  render() {
    return (
      <ul id="social">
        <li>
          <a href={this.linkedinURL} target="_blank" rel="noopener noreferrer">
            <button className="Linkedin" title="Connect with me on Linkedin">
              <i className="fab fa-linkedin"></i> {this.linkedinButtonText}
            </button>
          </a>
        </li>
        <li>
          <a href={this.twitterURL} target="_blank" rel="noopener noreferrer">
            <button className="Twitter" title="Follow me on Twitter">
              <i className="fab fa-twitter-square"></i> {this.twitterButtonText}
            </button>
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;