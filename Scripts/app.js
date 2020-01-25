"use strict"

//IIFE - Immediately Invoked Function Expression
//mean? -> anonymous self-executing function

(function(){

    function Start()
    {
        console.log("%cApp Started...", "color:blue; font-size:20px");
    }

    window.addEventListener("load", Start);
})();