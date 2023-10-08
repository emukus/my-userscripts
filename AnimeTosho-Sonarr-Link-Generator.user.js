// ==UserScript==
// @name         AnimeTosho Sonarr Link Generator
// @namespace    https://github.com/emukus
// @version      1.0
// @description  Create a TVDB link next to the title on AnimeTosho series pages
// @author       emukus
// @match        https://animetosho.org/series/*
// @icon         https://www.google.com/s2/favicons?domain=animetosho.org&sz=64
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Function to extract TVDB ID from the TVDB link
  function extractTVDBId() {
    const tvdbLink = document.querySelector('tbody a[href*="thetvdb.com"]');
    if (tvdbLink) {
      const match = tvdbLink.href.match(/\/series\/(\d+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  // Function to create the Sonarr link
  function createSonarrLink(tvdbId) {
    const titleElement = document.querySelector('h2#title');
    if (titleElement && tvdbId) {
      const sonarrLink = document.createElement('a');
      sonarrLink.href = `http://localhost:8989/add/new?term=tvdb:${tvdbId}`;
      sonarrLink.target = '_blank'; // Open in a new tab
      sonarrLink.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=sonarr.tv" alt="Add to Sonarr" title="Add to Sonarr" style="margin-left: 10px; cursor: pointer;">'; // Replace the icon URL
      titleElement.appendChild(sonarrLink);
    }
  }

  // Main execution
  const tvdbId = extractTVDBId();
  if (tvdbId) {
    createSonarrLink(tvdbId);
  }
})();
