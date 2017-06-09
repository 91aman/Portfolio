/**
 * Created by aman on 4/26/17 at 8:29 PM.
 * Description :
 */

import _ from 'lodash';
import SKILLS from '../Skills/Skills';
import CONTACT from '../Contact/ContactDetails';
import PROJECTS from '../Projects/Project';

const PAGES = {
    HOME: {
        key: 'HOME',
        label: 'Home',
        shortDesc: 'Navigate to Home page.',
        details: ['This is home details', 'This is freaking awesome']
    },
    ABOUT_ME: {
        key: 'ABOUT_ME',
        label: 'About',
        shortDesc: 'Know More about me.',
        details: ['This is about me details']
    },
    EXPERIENCE: {
        key: 'EXPERIENCE',
        label: 'Experience',
        shortDesc: 'Know about my experience.',
        details: ['This is experience details']
    },
    EDUCATION: {
        key: 'EDUCATION',
        label: 'Education',
        shortDesc: 'Know about my education.',
        details: ['This is education details']
    },
    PROJECTS: {
        key: 'PROJECTS',
        label: 'Projects',
        shortDesc: 'Know about my projects.',
        details: [
            'I have made following *Projects* :',
            
        ]
    },
    CONTACT: {
        key: 'CONTACT',
        label: 'Contact',
        shortDesc: 'Know about my contact details.',
        details: [
            'I can be *contacted* at these place :',
            `[^mailto:91aman@gmail.com?&subject=Hello](*91aman@gmail.com*)`,
            ...CONTACT.map(({name, link}) => `[^${link}](*${name}*)`)
        ]
    },
    SKILLS: {
        key: 'SKILLS',
        label: 'Skills',
        shortDesc: 'Know about my skills.',
        details: [
            'I have following *Skills* :',
            ..._.map(SKILLS, ({label, url}) => `[^${url}](*${label}*)`)
        ]
    },
};

export const PAGE_LABEL_VS_KEY = (() => {
    const retObj = {};
    _.forEach(PAGES, ({label, key}) => retObj[label] = key);
    return retObj;
})();


export default PAGES;