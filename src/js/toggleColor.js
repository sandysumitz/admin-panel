import {hdrTextDom} from './domLoader';

export function changeColor() {
     var ele = hdrTextDom;//document.getElementById('hdrText');
    var color = hdrTextDom.classList;
    if (color.contains("mystyleRed")) {
        ele.className = "mystyleGreen";
    } else {
        ele.className = "mystyleRed";
    }
}