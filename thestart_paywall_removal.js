// ==UserScript==
// @name         Unhide Paywall on Star.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unhiding subscription paywall from www.thestar.com
// @author       AP
// @match        https://www.thestar.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    addButton('Remove PayWall', deletePayWall, null);
    console.log("Test the Tamper Monkey!");
    //deletePayWall();

})();

function deletePayWall(){
    var payWall = document.getElementsByClassName('basic-paywall-new');
    console.log(payWall);
    payWall[0].style.display = '';
    if (payWall != null && payWall.length > 0){
        for (var j=0;j<payWall.length;j++){
            console.log('Removing the paywall div:' + payWall[j]);
            console.log(payWall[j]);
            payWall[j].parentNode.removeChild(payWall[j]);
        }
    } else {
        console.log('Paywall is not found!');
    }

    showContent();
}

function showContent(){
    var allTestBlocksContainers = document.getElementsByClassName('text-block-container');
    for (var i=0, len=allTestBlocksContainers.length|0; i<len; i=i+1|0) {
        document.getElementsByClassName('text-block-container')[i].style.display='block';
    }
}

function addButton(text, onclick, cssObj) {
    cssObj = {position: 'absolute', top: '7%', left:'4%', 'z-index': 3}
    let button = document.createElement('button'), btnStyle = button.style
    document.body.appendChild(button)
    button.innerHTML = text
    button.onclick = onclick
    btnStyle.position = 'absolute'
    //Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
    return button
}

