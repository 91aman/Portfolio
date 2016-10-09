/**
 * Created by amanjain on 18/09/16 at 1:03 AM.
 * Description :
 */


import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';


import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import AboutIcon from 'material-ui/lib/svg-icons/social/person';
import ProjectsIcon from 'material-ui/lib/svg-icons/av/library-books.js';
import ContactIcon from 'material-ui/lib/svg-icons/communication/contacts';
import SkillsIcon from 'material-ui/lib/svg-icons/action/build';
import WorkIcon from 'material-ui/lib/svg-icons/places/business-center';

const SECTION_DETAILS_MAP = {
    intro: {
        key: 'intro',
        label: 'Home',
        icon: HomeIcon,
        component: Intro
    },
    about: {
        key: 'about',
        label: 'About Me',
        icon: AboutIcon,
        component: About
    },
    projects: {
        key: 'projects',
        label: 'Projects',
        icon: ProjectsIcon,
        component: Projects
    },
    experience: {
        key: 'experience',
        label: 'Experience',
        icon: WorkIcon,
        component: Experience
    },
    skills: {
        key: 'skills',
        label: 'Skills',
        icon: SkillsIcon,
        component: Skills
    },
    contact: {
        key: 'contact',
        label: 'Get in Touch',
        icon: ContactIcon,
        component: Contact
    }
};

export default SECTION_DETAILS_MAP;

