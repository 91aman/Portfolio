/**
 * Created by amanjain on 18/09/16 at 1:01 AM.
 * Description :
 */


import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import cx from 'classnames';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import Sections from '../../constants/sections';
import Styles from './style.scss';

class NavMenu extends Component {
    render() {
        const {onClick} = this.props,
             ListItemEl = Object.keys(Sections).map((key) => {
            const section = Sections[key];

            return <ListItem
                primaryText={section.label}
                leftIcon={<section.icon style={{
                fill: "#fff",
                padding: '16px',
                margin:'0'
            }} />}
                style={{
                color: '#fff',
                fontSize: '24px',
                lineHeight: '24px',
                margin: '10px'
            }}
                key={key}
                onClick={() => {onClick(key)}}
            />
        });
        return (

            <div className={cx("overlay", {
                    open: this.props.open
                }
            )}>
                <nav className="overlay-menu">
                    <List style={{
                            background: '#2E7D32',
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                        {ListItemEl}
                    </List>
                </nav>
            </div>
        );
    }
}

NavMenu.propTypes = {
    open: PropTypes.bool
};

NavMenu.defaultProps = {
    open: false
};

export default NavMenu;
