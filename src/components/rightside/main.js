import React, { Component } from 'react';

//CSS
import './main.css';

import About from './about/main';
import Work from './work/main';
import Freelance from './freelance/main';
import Awards from './awards/main';
import University from './university/university';

export default class RightSide extends Component {
  render() {
    return (
      <div className="container-main fadeInRight animated">
        <About/>
        <Work/>
        <Freelance/>
        <Awards/>
        <University/>
      </div>
    );
  }
}
