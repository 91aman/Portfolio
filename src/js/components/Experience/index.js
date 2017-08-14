/**
 * Created by amanjain on 18/09/16 at 7:00 PM.
 * Description :
 */


import React, {Component, PropTypes} from 'react';
import WorkIcon from 'material-ui/lib/svg-icons/places/business-center';
import Paper from 'material-ui/lib/paper';
import castArray from 'lodash/castArray';
import Style from './style.scss';
import WorkConstants from './work';

class Experience extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.active && !this.hasBeenActiveBefore) {
      this.hasBeenActiveBefore = true;
      return true;
    }
    return false;
  }

  render() {
    const { active } = this.props;
    return (
      <section className="section work-section">
        <div className="">
          <div className={`section-header ws-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>
            Experience
          </div>
          <hr className={`section-sep ws-sep anim-delay-1 ${active ? 'fade-in' : 'fade-out'}`}/>
          <div className={`ws-body anim-delay-3 ${active ? 'fade-in' : 'fade-out'}`}>
            {_.map(WorkConstants, (work, key) => {
              return (
                <div className="work-card-container" key={key}>
                  <WorkIcon className="work-icon" style={{
                    fill: '#eee'
                  }}/>
                  <Paper className="work-card" style={{
                    backgroundColor: '#212121',
                    border: '5px solid #424242',
                    borderRadius: '5px'
                  }}>

                    <div className="work-c-name">
                      {work.position}
                    </div>
                    <div className="work-c-position">
                      <a href={work.company.url} target="_blank">{work.company.name}</a>
                    </div>
                    <ul className="work-c-desc">{castArray(work.description).map((d, iter) => <li
                      key={iter}
                      className="work-c-desc-item"
                      dangerouslySetInnerHTML={{ __html: d }}/>)}</ul>
                    <div className="work-date">{work.duration}</div>
                  </Paper>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
