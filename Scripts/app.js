"use strict"

/**
 * Full Name: Karandeep.
 * StudentID: 100734535
 * Date Completed: 25 January, 2020
 * Description: This is the app.js file of Lab 1
 */

//IIFE - Immediately Invoked Function Expression
//mean? -> anonymous self-executing function

(function(){

    // Start function to handle things on startup of website
    function Start()
    {
        console.log("%cApp Started...", "color:blue; font-size:20px");
        
    }

    // Event Listener to handle Start function
    window.addEventListener("load", Start);
})();