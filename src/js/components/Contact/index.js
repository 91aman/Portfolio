import React, {Component, PropTypes} from 'react';
import SOCIAL_CHANNELS from './ContactDetails'
import cx from 'classnames';

import Style from './style.scss';

class Contact extends Component {
    render() {
        const {active} = this.props;
        return (
            <section className="section contact-section">
                <div className="section-container">
                    <div className={`section-header cs-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>
                        Get in touch !
                    </div>
                    <hr className={`section-sep cs-sep anim-delay-1 ${active ? 'fade-in' : 'fade-out'}`}/>
                    <div>
                        <div className={`mailto-wrap ${active ? 'fade-in' : 'fade-out'}`}>
                            <a className="mailto" href="mailto:91aman@gmail.com?&subject=Hello">91aman@gmail.com</a>
                        </div>
                        <ul className="sc-list">
                            {
                                SOCIAL_CHANNELS.map((channel, iter) => {
                                    return (
                                        <li key={iter}
                                            className={`sc-item anim-delay-${iter} ${active ? 'fade-in' : 'fade-out'}`}>
                                            <a className="sc-link" target="_blank"
                                               href={channel.link}>{channel.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
