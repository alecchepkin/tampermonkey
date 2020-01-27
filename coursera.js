// ==UserScript==
// @name         Coursera transcript scroll
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  make a scroll for transcript and make resizable the video player
// @author       You
// @match        https://www.coursera.org/learn/*
// @grant        none
// ==/UserScript==



if(document.body && document.domain == 'www.coursera.org') {
    var scrollIntervalCoursera = setInterval(transcScrollEnable, 1000);
}

function transcScrollEnable(){
    const tr = document.getElementsByClassName("rc-InteractiveTranscript");
    tr[0].style.height = "300px";
    tr[0].style.overflow = "scroll";
    document.getElementsByClassName("rc-VideoTranscriptToolbar")[0].style.display="none";
    document.getElementsByClassName("rc-VideoItemWithHighlighting")[0].style.maxWidth="none";
    document.getElementsByClassName("rc-InteractiveTranscript")[0].style.maxWidth="none";
    document.getElementsByClassName("rc-VideoToolbar")[0].style.maxWidth="none";
    document.getElementsByClassName("rc-Transcript")[0].style.maxWidth="none";
    document.getElementsByClassName("video-name")[0].style.display="none";

    console.log("enable transcript scroll");
    if(document.getElementsByClassName("rc-VideoTranscriptToolbar")[0].style.display=="none"){
        clearInterval(scrollIntervalCoursera)
    }
}

transcScrollEnable();