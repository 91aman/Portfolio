import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import SkillsConstants from './Skills';
import Styles from './style.scss';

const SKILLS_IN_A_ROW = 13;
let PARSED_SKILLS = [];

(() => {
    let iter = 0,
        rowAttr = [];

    Object.keys(SkillsConstants).map((skillKey)=> {
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

class Skills extends Component {
    render() {
        const {active} = this.props;
        return (
            <section className="section skill-section">
                <div className="">
                    <div className={`section-header ss-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>
                        Skills
                    </div>
                    <hr className={`section-sep ss-sep anim-delay-1 ${active ? 'fade-in' : 'fade-out'}`}/>
                    <div className="ss-body">
                        {PARSED_SKILLS.map((skillsArr, iter)=> {
                            return (
                                <div className="somethins" key={iter} style={{
                                         transform: "translateY(" + (iter * -50) + "%)"
                                    }}>
                                    {_.map(skillsArr, (skill, iter2) => {
                                        return (
                                            <div
                                                className={cx(`skills-cont-wrap anim-delay-${((iter * SKILLS_IN_A_ROW) + iter2)} ${active ? "fade-in" : "fade-out" }`,{
                                                shift: _.contains([7,8,9,10,11,12], iter2)
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
}

export default Skills;
