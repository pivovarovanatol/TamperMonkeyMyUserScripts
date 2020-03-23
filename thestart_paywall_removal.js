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
    //console.log("Test the Tamper Monkey!");

    var payWall = document.getElementsByClassName('basic-paywall-new')[0];
    console.log('Removing the paywall div:' + payWall.name);
    payWall.parentNode.removeChild(payWall);

    var allTestBlocksContainers = document.getElementsByClassName('text-block-container');
    for (var i=0, len=allTestBlocksContainers.length|0; i<len; i=i+1|0) {
    document.getElementsByClassName('text-block-container')[i].style.display='block';
}

})();