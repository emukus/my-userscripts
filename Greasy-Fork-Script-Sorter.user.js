// ==UserScript==
// @name         Greasy Fork Script Sorter
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Always sort Greasy Fork scripts by 'Updated date'
// @author       emukus
// @icon         https://www.google.com/s2/favicons?domain=greasyfork.org&sz=64
// @match        https://greasyfork.org/en/*
// @exclude      /scripts/[0-9]*-[A-Za-z-]*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function sortScriptsByUpdatedDate() {
        const sortParam = 'sort=updated';
        const currentUrl = window.location.href;

        // Check if the URL already contains the sort parameter
        if (currentUrl.includes(sortParam)) {
            return; // Already sorted by 'Updated date'
        }

        // Check if the URL contains other sorting parameters
        const otherSortParams = ['sort=name', 'sort=ratings', 'sort=installed', 'sort=created', 'sort=total_installs'];
        const hasOtherSortParam = otherSortParams.some(param => currentUrl.includes(param));

        if (hasOtherSortParam) {
            return; // Do nothing if another sorting criterion is selected
        }

        // Append the sort parameter to the URL
        const separator = currentUrl.includes('?') ? '&' : '?';
        const newUrl = currentUrl + separator + sortParam;

        // Redirect to the sorted URL
        window.location.href = newUrl;
    }

    // Call the sorting function when the page is fully loaded
    window.addEventListener('load', sortScriptsByUpdatedDate);
})();
