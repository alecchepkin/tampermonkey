// ==UserScript==
// @name         YAC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://iop.portal.nttltd.global.ntt/l/yac/?action=time-tracking
// @icon         https://www.google.com/s2/favicons?domain=global.ntt
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $date = $("#date");
    const $startTime = $("#startTime");
    const $endTime = $("#endTime");
    const $project = $("#project");
    const $projectDetails = $("#projectDetails")

    let projectDetails = "";

    const d = new Date();
    const hours = d.getHours();
    if(hours < 18){
        // set previous day

        d.setDate(d.getDate() - 1)
        let dd = String(d.getDate()).padStart(2, '0');
        let mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = d.getFullYear();

        let newDate = yyyy + '-' + mm + '-' + dd;
        console.log("newDate", newDate);

        $date.val(newDate);
    }

    $startTime.val("08:00");
    $endTime.val("12:00");
    //    $project.val("CMP Dev (Prof Services)");
    $project.val("NTTNI");
    $projectDetails.val("Development");
    /*    setInterval(function(){
        if($projectDetails.val()=="" && projectDetails !== "" && projectDetails.length > 3){
           $projectDetails.val(projectDetails);
        }
        projectDetails = $projectDetails.val();

        console.log("projectDetails:", projectDetails);
    }, 100);
*/
    setInterval(function(){
        if($startTime.val()!="08:00"){
            $startTime.val("13:00");
            $endTime.val("16:30");
        }
        $projectDetails.val("Development");

    }, 1000);
    /*
    $projectDetails.attr("list", "details");
    $projectDetails.after(`<datalist id="details">
    <option>Procuro</option>
    <option>RedHat</option>
    <option>RedHat</option>
    <option>Rosetta</option>
    <option>Resorce tiketing sync</option>
    <option></option>
    <option></option>
    <option>---------</option>
    <option>Bolt</option>
    <option>Focus Menus</option>
    <option>Helm Charts</option>
    <option>Insight Admin</option>
    <option>Insight Fixtures Support</option>
    <option>Kellner</option>
    <option>Lobby</option>
    <option>Obsidian</option>
    <option>Petros-Go</option>
    <option>Trident-Go</option>
    <option>Whoopsie</option>
    <option>Wiretap</option>
    </datalist>`)

*/


})();