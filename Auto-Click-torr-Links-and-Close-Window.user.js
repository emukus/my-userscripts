// ==UserScript==
// @name         Auto Click .torrent Links and Close Window
// @namespace    http://github.com/emukus
// @version      1.2
// @description  Automatically click on links ending with .torrent and close the window if a torrent link is found after four cycles
// @match        https://get-to.link/*
// @match        https://www.spaste.com/*
// @author       emukus
// @icon         https://www.google.com/s2/favicons?domain=psarips.com&sz=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check if a link ends with .torrent (with optional query parameters)
    function endsWithTorrent(link) {
        return /\.torrent(\?.*)?$/.test(link);
    }

    // Function to close the window
    function closeWindow() {
        window.close();
    }

    // Function to periodically check for the torrent link
    function checkForTorrentLink(cycles) {
        const links = document.querySelectorAll('a');
        let hasTorrentLink = false;

        // Iterate through the links and check if any end with .torrent
        links.forEach(link => {
            if (endsWithTorrent(link.href)) {
                link.click();
                hasTorrentLink = true;
            }
        });

        // Schedule window closure if a torrent link is found or continue checking
        if (hasTorrentLink) {
            setTimeout(closeWindow, 8500); // Close after 8.5 seconds
        } else if (cycles > 0) {
            setTimeout(() => checkForTorrentLink(cycles - 1), 25000); // Check again in 25 seconds
        }
    }

    // Start the checking process with 4 cycles
    checkForTorrentLink(4);
})();
