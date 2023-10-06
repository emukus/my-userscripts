// ==UserScript==
// @name         Auto Click .torrent Links and Close Window
// @namespace    http://github.com/emukus
// @version      1.0
// @description  Automatically click on links ending with .torrent and close the window 5 seconds after page load
// @match        https://get-to.link/*
// @match        https://www.spaste.com/*
// @author       emukus
// @icon         https://www.google.com/s2/favicons?domain=psarips.com&sz=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check if a link ends with .torrent
    function endsWithTorrent(link) {
        return link.endsWith('.torrent');
    }

    // Function to close the window
    function closeWindow() {
        window.close();
    }

    // Find all links on the page
    const links = document.querySelectorAll('a');

    // Iterate through the links and click on the ones ending with .torrent
    links.forEach(link => {
        if (endsWithTorrent(link.href)) {
            link.click();
        }
    });

    // Schedule window closure 5 seconds after the script execution
    setTimeout(closeWindow, 8500); // 8000 milliseconds = 8 seconds
})();
