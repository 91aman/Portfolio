/**
 * Created by amanjain on 18/09/16 at 12:58 AM.
 * Description :
 */


import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import NavMenu from './components/NavMenu';
import NavMenuBtn from './components/NavMenuBtn';
import Navigation from './components/Navigation';
import Sections from './constants/sections';
import Styles from './style.scss';


const topDetails = {},
    SectionArray = Object.keys(Sections),
    scrollToTarget = function (element, target, duration) {
        target = Math.round(target);
        duration = Math.round(duration);

        let previousTop = element.scrollTop;

        const startTime = Date.now(),
            endTime = startTime + duration,
            startTop = element.scrollTop,
            distance = target - startTop,
            smoothStep = function (start, end, point) {
                if (point <= start) {
                    return 0;
                }
                if (point >= end) {
                    return 1;
                }
                const x = (point - start) / (end - start);
                return x * x * (3 - 2 * x);
            },
            scrollFrame = function () {
                if (element.scrollTop != previousTop) {
                    return;
                }
                const now = Date.now(),
                    point = smoothStep(startTime, endTime, now),
                    frameTop = Math.round(startTop + (distance * point));

                element.scrollTop = frameTop;

                if ((now >= endTime) || (element.scrollTop === previousTop && element.scrollTop !== frameTop)) {
                    return;
                }
                previousTop = element.scrollTop;
                setTimeout(scrollFrame, 0);
            };

        setTimeout(scrollFrame, 0);
    };

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navOpen: false,
            activeSection: SectionArray[0]
        }

    };

    navigateToSelection(section) {
        scrollToTarget(ReactDom.findDOMNode(this.refs['scroll-container']), topDetails[section], 500);
    }

    render() {
        const {navOpen, activeSection} = this.state;
        return (
            <div className="h-full main-container" ref="scroll-container">
                {/*<NavMenuBtn
                 navOpen={navOpen}
                 onNavBtnClick={() => {
                 this.setState({navOpen : !navOpen})
                 }}
                 />
                 <NavMenu open={navOpen}/>*/}
                <Navigation
                    onClick={(section) => this.navigateToSelection(section)}
                    activeSection={activeSection}
                />
                {
                    SectionArray.map((sectionKey) => {
                        const SectionComponent = Sections[sectionKey].component;

                        return <SectionComponent
                            key={sectionKey}
                            ref={sectionKey}
                            active={activeSection === sectionKey}
                            onSectionClick={(section) => this.navigateToSelection(section)}
                        />
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        const refsObj = this.refs,
            scrollContainer = this.refs['scroll-container'],
            calculateDimensions = () => {
                let topHeight = 0;
                SectionArray.forEach((ref, iter) => {
                    if (!iter) {
                        topDetails[ref] = 0;
                    } else {
                        const prevSectionHeight = ReactDom.findDOMNode(refsObj[SectionArray[iter - 1]]).clientHeight;
                        topHeight += prevSectionHeight;

                        topDetails[ref] = topHeight;
                    }
                });
            };

        calculateDimensions();

        scrollContainer.addEventListener('scroll', () => {
            const scrollTop = scrollContainer.scrollTop,
                activeSection = this.state.activeSection;
            let refInView;

            Object.keys(topDetails).forEach((ref) => {
                const topFromRef = topDetails[ref] - (0.5 * window.innerHeight);

                if (scrollTop >= topFromRef) {
                    refInView = ref;
                }
            });

            if (activeSection !== refInView) {
                this.setState({activeSection: refInView});
            }
        });

        window.addEventListener("resize", _.debounce(() => {
            calculateDimensions();
        }, 250));
    }
}

export default App;
