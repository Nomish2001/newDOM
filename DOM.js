'use strict';
//Q1
function addClass(){
    const input = document.getElementById('inputClass').value;
    const text = document.getElementById('text');
    text.className='';
    text.classList.add(input);
}
//Q2
function toggle(id){
    let element = document.getElementById(id);
    if(element.className === 'visible')
        element.className  = 'hidden';
    else
        element.className = 'visible';
}
//Q3
function buttonVisibility(){
    const element = document.querySelector('#b')
    element.textContent = 'press!';
    element = document.getElementById('bActive')
        
}
