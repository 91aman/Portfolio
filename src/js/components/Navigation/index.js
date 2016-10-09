import React, {Component} from 'react';
import cx from 'classnames';

import Sections from '../../constants/sections';
import Styles from './style.scss';

class Navigation extends Component {
    render() {
        return (
            <ul className="navigation-list">
                {
                    Object.keys(Sections).map((key, iter) => {

                        const {icon : Icon, label} = Sections[key];

                        return (
                            <li
                                key={key}
                                data-balloon={label}
                                data-balloon-pos="left"
                                onClick={() => {this.props.onClick(key)}}>
                                <div className={cx(`navigation-list-item fade-in anim-delay-${iter}`, {
                                    active : this.props.activeSection === key
                                })}>
                                    <Icon className="navigation-list-item-icon" style={{
                                    height: '8px',
                                    margin: '1px',
                                    width: '8px'
                                }}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Navigation;
