// ==UserScript==
// @name         Letterboxd Watched to Fan Ratio
// @namespace    emukus
// @homepage     https://github.com/emukus
// @version      0.3
// @description  Display the ratio of watchers to fans.
// @author       emukus
// @contributor  stanuwu
// @match        *://letterboxd.com/film/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=letterboxd.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const findData = () => {
    // get possible elements that could contain the amount of fans or watched
    const searchLink = document.querySelectorAll(
      'a.all-link.more-link, a.has-icon.icon-watched.icon-16.tooltip',
    );

    let fanElement;
    let fans = '';
    let watched = '';

    //go through the elements and find the fans and watched
    for (let l of searchLink) {
      if (l.innerHTML ? l.innerHTML.includes(' fans') : false) {
        fans = l.innerHTML;
        fanElement = l;
      } else if (l.dataset.originalTitle.includes('Watched by ')) {
        watched = l.dataset.originalTitle;
      }
    }

    //stupid formating to get the numbers
    const fanNumber = numberFormat(fans.split(' ')[0]);
    const watchedNumber = parseInt(watched.split(' ')[2].replace(/,/g, '').replace(' members', ''));

    //display as percentage next to the fans
    const percentRatio = ((fanNumber / watchedNumber) * 100).toFixed(2);
    fanElement && (fanElement.innerHTML += `(${percentRatio}%)`);
  };

  //code to format numbers using k or m
    const numberFormat = (num) => {
        if (num.endsWith('K')) {
            return parseFloat(num) * 1000;
        } else if (num.endsWith('M')) {
            return parseFloat(num) * 1000000;
        } else {
            return parseFloat(num.replace(/,/g, '')); // Remove commas and parse
        }
    };


  setTimeout(findData, 1000);
})();