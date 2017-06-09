/**
 * Created by aman on 4/24/17 at 4:30 PM.
 * Description :
 */

import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import _ from 'lodash';
import SUPPORTED_COMMANDS from './supportedCommands';
import SUPPORTED_ALIASIS from './supportedAliasis';
import PAGES, {PAGE_LABEL_VS_KEY} from './pages';
import textUtils from './textUtils';
import Styles from './styles.scss';

const previousCommands = [];
let currentCommand = 0;

const getTimeDetails = epochTime => {
    const date = new Date(epochTime),
        hours = ((date.getHours() < 10) ? "0" : "") + date.getHours(),
        minutes = ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes(),
        seconds = ((date.getSeconds() < 10) ? "0" : "") + date.getSeconds();

    return {hours, minutes, seconds}
};

const StreamItem = ({time, type, typeColor, dataColor, data}) => {
    const {hours, minutes, seconds} = getTimeDetails(time);

    return (<div className="line">
        <p className="time">{`[${hours}:${minutes}:${seconds}]`}</p>
        <p className={cx('name', typeColor)}>{type}</p>
        <p className={cx('information', dataColor)} dangerouslySetInnerHTML={{__html: data}}/>

    </div>)
};

const getTypeColor = type => {
    switch (type) {
        case SUPPORTED_ALIASIS.BOT.key:
            //     return "redt";
            // case "Server":
            // case "Client":
            return "bluet";
        case SUPPORTED_ALIASIS.USER.key:
            return "greent";
    }
};

const isDataError = (data = '') => data[0] == "E" && data[1] == "!";

const getParseData = (data) => {

    if (data[0] == "A" && data[1] == "!") {
        data = data.substr(2);
        data = data.replace(/ /g, '\u00A0');
    }

    if (isDataError(data)) {
        data = data.substr(2);
    }

    return textUtils.highlightText(textUtils.boldifyText(textUtils.linkifyText(data)));
};

const preProcessData = (type = '', data) => {

    const date = +new Date();
    return {
        key: _.uniqueId(date),
        time: date,
        typeColor: getTypeColor(type),
        type: SUPPORTED_ALIASIS[type].name,
        dataColor: type === SUPPORTED_ALIASIS.USER.key ? 'selft' : isDataError(data) ? 'important' : '',
        data: getParseData(data) //todo : parse this
    }
};

class CLI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commands: [
                preProcessData(SUPPORTED_ALIASIS.BOT.key, "A! _____ _____ _____ __  _ "),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, "A!|  _  |  |  |  _  |  \ | |"),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, "A!|     | ||| |     | |\\| |"),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, "A!|__|__|_| |_|__|__|_| \ _|"),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, '[^http://ajain.in/](*ajain.in*)'),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, ""),
                preProcessData(SUPPORTED_ALIASIS.BOT.key, "For list of avaliable commands say '*/commands*'")
            ],
            currentTime: +new Date()
        }
    }

    addCommands(commands = []) {
        const that = this,
            existingCommands = that.state.commands;
        that.setState({
            commands: [...existingCommands, ...commands]
        })
    }

    analyseText(text) {
        const that = this,
            textArray = text.split(' '),
            command = textArray[0];

        switch (command) {
            case SUPPORTED_COMMANDS.CLEAR.path:
                this.setState({
                    commands: []
                });
                break;
            case SUPPORTED_COMMANDS.COMMANDS.path:
                that.addCommands(
                    [
                        preProcessData(SUPPORTED_ALIASIS.BOT.key, 'Available Commands'),
                        ..._.map(SUPPORTED_COMMANDS, ({path, description}) => preProcessData(SUPPORTED_ALIASIS.BOT.key, `*${path}* : ${description}`))
                    ]
                );
                break;
            case SUPPORTED_COMMANDS.LIST.path:
                that.addCommands(
                    [
                        preProcessData(SUPPORTED_ALIASIS.BOT.key, "Available Pages. Use '*/nav page*' to navigate."),
                        ..._.map(PAGES, ({label, shortDesc}) => preProcessData(SUPPORTED_ALIASIS.BOT.key, `*${label}* : ${shortDesc}`))
                    ]
                );
                break;
            case  SUPPORTED_COMMANDS.NAV.path:
                const page = textArray[1],
                    pageKey = PAGE_LABEL_VS_KEY[page];
                if (!page) {
                    that.addCommands([preProcessData(SUPPORTED_ALIASIS.BOT.key, "E!Please enter a page. Use '*/list*' to know list of pages.")]);
                } else if (!pageKey) {
                    that.addCommands([preProcessData(SUPPORTED_ALIASIS.BOT.key, `E!Page '*${page}*' not supported. Use '*/list*' to know list of pages.`)]);
                } else {
                    that.addCommands(PAGES[pageKey].details.map(details => preProcessData(SUPPORTED_ALIASIS.BOT.key, details)))
                }
                break;
            default :
                that.addCommands([preProcessData(SUPPORTED_ALIASIS.BOT.key, `E!Unrecognised command *'${command}'*.`)]);
        }
    }

    componentDidMount() {
        const that = this;

        window.setInterval(() => {
            that.setState({
                currentTime: +new Date()
            })
        }, 1000);

        const inputTextDom = this.refs['inputText'];

        inputTextDom.addEventListener('keyup', function (e) {
            const text = inputTextDom.textContent;
            if (e.which == 13 && text !== "") {

                inputTextDom.textContent = "";
                that.addCommands([preProcessData(SUPPORTED_ALIASIS.USER.key, text)]);

                previousCommands[currentCommand] = text;
                currentCommand = previousCommands.length;
                that.analyseText(text);
            }
            if (e.which == 38) { //up
                if (currentCommand > 0) {
                    currentCommand--;
                    inputTextDom.textContent = previousCommands[currentCommand];
                }
            }
            if (e.which == 40) { //down
                if (currentCommand < previousCommands.length) {
                    currentCommand++;
                    inputTextDom.textContent = previousCommands[currentCommand];
                }
            }
        });
    }

    render() {
        const {commands, currentTime} = this.state,
            {hours, minutes, seconds} = getTimeDetails(currentTime);
        return (
            <div>
                <div className="stream">
                    {commands.map((command) => <StreamItem {...command}/>)}
                </div>
                <div className="line editline">
                    <p className="time">{`[${hours}:${minutes}:${seconds}]`}</p>
                    <p className="name">&gt;</p>
                    <p contentEditable="true"
                       autoComplete="off"
                       autoCorrect="off"
                       autoCapitalize="off"
                       spellCheck="false"
                       className="information edit"
                       ref="inputText"
                    />
                </div>
            </div>
        );
    }
}

export default CLI;
