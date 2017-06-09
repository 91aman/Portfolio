/**
 * Created by aman on 6/9/17 at 7:45 PM.
 * Description :
 */

import React, {Component, PropTypes} from 'react';
import Styles from './minTech.scss';

class MinTech extends Component {

  render() {
    const { logo, label, url } = this.props;
    return (
      <a href={url} target="_blank">
        <div className="tech-list-item">
          <div className="icon">
            <img src={logo}/>
          </div>
          <div className="title">{label}</div>
        </div>
      </a>
    );
  }
}

export default MinTech;
