// ==UserScript==
// @name         Puzzle Writing Vocabulary
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://puzzle-english.com/writing/*
// @grant        none
// ==/UserScript==

function submitTransHandler(e){
    console.log("Working 2");

    console.log('hi');
    if (e.keyCode == 13){
        console.log('it is 13');
        var trans_options = document.getElementsByClassName('writing-list__translates-text')
        trans_options[trans_options.length-1].click()
    }
}


console.log("Working ...");
if(document.getElementsByClassName('writing__repeat-words').length){
    vocabulary()
}



var puzzle_textarea = document.getElementsByClassName('puzzle-textarea');
if(puzzle_textarea.length){
    console.log("Working 1");
    setInterval(showOptions, 1000);

}
var trans_options = [];

function showOptions(){
    console.log("Working 1.2");


    var opts = document.getElementsByClassName('writing-list__translates-text');

    for(var i=0; i< opts.length; i++){
        var opt = opts[i];
        var id = opt.getAttribute('id');
        if(!trans_options.includes(id)){
            trans_options.push(id);
            console.log(id);
            opt.click();
        }
    }
}

function vocabulary(){
    addTo('writing__repeat-words-item', [
        ['width', '100%'],
        ['border-bottom', '1px dotted gray'],
    ]);
    addTo('word-wrapper', [
        ['min-width', '500px'],
        ['display', 'inline-block']
    ]);

    function addTo(cls, styles) {
        var elems = document.getElementsByClassName(cls);
        console.log(cls, styles, elems);
        for (var i = 0; i < elems.length; i++) {
            var el = elems[i];
            for (var j = 0; j < styles.length; j++) {
                var style = styles[j]
                el.style[style[0]] = style[1];
            }
        }
    }
    }


