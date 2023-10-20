// ==UserScript==
// @name         AnimeTosho Sonarr/Radarr Link Generator
// @namespace    emukus
// @homepage     https://github.com/emukus
// @version      1.2
// @description  Create Sonarr and Radarr links next to the title on AnimeTosho series pages
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

  // Function to extract IMDb ID from IMDb link
  function extractIMDbId() {
    const imdbLink = document.querySelector('a[href*="imdb.com/title/tt"]');
    if (imdbLink) {
      const match = imdbLink.href.match(/tt(\d+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  // Function to create the Sonarr or Radarr links
  function createLinks(tvdbId, imdbId) {
    const titleElement = document.querySelector('h2#title');

    if (titleElement) {
      if (tvdbId) {
        const sonarrLink = document.createElement('a');
        sonarrLink.href = `http://localhost:8989/add/new?term=tvdb:${tvdbId}`;
        sonarrLink.target = '_blank'; // Open in a new tab
        sonarrLink.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=sonarr.tv" alt="Add to Sonarr" title="Add to Sonarr" style="margin-left: 10px; cursor: pointer;">';
        titleElement.appendChild(sonarrLink);
      }

      if (imdbId) {
        const radarrLink = document.createElement('a');
        radarrLink.href = `http://localhost:7878/add/new?term=imdb:${imdbId}`;
        radarrLink.target = '_blank'; // Open in a new tab
        radarrLink.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=radarr.video" alt="Add to Radarr" title="Add to Radarr" style="margin-left: 10px; cursor: pointer;">';
        titleElement.appendChild(radarrLink);
      }
    }
  }

  // Main execution
  const tvdbId = extractTVDBId();
  const imdbId = extractIMDbId();

  createLinks(tvdbId, imdbId);
})();