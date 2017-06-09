import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import Style from './style.scss';

const SOCIAL_CHANNELS = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/91aman'
    },
    // {
    //     name: 'twitter',
    //     link: 'https://twitter.com/91aman'
    // },
    {
        name: 'github',
        link: 'https://github.com/91aman'
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/91aman/'
    },
    {
        name: 'linkedin',
        link: 'https://in.linkedin.com/in/91aman'
    },
    {
        name: 'Resume',
        link:'src/pdf/Aman-Jain-Resume.pdf'
    }

];

class Contact extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.active && !this.hasBeenActiveBefore) {
      this.hasBeenActiveBefore = true;
      return true;
    }
    return false;
  }

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
