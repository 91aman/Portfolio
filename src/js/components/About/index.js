import React, {Component, PropTypes} from 'react';
import {partial} from 'lodash';
import Sections from '../../constants/sections';
import cx from 'classnames';
import ScreenSizes from '../../constants/screenSizes';

import Style from './style.scss';

class About extends Component {
    render() {
        const {active, onSectionClick,screenSize } = this.props;
        return (
            <section className="section about-section">
                <div className={cx({"section-container" : true || screenSize === ScreenSizes.LARGE})}>
                    <div className={`section-header as-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>
                        Hello World !
                    </div>
                    <hr className={`section-sep as-sep anim-delay-2 ${active ? "fade-in" : "fade-out" }`}/>
                    <div className={`as-body anim-delay-4 ${active ? "fade-in" : "fade-out" }`}>
                        I am Aman, a passionate front-end developer and a Design Enthusiast from Gurgaon, India.
                        I have a Bachelor’s Degree in Computer Sciences from <a href="http://www.daiict.ac.in/"
                                                                                target="_blank">Dhirubhai Ambani
                        Institute
                        of information
                        and Communication Technology</a>, and I am working with <a href="https://www.sprinklr.com/"
                                                                                   target="_blank">Sprinklr</a> to
                        create a
                        enterprise software which helps brands to truly know their customers.

                        I enjoy turning complex problems into most maintainable, reusable components to create
                        pixel-perfect interfaces and intuitive user experiences across all devices.
                        <p> Keep scrolling down to know my <a
                            onClick={partial(onSectionClick, Sections["projects"].key)}>Projects</a>,
                            my <a onClick={partial(onSectionClick, Sections["experience"].key)}>Experience</a>,
                            my <a onClick={partial(onSectionClick, Sections["skills"].key)}>Skills</a> and
                            to <a onClick={partial(onSectionClick, Sections["contact"].key)}>Get in touch</a>.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
