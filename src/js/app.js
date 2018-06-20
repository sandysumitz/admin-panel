import {btnChangeColorDom} from './domLoader';
import {changeColor} from './toggleColor';
import '../css/colorChange.css';
btnChangeColorDom.addEventListener("click",changeColor);
