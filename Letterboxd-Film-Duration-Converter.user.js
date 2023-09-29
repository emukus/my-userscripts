// ==UserScript==
// @name         Letterboxd Film Duration Converter
// @namespace    https://your-namespace.example.com
// @version      1.0
// @description  Converts film duration from minutes to hours and minutes on hover
// @author       emukus
// @icon         https://www.google.com/s2/favicons?domain=letterboxd.com&sz=64
// @match        https://letterboxd.com/film/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to convert minutes to hours and minutes
    function convertMinutesToHoursAndMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    }

    // Function to extract and display film duration on hover
    function displayFilmDuration() {
        const filmData = window.filmData;
        if (filmData && filmData.runTime) {
            const durationInMinutes = parseInt(filmData.runTime);
            const durationText = convertMinutesToHoursAndMinutes(durationInMinutes);

            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'duration-tooltip';
            tooltipElement.textContent = `Duration: ${durationText}`;
            tooltipElement.style.position = 'absolute';
            tooltipElement.style.backgroundColor = 'white';
            tooltipElement.style.padding = '5px';
            tooltipElement.style.border = '1px solid #ccc';
            tooltipElement.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
            tooltipElement.style.zIndex = '9999';

            this.appendChild(tooltipElement);
        }
    }

    // Add hover event listener to 'p.text-footer' elements
    const textFooterElements = document.querySelectorAll('p.text-footer');
    textFooterElements.forEach(element => {
        element.addEventListener('mouseenter', displayFilmDuration);
        element.addEventListener('mouseleave', function() {
            const tooltipElement = this.querySelector('.duration-tooltip');
            if (tooltipElement) {
                tooltipElement.remove();
            }
        });
    });
})();
