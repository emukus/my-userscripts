// ==UserScript==
// @name         AnimeTosho Sonarr/Radarr Link Generator
// @namespace    https://github.com/emukus
// @version      1.1
// @description  Create a Sonarr or Radarr link next to the title on AnimeTosho series pages
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

  // Function to create the Sonarr or Radarr link
  function createLink(id, service) {
    const titleElement = document.querySelector('h2#title');
    if (titleElement && id) {
      const link = document.createElement('a');
      let url;

      if (service === 'sonarr') {
        url = `http://localhost:8989/add/new?term=tvdb:${id}`;
      } else if (service === 'radarr') {
        url = `http://localhost:7878/add/new?term=imdb:${id}`;
      }

      if (url) {
        link.href = url;
        link.target = '_blank'; // Open in a new tab
        link.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${service === 'sonarr' ? 'sonarr.tv' : 'radarr.video'}" alt="Add to ${service}" title="Add to ${service}" style="margin-left: 10px; cursor: pointer;">`;
        titleElement.appendChild(link);
      }
    }
  }

  // Main execution
  const tvdbId = extractTVDBId();
  const imdbId = extractIMDbId();

  if (tvdbId) {
    createLink(tvdbId, 'sonarr');
  } else if (imdbId) {
    createLink(imdbId, 'radarr');
  }
})();
