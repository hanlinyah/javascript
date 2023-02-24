// ==UserScript==
// @name         Bilibili Video Auto Setting
// @version      0.1
// @description  Automatically skips ads after 5 seconds
// @author       hanlinyah
// @match        https://www.bilibili.com/*
// @grant        none
// ==/UserScript==

setSPD=3;//playbackRate


  function autosetting() {


    //設定播放速度
    document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu-item")[0].setAttribute("data-value",setSPD);
    //點選變更播放速度
    document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu-item")[0].click();

    //設定播放品質720(須登錄)
    //document.getElementsByClassName("bpx-player-ctrl-quality-menu-item")[0].click();

    //設定播放品質480(須登錄)
    //document.getElementsByClassName("bpx-player-ctrl-quality-menu-item")[1].click();

    //設定播放品質360(無須登錄)
    document.getElementsByClassName("bpx-player-ctrl-quality-menu-item")[2].click();


    //設定寬屏播放
    document.getElementsByClassName("bpx-player-ctrl-btn-icon bpx-player-ctrl-wide-enter")[0].click();

    //設定網頁全屏
    document.getElementsByClassName("bpx-player-ctrl-btn bpx-player-ctrl-web")[0].click();

    //關閉彈幕
    document.getElementsByClassName("bui-danmaku-switch-input")[0].click();
}