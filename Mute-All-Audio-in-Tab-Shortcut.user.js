// ==UserScript==
// @name         Tab Audio Mute Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Mute audio in the current tab with Alt+Shift+M
// @author       emukus
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to toggle mute/unmute audio in the current tab
    function toggleMute() {
        var videoElements = document.querySelectorAll('video');
        var audioElements = document.querySelectorAll('audio');
        var mediaElements = Array.from(videoElements).concat(Array.from(audioElements));

        mediaElements.forEach(function(element) {
            if (element.muted) {
                element.muted = false;
            } else {
                element.muted = true;
            }
        });
    }

    // Listen for Alt+Shift+M key press and toggle mute
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            toggleMute();
        }
    });
})();
