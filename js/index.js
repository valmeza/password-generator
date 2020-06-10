"use strict";

console.log("All Connected!");

const randomButton = document.getElementById("generate");
const copyPassword = document.getElementById("copy-password");
const randomPassword = document.getElementById("password");

randomButton.addEventListener("click", function(e) {
    e.preventDefault;
    let len = 10
    let random = "";
    let chars = "*!~#@&/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    for(let i = 0; i < len; i++) {
       random += chars.charAt(Math.floor(Math.random() * chars.length));
    }
     return randomPassword.innerHTML = random;
});



