// ==UserScript==
// @name         Youtube SkipAd
// @namespace    keesiemeijer
// @version      0.1
// @description  Automatically skips ads after 5 seconds
// @author       keesiemeijer
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

setSPD=3;//playbackRate
setTimeInterval=2000;//TimeInterval


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.ytp-ad-overlay-slot { display: none !important; }');
addGlobalStyle('.ytp-ad-image-overlay { display: none !important; }');
addGlobalStyle('.ytp-ad-overlay-image { display: none !important; }');
addGlobalStyle('.ytp-ad-overlay-container { display: none !important; }');

window.setInterval(
  function () {
      document.getElementsByTagName('video')[0].playbackRate=setSPD;
     var elmButton = document.querySelector('.ytp-ad-skip-button');
    
    if (elmButton) {
      elmButton.click();
    }
  },
setTimeInterval);
