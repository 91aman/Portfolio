/**
 * Created by amanjain on 18/09/16 at 1:03 AM.
 * Description :
 */

import React, {Component, PropTypes} from 'react';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import cx from 'classnames';

import Styles from './style.scss';

class NavMenuBtn extends Component {

    render() {
        const props = this.props;
        return (
            <div
                className={cx("nav-btn", {
                    active: props.navOpen
                })}
                onClick={props.onNavBtnClick}
            >
                <FloatingActionButton backgroundColor={'#4CAF50'}>
                    <div className="nav-btn-icn">
                        <span className="top btn-line"/>
                        <span className="middle btn-line"/>
                        <span className="bottom btn-line"/>
                    </div>
                </FloatingActionButton>
            </div>
        );
    }
}

NavMenuBtn.propTypes = {
    navOpen: PropTypes.bool,
    onNavBtnClick: PropTypes.func
};

NavMenuBtn.defaultProps = {
    navOpen: false,
    onNavBtnClick: () => {
    }
};

export default NavMenuBtn;
