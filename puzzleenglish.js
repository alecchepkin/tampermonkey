// ==UserScript==
// @name         Puzzle Writing Vocabulary
// @namespace    https://github.com/olegre/tampermonkey/blob/master/puzzleenglish.js
// @version      1.4
// @description  Change in Translates vocabulary order, show translate options, click on the Show Answer
// @author       You
// @match        https://puzzle-english.com/writing/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict"

    // change vocabulary style
    let $words = document.getElementsByClassName('writing__repeat-words');
    if ($words.length) {

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
            for (var i = 0; i < elems.length; i++) {
                var el = elems[i];
                for (var j = 0; j < styles.length; j++) {
                    var style = styles[j]
                    el.style[style[0]] = style[1];
                }
            }
        }

        setTimeout(() => $words[1].scrollIntoView(), 1000);
        // entter click to start translate
        document.addEventListener('keydown', event => {
            if (event.code == 'Enter') {
                document.getElementsByClassName('english-button_style_orange')[0].click();
            }
        });

        function logKey(e) {
            console.log(` ${e.code}`);
        }

    }

    if (textareas().length) {
        setInterval(showOptions, 1000);
        setInterval(clickShowResult, 500);
        // fullscreen mode
        document.querySelector('.fullscreen-mode-line__toggle .j-train-popup__open').click()
        //scroll to textarea
        //window.scrollTo(0, text().scrollHeight)

    }

    var trans_options = [];

    function showOptions() {
        // get all links with translates options
        var opts = document.getElementsByClassName('writing-list__translates-text');
        for (var i = 0; i < opts.length; i++) {
            var opt = opts[i];
            var id = opt.getAttribute('id');
            // open only once
            if (!trans_options.includes(id)) {
                trans_options.push(id);
                console.log(id);
                //open translate options
                opt.click();
            }
        }

        // close trans option when I start typing
        let text = getText();
        let popups = document.querySelectorAll('.popover__body .puzzle_mb_10'); // translate options popups
        if (popups.length && text.value) {
            text.click();
        }

    }

    function textareas() {
        return document.getElementsByClassName('puzzle-textarea')
    }

    function getText() {
        return textareas()[0];
    }

    function clickShowResult() {
        console.log('clickShowResult');
        var aTags = document.getElementsByTagName("span");
        var searchText = "Показать ответ";
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent == searchText) {
                aTags[i].click()
            }
        }
    }
})()

