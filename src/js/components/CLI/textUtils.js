/**
 * Created by aman on 4/25/17 at 4:51 PM.
 * Description :
 */

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

const linkifyText = (text) => {

    while (text.indexOf("](") >= 0) {

        const NAMEregExp = /\(([^)]+)\)/,
            uname = NAMEregExp.exec(text)[1],
            URLregExp = /\[([^)]+)\]/,
            start = text.indexOf("["),
            end = text.indexOf(")");

        let newpage = false,
            url = URLregExp.exec(text)[1];

        if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
        }

        if (newpage) {
            text = text.replace(text.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
        } else {
            text = text.replace(text.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
        }
    }

    return text;
};

const boldifyText = (text) => {
    let tobold = true,
        boldnumber = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "*" && text[i - 1] != "*" && text[i + 1] != "*") {
            boldnumber++;
        }
    }
    while (text.indexOf("*") >= 0) { //Bold parser
        const pos = text.indexOf("*");
        text = text.replace("*", "");
        if (tobold) {
            text = text.splice(pos, 0, '<b>');
        } else {
            text = text.splice(pos, 0, '</b>');
        }
        tobold = !tobold;
        if (tobold && boldnumber <= 1) {
            break;
        }
    }

    return text
};

const highlightText = (text) => {
    let tounderline = true,
        underlinenumber = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "*" && text[i - 1] != "*" && text[i + 1] != "*") {
            underlinenumber++;
        }
    }
    while (text.indexOf("**") >= 0) { //Bold parser
        let pos = text.indexOf("**");
        text = text.replace("**", "");
        if (tounderline) {
            text = text.splice(pos, 0, '<u>');
        } else {
            text = text.splice(pos, 0, '</u>');
        }
        tounderline = !tounderline;
        if (tounderline && underlinenumber <= 1) {
            break;
        }
    }

    return text
};
export default {
    linkifyText,
    boldifyText,
    highlightText
}