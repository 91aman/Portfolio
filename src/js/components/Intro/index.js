/**
 * Created by amanjain on 18/09/16 at 1:06 AM.
 * Description :
 */


import React, {Component, PropTypes} from 'react';
import IntroBackgroundSvg from "../../../svg/intro-background.svg";
import Styles from './style.scss';
import Sections from '../../constants/sections';

class Intro extends Component {

    render() {
        const {onSectionClick} = this.props;
        return (
            <section className="h-full">
                <div className="intro-background">
                    <IntroBackgroundSvg/>
                </div>
                <div className="intro-content">
                    <div className="intro-image-cont anim-delay-1 fade-in">
                        <img className="intro-image" src="src/img/introImg2.png"/>
                    </div>
                    <div className="intro-title anim-delay-3 fade-in">AMAN JAIN</div>
                    <hr className="intro-line-seperator anim-delay-5 fade-in"/>
                    <ul className="intro-list anim-delay-7 fade-in">
                        <li className="intro-list-item">
                            CS &nbsp;
                            <a className="link" href="http://www.daiict.ac.in/" target="_blank">@daiict</a></li>
                        <li className="intro-list-item">·</li>
                        <li className="intro-list-item">
                            Front-end developer &nbsp;
                            <a className="link" href="https://www.sprinklr.com/" target="_blank">@sprinklr</a></li>
                    </ul>
                    <btn className="intro-btn anim-delay-9 fade-in" onClick={()=>onSectionClick(Sections['about'].key)}>
                        KNOW MORE
                    </btn>
                </div>
            </section>
        );
    }
}

export default Intro;
