import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import Close from 'material-ui/lib/svg-icons/navigation/close';
import Next from 'material-ui/lib/svg-icons/navigation/chevron-right';
import Prev from 'material-ui/lib/svg-icons/navigation/chevron-left';
import Slider from 'react-slick';
import Styles from './ProjectFs.scss';
import Projects from './Project';
import Technology from '../Skills/Skills';

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'psd-slider',
    nextArrow: <Next/>,
    prevArrow: <Prev/>
};

const ProjectDetailComp = (projectDetails) => {
    const {link, imgs, techkeys} = projectDetails;

    return <section className="section psd-section">
        <div className={cx("section-header as-header fadeInUp animated" )}>{projectDetails.title}</div>
        <hr className="section-sep psd-sep"/>
        <div className="section-body psd-body">
            <div className="psdb psdb-left">
                {imgs.map((url, iter)=> {
                    return (
                        <div className="psdb-image" key={iter}>
                            <img src={url}/>
                        </div>
                    )
                })}
            </div>
            <div className="psdb psdb-right">
                <div className="desc" dangerouslySetInnerHTML={{__html : projectDetails.description}}/>
                {link && <div className="link">
                    <a target="_blank" href={link}>{link}</a>
                </div>
                }
                {techkeys && <div className="tech">
                    <ul className="tech-list">
                        {
                            techkeys.map((key) => {
                                const techDetails = Technology[key];
                                return (<div className="tech-list-item" key={key}>
                                    <div className="icon">
                                        <img src={techDetails.logo}/>
                                    </div>
                                    <div className="title">{techDetails.label}</div>
                                </div>)
                            })
                        }
                    </ul>
                </div>}
            </div>
        </div>
    </section>
};

class ProjectFs extends Component {
    render() {
        return (
            <div className="section-fs project-fs">
                <div className="fs-close" onClick={this.props.onClose}>
                    <Close style={{
                        height:'50px',
                        width : '50px'
                    }}/>
                </div>
                <Slider {...sliderSettings}>
                    {
                        Object.keys(Projects).map((projectKey) => {
                            const projectDetails = Projects[projectKey];
                            return <div key={projectKey}><ProjectDetailComp {...projectDetails}/></div>
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default ProjectFs;
