// ==UserScript==
// @name          IMDB Score Hider with Hover
// @namespace     emukus
// @homepage      https://github.com/emukus
// @author        emukus
// @contributor   Assil Ksiksi
// @version       0.6
// @match         https://www.imdb.com/*
// @description   Hides all TV and movie scores from IMDb. Restore score by hovering on movie title.
// @icon          https://www.google.com/s2/favicons?sz=64&domain=imdb.com
// ==/UserScript==

const titleRatingSelector = 'div[data-testid=hero-rating-bar__aggregate-rating]';
const ipcRatingSelector = 'span.ipc-rating-star';
const listRatingSelector = '.imdbRating';
const titleLinkSelector = 'a.ipc-poster-card__title.ipc-poster-card__title--clamp-2.ipc-poster-card__title--clickable';

function hideElement(e, toggle) {
  if (e === null) {
    return;
  }
  if (toggle && e.style.display == 'none') {
    e.style.display = 'block';
  } else {
    e.style.display = 'none';
  }
}

function hideIpcRatings(toggle) {
  document.querySelectorAll(ipcRatingSelector).forEach(function(e) {
    hideElement(e, toggle);
  });
}

var observer = new MutationObserver(function(mutations) {
  hideIpcRatings(false);
});
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});

function hideRatings(toggle) {
  hideElement(document.querySelector(titleRatingSelector), toggle);
  hideIpcRatings(toggle);
  document.querySelectorAll(listRatingSelector).forEach(function(e) {
    hideElement(e, toggle);
  });
}

const movieTitleElem = document.querySelector('h1[data-testid=hero__pageTitle]');
if (movieTitleElem !== null) {
  movieTitleElem.addEventListener('click', function(e) {
    hideRatings(true);
  });

  movieTitleElem.addEventListener('mouseenter', function(e) {
    hideRatings(true); // Show ratings on hover
  });

  movieTitleElem.addEventListener('mouseleave', function(e) {
    hideRatings(false); // Hide ratings when the mouse leaves
  });
}

document.querySelectorAll(titleLinkSelector).forEach(function(elem) {
  elem.addEventListener('mouseenter', function(e) {
    hideRatings(true); // Show ratings on hover over the title link
  });

  elem.addEventListener('mouseleave', function(e) {
    hideRatings(false); // Hide ratings when the mouse leaves
  });
});

hideRatings(false);

window.addEventListener('load', function() {
  console.log('Hiding ratings on load...');
  hideRatings(false);
});