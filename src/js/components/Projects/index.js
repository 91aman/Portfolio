/**
 * Created by amanjain on 18/09/16 at 8:25 PM.
 * Description :
 */


import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import Style from './style.scss';
import ProjectConstants from './Project';
import ProjectFs from './ProjectFs';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectDetails: false
        }
    }

    render() {
        const {active} = this.props,
            {projectDetails, selectedSlide} = this.state,
            ProjectKeys = Object.keys(ProjectConstants);
        return (
            <section className="section project-section">
                <div className="">
                    <div className={`section-header as-header animated ${active ? 'fadeInUp' : 'fadeOutDown'}`}>Projects
                    </div>
                    <hr className={`section-sep ps-sep anim-delay-1 ${active ? 'fade-in' : 'fade-out'}`}/>
                    <div className={`ps-body`}>
                        <div className="projects-container">
                            {ProjectKeys.map((key, iter) => {
                                const project = ProjectConstants[key];
                                return (
                                    <div
                                        key={key}
                                        className={`project-cont anim-delay-${iter + 1} ${active ? "fade-in" : "fade-out" }`}
                                        style={{
                                            "backgroundImage"  : "url(" + project.imgs[0] + ")"
                                        }}
                                        onClick={() => {this.setState({projectDetails:true, selectedSlide : iter})}}
                                    >
                                        <div className="pc-overlay"></div>
                                        <div className="pc-details">
                                            <div className="pc-corner-ribbon"
                                                 data-type={project.typeId}>{project.type}</div>
                                            <div className="pc-details-wrap">
                                                <div className="pc-title">
                                                    {project.title}
                                                </div>
                                                <div className="pc-desc">
                                                    {project.srtDescription}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                            {projectDetails &&
                            <ProjectFs
                                selectedSlide={selectedSlide}
                                onClose={() => this.setState({projectDetails: false})}
                            />
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
