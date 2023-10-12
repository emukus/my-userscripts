// ==UserScript==
// @name         Auto Click .torrent Links and Close Window
// @namespace    http://github.com/emukus
// @version      1.1
// @description  Automatically click on links ending with .torrent and close the window if a torrent link is found
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

    let hasTorrentLink = false;

    // Iterate through the links and click on the ones ending with .torrent
    links.forEach(link => {
        if (endsWithTorrent(link.href)) {
            link.click();
            hasTorrentLink = true;
        }
    });

    // Schedule window closure if at least one torrent link is found
    if (hasTorrentLink) {
        setTimeout(closeWindow, 8500); // 8000 milliseconds = 8 seconds
    }
})();
