import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';
import SkillsConstants from './Skills';
import MinTech from './MinTech';
import Styles from './style.scss';

const SKILLS_IN_A_ROW = 13;
let PARSED_SKILLS = [];

(() => {
  let iter = 0,
    rowAttr = [];

  Object.keys(SkillsConstants).map((skillKey) => {
    const skill = SkillsConstants[skillKey];

    if (!(iter % SKILLS_IN_A_ROW)) {
      rowAttr.length && PARSED_SKILLS.push(rowAttr);
      rowAttr = [];
    }
    iter++;
    rowAttr.push(skill);
  });

  rowAttr.length && PARSED_SKILLS.push(rowAttr);
})();

const MinSkillContainer = (active) => {
  return Object.keys(SkillsConstants).map((skillKey, iter) => {
    const skill = SkillsConstants[skillKey];
    return <div className={`min-skill-cont anim-delay-${iter} ${active ? 'fade-in' : 'fade-out'}`}><MinTech key={skillKey} {...skill}/></div>
  })
}

class Skills extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.active && !this.hasBeenActiveBefore) {
      this.hasBeenActiveBefore = true;
      return true;
    }
    return nextProps.screenSize !== this.props.screenSize;
  }

  render() {
    const { active, screenSize } = this.props;
    return (
      <section className="section skill-section">
        <div className="">
          <div className={`section-header ss-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>
            Skills
          </div>
          <hr className={`section-sep ss-sep anim-delay-1 ${active ? 'fade-in' : 'fade-out'}`}/>
          <div ref="ss-body" className="ss-body">
            {screenSize === 'small' ? MinSkillContainer(active) : PARSED_SKILLS.map((skillsArr, iter) => {
              return (
                <div className="somethins" key={iter} style={{
                  transform: "translateY(" + (iter * -50) + "%)"
                }}>
                  {_.map(skillsArr, (skill, iter2) => {
                    return (
                      <div
                        className={cx(`skills-cont-wrap anim-delay-${((iter * SKILLS_IN_A_ROW) + iter2)} ${active ? "fade-in" : "fade-out" }`, {
                          shift: _.contains([7, 8, 9, 10, 11, 12], iter2)
                        })}
                        key={iter2
                        }
                        data-random={Math.floor(Math.random() * (5 - 1) + 1)}>
                        <a className="skill-link" href={skill.url} target="_blank">
                          <div className="skills-cont front">
                            <div className="skill-logo">
                              <img src={skill.logo}/>
                            </div>
                            <div className="skill-label">
                              {skill.label}
                            </div>
                          </div>
                          <div className="skills-cont back">
                            <div className="skill-logo">
                              <img src={skill.logo}/>
                            </div>
                            <div className="skill-label">
                              {skill.label}
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", _.debounce(() => {
      console.log(ReactDom.findDOMNode(this.refs['ss-body']).clientWidth)
    }, 250));
  }
}

export default Skills;
