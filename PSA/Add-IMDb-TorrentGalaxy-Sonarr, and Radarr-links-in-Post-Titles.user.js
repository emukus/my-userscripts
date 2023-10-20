// ==UserScript==
// @name                PSARips - Add IMDb, TorrentGalaxy, Sonarr, and Radarr links in Post Titles
// @description         Enhance post titles by adding links to IMDb, TorrentGalaxy, Sonarr, and Radarr
// @version             1.6
// @namespace           emukus
// @homepage            https://github.com/emukus
// @match               https://psarips.*/movie/*
// @match               https://psarips.*/tv-show/*
// @match               https://psa.wf/movie/*
// @match               https://psa.wf/tv-show/*
// @match               https://psa.*/movie/*
// @match               https://psa.*/tv-show/*
// @match               https://x265.club/movie/*
// @match               https://x265.club/tv-show/*
// @supportURL          https://github.com/emukus/userscripts/issues
// @license             MIT
// @author              Nissan Ahmed, edited by emukus
// @icon                https://www.google.com/s2/favicons?sz=64&domain=psa.wf
// @homepageURL         https://anissan.com
// @contributionURL     https://paypal.me/ni554n
// ==/UserScript==

const [postTitleH1] = /** @type {HTMLCollectionOf<HTMLElement>} */ (
  document.getElementsByClassName("post-title entry-title")
);

const postTitle = postTitleH1.innerText;

if (!postTitleH1) throw new Error("Failed to get the post title!");

/* Extracting the IMDb link from the movie release "Info" dropdown… */

const infoDiv = /** @type {HTMLElement | undefined} */ (
  document.getElementsByClassName("sp-body folded")[0]
);

const [imdbMovieLink, imdbId] =
  infoDiv?.innerText.match(/https:\/\/www.imdb.com\/title\/(\w+)\//) ?? [];

const encodedTitle = encodeURIComponent(postTitle);

let imdbLink = '';

if (window.location.href.startsWith('https://psa.wf/movie/')) {
  imdbLink = imdbId
    ? `https://www.imdb.com/title/${imdbId}/`
    : `https://www.imdb.com/find/?s=tt&q=${encodedTitle}`;
} else {
  imdbLink = imdbMovieLink ?? `https://www.imdb.com/find?s=tt&ttype=tv&q=${encodedTitle}`;
}

const imdbIcon = `<i class="fab fa-imdb" style="font-style: normal;"></i>`;
const imdbHtml = `<a href="${imdbLink}" target="_blank" title="Open in IMDb">${imdbIcon}</a>`;

const tgxIcon = `<i class="fa fa-magnet" style="font-style: normal;"></i>`;
const tgxHtml = `<a href="https://torrentgalaxy.to/torrents.php?search=${
  imdbId || encodedTitle
}" target="_blank" title="Open in TorrentGalaxy">${tgxIcon}</a>`;

let sonarrLink = '';
let radarrLink = '';

// Check the URL and set Sonarr or Radarr link accordingly
if (window.location.href.startsWith('https://psa.wf/tv-show/')) {
  sonarrLink = `http://localhost:8989/add/new?term=${encodedTitle}`;
} else if (window.location.href.startsWith('https://psa.wf/movie/')) {
  if (imdbLink && imdbId) {
    radarrLink = `http://localhost:7878/add/new?term=imdb:${imdbId}`;
  } else {
    radarrLink = `http://localhost:7878/add/new?term=${encodedTitle}`;
  }
}

const sonarrIcon = `<i class="fa fa-compass" style="font-style: normal;"></i>`;
const sonarrHtml = sonarrLink
  ? `<a href="${sonarrLink}" target="_blank" title="Open in Sonarr">${sonarrIcon}</a>`
  : ''; // Hide Sonarr link if not active

const radarrIcon = `<i class="fa fa-video" style="font-style: normal; margin-left: -15px;"></i>`; // Shift Radarr icon 10px to the left
const radarrHtml = radarrLink
  ? `<a href="${radarrLink}" target="_blank" title="Open in Radarr">${radarrIcon}</a>`
  : ''; // Hide Radarr link if not active

postTitleH1.innerHTML = `${imdbHtml}&nbsp;&nbsp;${tgxHtml}&nbsp;&nbsp;${sonarrHtml}&nbsp;&nbsp;${radarrHtml}<br />${postTitle}`;