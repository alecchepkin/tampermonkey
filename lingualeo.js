// ==UserScript==
// @name         Lingualeo My Vocabulary
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change placement of words
// @author       You
// @match        https://lingualeo.com/ru/dictionary/vocabulary/my
// @grant        none
// ==/UserScript==

(function () {

    function change(){
        addTo('sets-words__my-word', [
            ['display', 'inline-block'],
            ['float', 'left'],
        ])


        addTo('sets-words__my-word-translate', [
            ['display', 'inline-block'],
            ['float', 'right'],
            ['width', 'fit-content']
        ])

        addTo('sets-words__col_word',[
          ['width', '600px']
        ])
    }

    function toogleCardDisc(){
         if(document.getElementsByClassName('ll-leokit__word-card__info-toggle').length > 0 &&
          document.getElementsByClassName('ll-leokit__word-card__main-with-secondary').length === 0
          ){
            document.getElementsByClassName('ll-leokit__word-card__info-toggle')[0].click();
        }
    }

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

    setInterval(change, 1000);
    setInterval(toogleCardDisc, 1000);

})()
