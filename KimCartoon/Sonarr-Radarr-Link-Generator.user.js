// ==UserScript==
// @name         KimCartoon Sonarr/Radarr Link Generator
// @namespace    emukus
// @homepage     https://github.com/emukus
// @version      1.2
// @description  Extracts and modifies the title on KimCartoon and generates Sonarr or Radarr links with icons.
// @author       emukus
// @match        https://kimcartoon.li/Cartoon/*
// @icon         https://www.google.com/s2/favicons?domain=kimcartoon.li&sz=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove "Season *" from the title
    function removeSeason(title) {
        return title.replace(/Season \d+/i, '').trim();
    }

    // Function to check if any link in the table contains the word 'episode'
    function containsEpisodeLink() {
        const links = document.querySelectorAll('table.listing a');
        for (const link of links) {
            if (link.textContent.toLowerCase().includes('episode')) {
                return true;
            }
        }
        return false;
    }

    // Main function to extract and modify the title
    function processTitle() {
        const titleElement = document.querySelector('a.bigChar');
        if (titleElement) {
            const originalTitle = titleElement.textContent;
            const modifiedTitle = removeSeason(originalTitle);

            const sonarrLink = containsEpisodeLink()
                ? `http://localhost:8989/add/new?term=${encodeURIComponent(modifiedTitle)}`
                : null;

            const radarrLink = sonarrLink
                ? null
                : `http://localhost:7878/add/new?term=${encodeURIComponent(modifiedTitle)}`;

            // Create and add the Sonarr or Radarr links with icons and alt text
            const linkContainer = document.createElement('span');
            linkContainer.style.marginLeft = '10px';

            if (sonarrLink) {
                const sonarrIcon = document.createElement('img');
                sonarrIcon.src = 'https://www.google.com/s2/favicons?domain=sonarr.tv';
                sonarrIcon.alt = 'Add to Sonarr';
                const sonarrLinkElement = document.createElement('a');
                sonarrLinkElement.href = sonarrLink;
                sonarrLinkElement.target = '_blank'; // Open in a new tab
                sonarrLinkElement.title = 'Add to Sonarr'; // Tooltip text
                sonarrLinkElement.appendChild(sonarrIcon);
                linkContainer.appendChild(sonarrLinkElement);
            } else if (radarrLink) {
                const radarrIcon = document.createElement('img');
                radarrIcon.src = 'https://www.google.com/s2/favicons?domain=radarr.video';
                radarrIcon.alt = 'Add to Radarr';
                const radarrLinkElement = document.createElement('a');
                radarrLinkElement.href = radarrLink;
                radarrLinkElement.target = '_blank'; // Open in a new tab
                radarrLinkElement.title = 'Add to Radarr'; // Tooltip text
                radarrLinkElement.appendChild(radarrIcon);
                linkContainer.appendChild(radarrLinkElement);
            }

            titleElement.parentNode.insertBefore(linkContainer, titleElement.nextSibling);
        }
    }

    // Run the main function when the page is loaded
    window.addEventListener('load', processTitle);
})();