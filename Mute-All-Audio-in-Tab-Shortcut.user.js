// ==UserScript==
// @name         Tab Audio Mute Shortcut
// @namespace    emukus
// @homepage     https://github.com/emukus
// @version      1.0
// @description  Mute audio in the current tab with Alt+Shift+M
// @author       emukus
// @match        *://*/*
// @icon         data:png/image;base64,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
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