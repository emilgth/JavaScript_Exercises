import _ from 'lodash';
import './style.css';
import Icon from './icon.png'
import printMe from "./print";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me u dum bithc';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
