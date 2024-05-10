// ==UserScript==
// @name        Letterboxd Search Bars
// @namespace   emukus
// @homepage    https://github.com/emukus
// @description Adds a search bar to various sites on Letterboxd
// @author      emukus
// @contributor LeLobster
// @icon        https://letterboxd.com/favicon.ico
// @match       *://letterboxd.com/film/*
// @version     2.0
// @grant       none
// ==/UserScript==

if( document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive" ) {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}


function main() {
    // Get title and year from an already existing array (filmData) in letterboxd
    // How convenient
    var filmTitle = filmData['name']
    filmTitle = filmTitle.replace(/[\/\\#,+()$~%.":*?<>{}!]/g, ''); // remove chars
    filmTitle = filmTitle.replace(/&/g, '%26')
    var filmYear = filmData['releaseYear']
    // Also maybe get the original title if present
    // Don't know how to implement it yet though
        // var originalTitle = document.querySelector('[itemprop='datePublished']')
        // originalTitle = originalTitle.nextSibling.nextSibling.innerText.replace(/[‘’]/g, '');

    console.log(filmTitle, '(' + filmYear + ')')

    // Look for the IMDb and TMDb IDs in the buttons
    var imdbElement = document.querySelector('[data-track-action="IMDb"]');
    var tmdbElement = document.querySelector('[data-track-action="TMDb"]');

    if (imdbElement) {
        // Get IMDb id from the IMDb button
        var imdbButtons = document.querySelectorAll('.micro-button.track-event');

        if (imdbButtons.length > 0) {
            var imdbBtn = imdbButtons[0].href.match(/tt(\d{7,})/);

            if (imdbBtn) {
                var imdbId = imdbBtn[1];
                console.log('IMDb ID:', imdbId);
            } else {
                console.log('IMDb ID not found');
            }
        } else {
            console.log('No IMDb button found');
        }
    } else {
        // Handle the case when IMDb button doesn't exist
        console.log('Film has no IMDb page');
    }

    if (tmdbElement) {
        // Get TMDb id from the TMDb button
        var tmdbButtons = document.querySelectorAll('.micro-button.track-event');

        if (tmdbButtons.length > 1) { // Assuming TMDb button is not the first one
            var tmdbBtn = tmdbButtons[1].href.match(/movie\/(\d+)/);

            if (tmdbBtn) {
                var tmdbId = tmdbBtn[1];
                console.log('TMDb ID:', tmdbId);
            } else {
                console.log('TMDb ID not found');
            }
        } else {
            console.log('No TMDb button found');
        }
    } else {
        // Handle the case when TMDb button doesn't exist
        console.log('Film has no TMDb page');
    }

    // Function used to build icons
    function createIcon(cont, title, href, icon) {
        var a = document.createElement('a');

        a.href = href; 
        a.title = title;
        a.setAttribute('target','_blank');      
        var img = document.createElement('img');
        img.src = icon;
        img.setAttribute('height','16');
        img.setAttribute('witdh','16'); 

        a.appendChild(img);
        var cell = cont.insertCell(-1);
        cell.appendChild(a);
        console.log(title,'icon built succesfully.')
    }

    // Function to apply CSS to each icon to make it look nicer
    function applyCSS() {
        iconElt = document.querySelectorAll('#tor-icons');
        iconElt[0].style = 'display: table; margin: 0 auto;'
        iconElt[1].style = 'display: table; margin: 0 auto;'
        iconElt[2].style = 'display: table; margin: 0 auto;'

        iconRow = iconElt[0].childNodes[0].childNodes
        for (i = 0, j = iconRow.length; i < j; i++) {
            iconRow[i].style = 'padding: 2px 4px 0px 4px;'
            iconRow[i].id = 'tor-icon';
        }
        iconRow2 = iconElt[1].childNodes[0].childNodes
        for (i = 0, j = iconRow2.length; i < j; i++) {
            iconRow2[i].style = 'padding: 2px 4px 0px 4px;'
            iconRow2[i].id = 'tor-icon';
        }
        iconRow3 = iconElt[2].childNodes[0].childNodes
        for (i = 0, j = iconRow3.length; i < j; i++) {
            iconRow3[i].style = 'padding: 2px 4px 0px 4px;'
            iconRow3[i].id = 'tor-icon';
        }
        console.log('CSS applied.')
    }

    // Create a new element for the tor icons to fit in
    li = document.querySelector('.js-actions-panel');
    tab = li.insertBefore(document.createElement('li'), li.lastChild);
    div = tab.appendChild(document.createElement('div'));
        div.id = 'tor-icons'
    tr = div.appendChild(document.createElement('tr')); 

    // The Pirate Bay
    img = 'data:text/html;charset=utf-8;base64,Qk04AwAAAAAAADYAAAAoAAAAEAAAABAAAAABABgAAAAAAAAAAADgTAAA4EwAAAAAAAAAAAAA////'+
    '/////////////////////////////////////////////////v7+/////////////Pz8vb297Ozs'+
    '////////////////////////////////4uLiSUlJ3d3d////////8/PzEhIScnJy8fHx////////'+
    '////////////8fHxwsLCWFhYAAAAyMjI////////5+fnEBAQICAgQkJCV1dXZWVli4uLiYmJUlJS'+
    'KioqPT09bm5uHh4eYWFhwcHBubm5bGxsQEBAp6end3d3FBQUAAAAFBQUOTk5ISEhGRkZPT09WVlZ'+
    'QkJCKioqJycnenp6AAAAQUFBPz8/YGBgjo6O0dHR+/v7////////7+/vxcXFnZ2dg4ODExMTQEBA'+
    'v7+/AAAAgoKCjo6OpaWltra2qqqqpqampaWlpKSkra2tr6+vsbGx5eXll5eXW1tb1NTUcXFxmJiY'+
    'AwMDAAAANzc3VFRUGxsbAAAAX19fPDw8ERERAAAAQUFB/v7+/Pz8////////nJycAAAAAAAAAAAA'+
    'Hx8fCwsLAAAAJiYmBQUFAAAAAAAAKysr+vr6////////////nJycAAAAAAAADw8PAAAAAAAAAAAA'+
    'AAAADQ0NAwMDAAAANjY2+vr6////////////rq6uAAAANjY25eXlWVlZHx8fJycnIyMj0dHRhoaG'+
    'AAAAV1dX////////////////r6+vAAAALS0t0tLSX19fsrKy2dnZZWVlsrKyiIiIAAAAWVlZ////'+
    '////////////r6+vAAAAAAAABQUFAgICExMTEBAQAwMDAwMDAQEBAAAAWlpa////////////////'+
    'q6urAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRU////////////////19fXSUlJQUFB'+
    'Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQkJCQkJCqKio/////////////////////////v7+/v7+/v7+/v7+'+
    '/v7+/v7+/v7+/v7+/v7+////////////AAA=';

    createIcon(tr, 'The Pirate Bay','https://thepiratebay.org/search/'+filmTitle+' '+filmYear+'/0/5/200', img);

    // Torrent Galaxy
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADY0lEQVQ4jV2SS28bVRiGv++cMxeP'+
    'PY4ndeIkTtokrkqDymURlUIFOwrqAqiALrqEVZfs+QesQWzYsUYQCbFAKiyQoFAupVLihubmNHZi'+
    'xzNjz4znes7HpkjAI73L5109CADQO3kaTI2DP0nZ2PS4eLQkCLV8bs2VHAT09k2ksW4U5w6lJXRp'+
    'Q0XFWUGLTR3wcXcNpmsa7HcnIgzIrh4uP0sSVbzcbRu1TENAluaU6O2lppBaM6of/8Hm/eGMWc3C'+
    'OCe+sqqDcwa578u602ndooxfGTpH7RmDXZkOrfcrkXldz/nswHD7bGSvW6FzLZLZTiTCYLVZlvyT'+
    'jxfxyA+rTnflhp6Ub3dFb6PuyNZcYX2oS/GyUOySIcVVDVn+Vzb4qZbWb5QS+ymPeb+FaR6yg9NA'+
    '46dOq5RUb2dUjDzhjqbJfI0TW4AnMMKyrbTXdUNVAxVtaYX5dtltXO2NwxI79mOzHDkvciWeySgf'+
    '5FJJUFCF/4GEFZSoxZAOkLBWSiuvxj6vschDSxTGRQTUGCILJjJwk3yTACT+62CcF49ORmlfIOMI'+
    'yLkS51WoOyIMSCiTDEAAHbU5nbTs585ogxag0bCMFxBRG6X59v2T8ed+UvTLldIiEAARiCQmTfij'+
    'ooi13HUEgA7a6lJpunnnoHN39zD96NyMsSYY6l0v2/HCfPul52sNi8znkAByJT0vShPhuSo5tYPt'+
    'BnfGHPjMLNSvr6+f/n7n2+jBl/cnbUWEdUdk197SS8tq/hUt0dcIgEbFZOvYi8ciGLBkZ2q4uWI2'+
    '2lVuXbaK8hvn89bB0s3+BjEVAAAhgsGHzuWK77yHgGZGRa8TDn9xByoQnT2V6ZbfuWC7X1+0zUsc'+
    '2JQVOR+YHftNRAoBgAjAQMnPMsVnAIAG6fi7P3v9B+4xi/nuTkbLZw0ZsWjcqFSmba10gQMrMcUb'+
    'TImlJ1tgxMoEoNw0/PGHo91Pt/aCzXt3kwl/590peNjOZK7kZJCPO4bORpwhK0AmmSr8VBVeqgo3'+
    'yNODg8D95vu93c/uPRz++nifvC++WlbIOYKUBK2Wweea3J5yYHbujDlfK+tTnKMAAFAKVJjkQW8Y'+
    'n3hDdTzs02hzM8mrVQb4n9oQWK3GRaXCDM0AjXFABACpgIoMikmkMs9TmZSk/nH+BpAozyIWWqCY'+
    'AAAAAElFTkSuQmCC';

    createIcon(tr, 'TGx','https://torrentgalaxy.to/torrents.php?search=tt'+imdbId, img);

// The RARBG
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAflJREFU'+
    'OI2F0z9oXEcQx/HPCSWY22DcvFe4CK9KoYOQIhZxE1/j5lQLUpig2lIVIhchsY1xZadIYR8uXKhX'+
    'fZUhnFOeXAVOhBDCI+XbJjHsEozRpjid/OdsMrDMsMN+5/eDnV4ppYePcQ0f4cRq/IWf8cdKp5Ry'+
    'uZTypPx//FNK+aGU8kEppbc86/gCn0/nnfFBS3hzQB9VFWwNq/PDQX0HF/Dtsr++LFKijVk/k9Nb'+
    'Mtvs6VG0v8P2sL6Ox/jtDUBAPyzypUFl60oFJkfR8XGUMJm2RsP6XODLFQCE/iI3DcPNGk42mnpt'+
    'bzwjZRmpI9QurlhYqng7ck76MqgCoQZ/vhOwpMQumc46Kee16VEnp6SLjIaVwHP88h5AInEUo8On'+
    'x2dXsD3asLM1gAdoVwApZ/PjVkpZXfc1/WDexoWo0F8+fo6D10eunXlNSdu2Yuxc2qhNDnZsDRsx'+
    'dmJs7d4/hPP4CR+uABZaMykuPgXu7Y8MmiClbDqZ2r19CCPcfAcgyynKOUsL4y9DCP8+uLcjnMLH'+
    '40MPDybwHb7G+hkgZcSO1Mk5w9+4uzloXtza35bzord3Y2wyncEdfNUrpVzF3a5Lm23bymjqStPU'+
    'v+Iz/IhvZvM5iYwqBINB8zu+752u86e47tU6n2CMmcU+3cAneHlq+wUe4dl/EuoEoSZWymEAAAAA'+
    'SUVORK5CYII=';

    createIcon(tr, 'The RARBG','https://therarbg.com/get-posts/keywords:'+filmTitle+' '+filmYear+'/', img);

    // RMTeam
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACV0lEQVQ4jaWTzWsTURTFz5tMZoJt'+
    'amYyNdMOGM1XY4u2aIQWBRU6i6wKwU0h6FJBcKH+B666EfwH2oWIQilIseLahYKrWI00NU1ik5kGQ'+
    'tu0SSYfY/Jc6IQam1Xv5l7Oufw498EjlFKcpNiVlZV7y8vLDwFAEIRiLBZ7parqklGruF4uLnwAgK'+
    'nIjfWrM+p9Lb8VfvdmaREArt+a+xSeiDxgy+XymWw2O85xHHK53HgikbjJcdzslctTj3ZL+jgA5HO'+
    'pcGR69pm2nb5maY16bZgQ8pixosTj8Xo8Hn/d6XSYtbW12yCYtLzd0g4DYELLb033ntAF8DzfVlX1'+
    'BSGkreu6DRSXLK9aPUDdqE4U9WykLwAAWq2WAwBhWRYAWEtvNusobG9GK5XyqHNI+PcRrUHTNDaRS'+
    'DyhlDLBYLADgp8AYOd4mK0mvq9/vkBAII94UTnc/x+wurrqADDjcrkwPz+fBPARAAYGhlAnVaQ3vz'+
    'Acx2OwJ0H3BFmWwTAMvF4vfD7fU1DULE+UZPwyWzgtSGAY2/6xgGg02pQk6SCTycA0zdDRJUH0NAB'+
    'AcHs6hKBwLMDhcJiKouwYhoFCoTB5dEmUPHsAILo9JgXyxwIAIBgMfm2320in0xcJgb2bwO0p/O0G'+
    'AbS+gEAgsA4AqVTqLKVwW7pbkn/8SSDrFLTaF+D3+78RQjobGxunAIQtfdDp0u28wxDE4U30FNE0z'+
    'afr+l1FUWyiKD5PJpNzPM+PjYVCb7V8OsTauZA8eu59Uc9JI8r5Rnm/lDo82LvjluTGoNO1QE76nX'+
    '8DR/LehWzkcRQAAAAASUVORK5CYII=';

    createIcon(tr, 'RapidMovies','http://www.rmz.cr/search/'+filmTitle.replace(/\s/g, "+"), img);

    // Pahe
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEVHcEwISMkISMkISMkISMkI'+
    'SMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMmCFXFWAAAAEXRSTlMAVNeXbYi+Fq'+
    'Y7IcpiC/XtA2+6WX8AAABlSURBVBiVnc5LEoAgDAPQ8GlLAdHc/7KCunHljFm+JjMFPmO2vYEtjkVH'+
    'eUCB0leTD8wDK+oCv8Ga+NwdJLOzYB8CVxLsoagr1jQpxpz0tEdekJPTWENskhFwSUe2LVSR789/5A'+
    'T3NgNHQwce9AAAAABJRU5ErkJggg==';

    createIcon(tr, 'Pahe','http://www.pahe.me/?s=tt'+imdbId, img);

    //1337x
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8UlEQVQ4jcWTsWsUYRDF38z37Wbv'+
    'AkJEBIVDREEEETsbG1GwMJXapLSxUEvTRSxEUsVeFALaWIighZg/QRBMEEFEBEE9Qkji5e72dm935'+
    'lmEmMilS+E0M8384M17IySxl9I9bQOIW8PPqZNX030TdylKB5Kq25lnOZijRmg6dj47eHgWIWZQze'+
    'r29xeHni7O/AOoB/kHaAyh0TxFUYR07JZX5fParR0b4zdF9SxEwKr0apC/H5HgZt+qvDstdVUqHSF'+
    'JjyLEK6J6TrPG5Natqu7v+1B9PSIhxAgBFqwsXoroFElo1pxWDesQySCKKu99qnsbjyDiIwDZbKyL'+
    '/mwI8RKSdH9MsxZDbEmI8HJQD398nbNy0IZs3/7vRDPQDDD7aEX+OIQIiEBjgHfXUXxZelcs/3pW9'+
    '3uouxujLtR5DyChjXFNsmYLIrC8By6vwTqr8Gp4QEQmUFUru9oIcFOHVRe837lmq22wyAEzaJIgJO'+
    'kJjbxd1/W9nYBtMcMCGJZjWvbv2NpyyrwLd1t0kTc70nqdwDHuBnAzkH6ZxEXRAIrCzB+62Yy59+k'+
    'OiLQA3CAZRgHkcYg8AKAkQfIzybcUWXLnAkTgZlDVaQEmR3MQwukQQkFyEUDi7k9EZGXTYs67+xGS'+
    'IcaYDd3PAHgFAPLfv/EPJs4IQHNr/+kAAAAASUVORK5CYII=';

    createIcon(tr, '1337x','https://1337x.to/search/'+filmTitle+' '+filmYear+'/1/', img);

    // Anime Tosho
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC8klEQVQ4jXWTTUhjdxTFz/vre+Zh'+
    'THHwqVhMxKALvxhFWogUiToGJ60Eq4uK3YQBGVzobroRcTGzciFuXFhB1E1cuJAiLhwNorSD5kFb'+
    'Sy1R34iKGKIZE3BMxrzTxXwwTmYuHO7mnns58LvAF+rs7MxK8juSfpKPSfpIOtra2qSP56RPjcvL'+
    'y+UlJSX94XC4e21t7V4oFLImEglRVlZ24/V6X3k8ni2Hw/FUUZQ/M67e3t7e39nZ+aOlpYWKohDA'+
    'HQkh2NjYyNXV1X/T6XTjHTNJ297e3vPa2toM46eqrKykYRhrdyJcX1//0tfX92xxcVFSFAVdXV30'+
    '+/2Mx+Pi/PwcmqYhEomY4+PjYn9/H0NDQ69dLtcDAMDGxsa9paWlsNVqZU5ODkdHR83t7W3T7Xab'+
    'eXl5FEKwoKCAwWDwcHNz829N0+h0Ok1d14cAAJeXlz91d3cnAbC9vf3WMIzXbrf7Q+73fWVlZT0W'+
    'iz1yuVzMz88nyScCACKRSMPW1pYiyzL6+/tTwWAwub6+DkmSMDg4CFVVoWkaCgsLj1OpVIIkZFkm'+
    'gDcCgKTretPV1RXKy8tRVVW1PTc395UQAiMjIxgYGPgrKysLmqahuLhYj0aj/oODAzidzjcAXgoA'+
    'TCQSXyeTSRQVFSE3N/efi4sLyLKMpqamsK7rualUCiQRj8d/mJycbI5Go2htbU0BeMvC2NjYCQA2'+
    'NDTw+Pj4t46ODkqSxJqaGtrtdgKgxWJhfX09LRYLS0tLzd3d3U2SAgAwPT39nyzLVFWVgUDADAQC'+
    '5ruMGbJarZyZmXlFsvkDRCcnJ79WVFQQAFVVZWdnJz0eD1VVZW9vLw8PD/WJiYmr4eHhRCgU+n12'+
    'dvbhO4becpROp7+dn58/t9lsGRfr6upoGMbPJB0ky0jmZ/wAAITD4YGpqalIdXW1abPZmJ2dTUmS'+
    '6PP5eHp6+v1nTR+j3NPTIy0sLHwTi8V8uq43Hx0dVd3c3Mher/eF3W7/UQgR+9yC/wE9HIFDtxRs'+
    'jgAAAABJRU5ErkJggg==';

    createIcon(tr, 'Anime Tosho','https://animetosho.org/search?q='+filmTitle, img);

    // Nyaa
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUJN280qPs83f4Sb+UVkPt6'+
    's/S73vs/wf4ffuwBYOyt7f9A9f6Gxvp23/z1+v45jOtFQINHAAAACXBIWXMAAC4jAAAuIwF4pT92'+
    'AAABjUlEQVR42mWSMUjDQBSGD7K0kz0odFEpWbsYnkKyGAtBF0G6iFMVxCAiAbNksYNchRMKHbo4'+
    'iquLuHbRoa2U6lB3ccog+lCiUkSM7xLqoG+5e9/9/3/v4Bj7WxlIy5b6HS0zY2DGhdodHFzkxuCV'+
    'B1PDUrt9ziaoa8Eb57yWAk0CyLqT54WaXyopICT1DikKut5OgZCOs/LK9wJdKTLH5KjHcMB5QBJS'+
    'HElTOgLsyb3AVyBrghDSAiPg3C+dEqBL7AjAqPBC7/6MLC0zEhaNnueDPg4JkEWNOlfh+4/PwyJd'+
    'CxaNCg2+NNjZ0YssY9rJYz7y1avJ0D9hmg0tioDDspfv9+4fmJa+VhhlDL0bVECdN2F2GTFEJItK'+
    'pBotoqqTscWufybgkmlWCuJGAn5D4/iL2kfcSIApYBR9eej9KiJzBNOrrpuGfqwL0ZTvXgIo1ES8'+
    'tlrvuxTh4dYL0+Zo1+2gF2IYVuIc0+YJuLdqSnTXjAWW/aZdB/GJ+t1NI8eytwSqyo/dcLv+8u83'+
    '/ACtd9urh4GQJQAAAABJRU5ErkJggg==';

    createIcon(tr, 'Nyaa','https://nyaa.si/?f=0&c=0_0&q='+filmTitle+'&sort=4', img);

   // Google
   img='data:image/jpeg;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
   'AAAAAAAAAAA////MP39/Zb9/f3Y/f39+f39/fn9/f3X/f39lP7+/i4AAAAAAAAAAAAAAAAAAAAAAA'+
   'AAAAAAAAD+/v4J/f39mf///////////////////////////////////////////f39lf///wgAAAA'+
   'AAAAAAAAAAAD+/v4J/f39wf/////6/fn/tNmn/3a6Xf9Yqzr/WKo6/3K4Wf+s1Z3/+Pv2///////9'+
   '/f2/////CAAAAAAAAAAA/f39mf/////s9en/cbdY/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/46vW'+
   'P/+8Oj///////39/ZUAAAAA////MP/////6/Pn/cbdX/1OoNP9Yqjr/otCR/9TpzP/W6s7/qtSb/5'+
   'mjSv/whkH/9p1n///+/v///////v7+Lv39/Zj/////idbN/0uqSP9Wqjj/1erO///////////////'+
   '////////95tj/9IdG//SFQv/82MP///////39/ZT9/f3a/////yzE8f8RvO3/jdGw////////////'+
   '//////////////////////iugv/0hUL/+LWN///////9/f3X/f39+v////8Kvfv/Bbz7/7Xr/v///'+
   '//////////////0hUL/9IVC//SFQv/0hUL/9IVC//emdf///////f39+f39/fr/////C777/wW8+/'+
   '+27P7/////////////////9IVC//SFQv/0hUL/9IVC//SFQv/3qnv///////39/fn9/f3b/////zX'+
   'J/P8Ksvn/a6T2///////////////////////////////////////////////////////9/f3Y/f39'+
   'mf////+Sz/v/N1Ls/zhG6v/Q1Pr///////////////////////39/////////////////////////'+
   'f39lv7+/jL/////+fn+/1Zi7f81Q+r/O0nr/5Wc9P/P0vr/0dT6/5ad9P9SXu3/4eP8//////////'+
   '///////////zAAAAAA/f39nf/////o6v3/WGPu/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/2x28P/'+
   '///////////39/ZgAAAAAAAAAAP///wr9/f3D//////n5/v+lrPb/XWnu/zxK6/86R+r/Wmbu/6Kp'+
   '9f/5+f7///////39/cH+/v4JAAAAAAAAAAAAAAAA////Cv39/Z3//////////////////////////'+
   '/////////////////39/Zn+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Mv39/Zn9/f3b/f'+
   '39+v39/fr9/f3a/f39mP///zAAAAAAAAAAAAAAAAAAAAAA8A8AAMADAACAAQAAgAEAAAAAAAAAAAA'+
   'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIABAADAAwAA8A8AAA==';

    createIcon(tr, 'Google', 'https://www.google.com/search?q='+filmTitle+' '+filmYear, img);

    // Create a new element for the second set
    tab = li.insertBefore(document.createElement('li'), li.lastChild);
    div = tab.appendChild(document.createElement('div'));
        div.id = 'tor-icons'
    tr = div.appendChild(document.createElement('tr'));

    // PSARips
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAn1BMVEVHcEx7dnZpaWklJSU6Ojo'+
    '6OzsvLy9HR0eTkJBoaGg1NTVxcXFRUVFlaGghISH29vZeXl5WVVVzc3NVVVVlZWVra2tCQkI3Nz'+
    'cpKSlJS0tvb2////8vMDA1NTVLS0tPT0+MjIxHR0dERERLS0s7OztWVlY8PDx4MjJKSkqfn5+Nj'+
    'Y1vTU3Bk5ORUVH////V1dU8PDwSEhIjIyMAAAAvLy/1w3IdAAAAMHRSTlMALYz8u/bqtx5f5zq8'+
    'TO0Gp5hArZp/xs/xm28Py/vqx0vn+svsjN7e4FU6xkinECsIIiaaAAAAqElEQVQYlVWP1RKDQBA'+
    'E9+AMd5dC43LI/39bigRC0m8zNVtdC/CGY0oC2DGIkbmzvRfJ9c7hMqbfgh9vCMCs4Z9coN+oAB'+
    'Z8v3H1IouFomifrHml7jsx8TtviZbEhC3pakFU6oPlsKGEQJ2J6Gj9bCGKx6ofR7kRBcWst2AYM'+
    'NCpUeWZHU6Vs9gASWEYsEiC5MxWq/sI20EB7qWbVp6m5TVjHSCcm9v4Bd2JDGtUJfzMAAAAAElF'+
    'TkSuQmCC';

    createIcon(tr, 'PSARips', 'https://psarips.com/?s='+filmTitle, img);

    // Fora - Snahp
    img = 'data:text/html;charset=utf-8;base64,AAABAAMAEBAAAAEAIABoBAAANgAAABAQAAABACAAaAQAAJ4EAAAQEAAAAQAgAGgEAAAGCQAAKAAAABAAAAAgAAAAAQAgAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAADMzMwAzMzMAMzMzADMzMwIzMzM2MzMzjj'+
    'MzM88zMzPpMzMz6TMzM84zMzOLMzMzMjMzMwEzMzMAMzMzADMzMwAzMzMAMzMzADMzMw8zMzN8MzMz4zMzM/YyMjKqMzMzdjMzM3ozMzOeMzMz1TMzM9wzMzNzMzMzCzMzMwAzMzMAMzMzADMzMw4zMzOZMzMz4TMzM7c4'+
    'ODj3Ojo6tS8vLz4AAAABLCwsADMzMx8zMzODMzMz6DMzM40zMzMKMzMzADMzMwEzMzN5MzMz5TMzM1AvLy9TR0dH+2pqav9MTEzrNTU1iywsLCE0NDQAMjIyATMzM2EzMzPpMzMzbDMzMwAzMzMzMzMz3TMzM3wzMzMALy'+
    '8vUkhISPt+fn7/e3t7/2BgYP9BQUHRMTExYCoqKgsgICAAMzMzizMzM9UzMzMoMzMziDMzM9UzMzMfMzMzAC8vL1NISEj7fX19/39/f/+AgID/dHR0/1VVVfc6OjqtLi4uODIyMiozMzPbMzMzdzMzM8gzMzOiMjIyAjMz'+
    'MwAvLy9TSEhI+319ff9/f3//f39//4CAgP9+fn7/ampq/0pKSuc1NTWJMzMzxzMzM7YzMzPhMzMzgzMzMwAzMzMALy8vU0hISPt9fX3/f39//39/f/9/f3//f39//4CAgP97e3v/XV1d/jc3N/szMzPQMzMz3jMzM4UzMz'+
    'MAMzMzAC8vL1NISEj7fX19/39/f/9/f3//f39//39/f/+AgID/cnJy/1FRUfI1NTXuMzMzzjMzM8AzMzOqMzMzBDMzMwAvLy9TSEhI+319ff9/f3//f39//4CAgP96enr/X19f/z8/P8kwMDBdMzMzvzMzM60zMzN6MzMz'+
    '3DMzMykzMzMALy8vU0hISPt9fX3/gICA/39/f/9sbGz/SkpK6DQ0NIQsLCwZMzMzMDMzM+AzMzNpMzMzJjMzM9MzMzOSMzMzAS8vL1JISEj7fn5+/3Z2dv9XV1f6Ozs7sy4uLj4CAgIBMzMzBzMzM58zMzPLMzMzHTMzMw'+
    'AzMzNjMzMz6jMzM28wMDBaRkZG+2NjY/9ERETZMTExaysrKw8yMjIAMzMzCTMzM38zMzPpMzMzVzMzMwAzMzMAMzMzBzMzM34zMzPnMzMzzjY2Nvc3NzelLS0tKjk5OQAzMzMLMzMzNzMzM6IzMzPpMzMzczMzMwQzMzMA'+
    'MzMzADMzMwAzMzMGMzMzXTMzM84zMzPzMzMzwTMzM5szMzOeMzMzvTMzM+IzMzPIMzMzVDMzMwQzMzMAMzMzADMzMwAzMzMAMzMzADMzMwAzMzMeMzMzZzMzM6kzMzPJMzMzyTMzM6UzMzNiMzMzGjMzMwAzMzMAMzMzAD'+
    'MzMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAABAAAAAgAAAAAQAgAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAADIyMgAyMjIAMjIyADIyMgMz'+
    'MzM3MzMzjjMzM84zMzPoMzMz6DMzM8wzMzOJMzMzNDIyMgIzMzMAMzMzADMzMwAyMjIAMzMzADMzMxAzMzN7MzMz4DIyMvQyMjKoMjIydTIyMngzMzObMzMz0TMzM9kzMzNyMzMzDDMzMwAzMzMAMzMzADMzMw8zMzOXMz'+
    'Mz4DIyMrk4ODj1Ozs7si8vLz4REREBOTk5AzMzMyIzMzOEMzMz5TMzM4szMzMLMzMzADIyMgMzMzN6MzMz4zMzM1YvLy9aSEhI9Wpqav9OTk7oNjY2iiwsLCM0NDQANjY2BDMzM2QzMzPmMzMzbTQ0NAEzMzMzMzMz2TMz'+
    'M35iYmIALy8vV0lJSfZ+fn7/fHx8/2JiYv5CQkLPMTExYCoqKg44ODgDMzMzizMzM9QzMzMqMzMzhjMzM9EzMzMhMTExAC8vL1hJSUn2fX19/39/f/+AgID/dHR0/1RUVPU6OjqrLi4uOjIyMi0zMzPXMzMzdjMzM8UzMz'+
    'OhNDQ0BjExMQAvLy9YSUlJ9n19ff9/f3//f39//4CAgP9+fn7/a2tr/0pKSuQ1NTWLMzMzxjMzM7QzMzPgMjIygi4uLgAwMDAALy8vWElJSfZ9fX3/f39//39/f/9/f3//f39//4CAgP97e3v/XV1d/Dc3N/kzMzPPMzMz'+
    '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';

    createIcon(tr, 'Snahp', 'https://fora.snahp.eu/search.php?keywords='+filmTitle+' '+filmYear+'&sf=titleonly', img);

    // OpenSubtitles
    img = 'data:text/html;charset=utf-8;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAEgAAABIAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/'+
    '//////8AAAD///////8AAAD///////8AAAD///////8AAAD///////8AAAAAAAD///////8AAAD/'+
    '//////8AAAD///////8AAAD///////8AAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqr///////+qqqoAAAAAAADMzMzu7u7///////9V'+
    'VVUAAAAAAAAAAAAAAAB3d3eZmZkAAAAAAACZmZmIiIgAAACIiIgAAAAAAABERETd3d0AAAAAAAAA'+
    'AAAAAADu7u4REREAAAAAAAARERHu7u4AAABERET////////d3d0zMzMAAAAAAAAAAAAAAADd3d0i'+
    'IiIAAAAAAAARERHd3d0AAADd3d1EREQAAAAAAAAAAAAAAAAAAAAAAAAAAAB3d3eZmZkAAAAAAACq'+
    'qqp3d3cAAADMzMxEREQAAAARERHd3d0AAAAAAAAAAAAAAAAAAACZmZn///////+qqqoAAAAAAAAi'+
    'IiLu7u7////////u7u4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAD///////8AAAD///////8AAAD///////8AAAD///////8AAAD///////8AAAAAAAD/////'+
    '//8AAAD///////8AAAD///////8AAAD///////8AAAD///////8AAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

    createIcon(tr, 'OpenSubtitles', 'https://www.opensubtitles.org/en/search/sublanguageid-eng/imdbid-'+imdbId+'/sort-5/asc-0', img);  

    // Subscene
    img = 'data:text/html;charset=utf-8;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB'+
    'AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEB'+
    'AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQABADASIA'+
    'AhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAUH/8QAHBAAAgMBAQEBAAAAAAAAAAAABAUDBgcC'+
    'CAEJ/8QAFAEBAAAAAAAAAAAAAAAAAAAACP/EABwRAAMBAQADAQAAAAAAAAAAAAIDBAEFBhMUEf/a'+
    'AAwDAQACEQMRAD8ANH5gYrhvoz1D3mu3Rgv+JcyvjrJsxb3phmSLbNsUjASUXI3uhp45HVQWWjmZ'+
    'sRK3S8dt/syocFYOYUZGGQYfcKSpUT0PdaZVPPl68tfaxCoVWjFL/eptFPqNygXQSWHlDazVoh7W'+
    'mGkzcF1NgafYe3SeQawjPZl7cIFfN8s3Hywg0Jx99YqNllpjKrMAKhdMLdq193y3Q/pQU9c0KBK3'+
    'IWB2oZF3BPJKo6eLO4/snJsMTMgeEP7pv6he0KF7D1zLXOc8aE6ruOYPRcQ61TY4UUOx7UzqJLow'+
    '/R9B4rpRqyE5nM4+jgQzHs20w40rh0w+HtZlitPW3Vh3yMfrZGyL1lhtaEk7Q3CFiQB+zON27q2Y'+
    '1A1KIcNbSn3REe8/nQl4uCiyFfQV0PaGglLLalMHAJdDDn+pAz/ntUSaiicJkDEhSOGX/9k=';

    createIcon(tr, 'Subscene', 'https://subscene.com/subtitles/title?q='+filmTitle, img);

    //Youtube
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4jaWT0Q2DMAxEXyIGYAMygk'+
    'dgBTZgRDaAETpC2CAbXD+giKoJbYklK4niO8tn20mixnwVGmiOm3MtYPurL8Qv+/lASgBIQjAK9KeP'+
    'kkBgN8AvNw+ECgnMn+r+tBihL8kBQLjuQtfBPMM0QQjZkN/a2LbFr2uCdYVh2MqIMRvSAI8igRmkdJ'+
    'UieiBPDd/AsA1U3SC5Y5neR9mAnHLLKXMCTgQ3rXobnzl8hRUj722/AAAAAElFTkSuQmCC';
    // Extra space is needed after youtube else it won't show, not sure why, but who cares
    createIcon(tr, 'Youtube ', 'https://www.youtube.com/results?search_query='+filmTitle+' '+filmYear, img);

    //Vimeo 
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC'+
    'JElEQVR42pWTzWsTQRjGfzM7iWm6btNNLKnkUIpE7aGoiMSLgoggFJQeCiIKevLkVfDo1T/AgzcP'+
    'gp6rlFqkiAdti6BeqrYl1UJLKTUfaxo3uzMesttGCEpfGAae9+t5v4QxRrgzOKHLmAY7IVH8Q1qa'+
    'QCXYyK0x9e0yvuhfNn2iznMMBfYhxvBp+CQ3ZVDj6n6dAYRgtDzPOWkZcp2KQxZqIouTEMhO/FoW'+
    '516e3IleUjEWJHAVCk3YBi46pB8PUXAk6kofS9dX8AFeHGGoZJMGuDtA5uhnFjxDBtjLMpHFeTZM'+
    'wY6aeMkhbQy1W1kyJXuvsSlJstjDJoBQBLsBLthsP9rkdaAjeprDWYutp9usnFnkbWzX1PhlHw/A'+
    'BKjdyHdWUUBhpAfvbC92UkLpIMmXVdy8RTqKSzVgZitkJM4sRYgfgKcFTYBXdTwVac/bOAD3BxmI'+
    '6m3cWOU7GmkMNWHhq5YmsCQNHaI0NKbr+A8gr4HxfoalQJbsNoPZGk/mfnEMQUVrlNVESwCjUUIS'+
    'AHzdobLut9m4ioHbOXIaqIZMjy+3O79rfyCagpDoGDQa9cZjG0BHL4SFU4uUwy4LFzOQsbOQBA/X'+
    'WfN1eweqPlPHP/LhZ4tit41UEryYfizLv/FPf2F2UFB+v0NeCoqdDOO/ZahJK8Ok1lTgbxY/dkjP'+
    'NykKg9v1GCRL+Q3eCWOMcOZwSTJmifbY/nuJsJkSTG6M0vgDh+7cG4NkXB0AAAAASUVORK5CYII=';

    createIcon(tr, 'Vimeo','https://vimeo.com/search?q='+filmTitle, img);

    //ShortOfTheWeek

    img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAS9JREFUOE/Vk71KA0EUhb87u5ofQ'+
    '7YR0agBCy1sxDeQQHwan8Te1xAsbSx8AMEmoggGjYoQEBI3xGxmrszGxCKyBizEKQfOxzlnzkgcvy'+
    'q/OPLPAKrgHBgDImnw2SJ4oQji22q10CiC0kIKygaookaQZhvz0iXcWoXGJUm1gq4sQxBkAYTEvkF'+
    'oKB5fI2dX6ME+tpLDFvJIEIxcTb+CoAhW+9x1TiEQNp92MM0ObreKLpYYpfcFfALUZxzfDdsEvQts'+
    'ocLt4B61ykZUJzB5xE1PJnXgAX2nPA6HbJsHeD5Coxq9ch3UMm9KKO7buaWAxDnOuzEnnZjDtYhir'+
    '4ELl9DcOj4QX6anICnAqtIaJNz039mLysylomzhJPK4RG/Qg8K0m0lNP/6S2YaUgfl7wAecjaeRM9'+
    'cuQgAAAABJRU5ErkJggg==';

    createIcon(tr, 'ShortOfTheWeek', 'https://www.shortoftheweek.com/search/?q='+filmTitle, img);

    // Fanart.tv
    img = 'data:text/html;charset=utf-8;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAPjHGAD'+
    '/0hgK3rIZVL2YG7CmhRvqm3wc/pt8HP6mhRvqvZgbsOC0GVP/0hgK+McYAAAAAAAAAAAA1KoaAOq8GQDvwBkew5'+
    'wanJZ4HPKWeBz/rosb/7yXG/+8lxv/rYsb/5V3HP+WeBzywpsanO2+GR7nuhkA1KoaAOS3GQDuvxketpIbuo9zH'+
    'P+/mRr/4rUZ/+e5Gf/muRn/5rkZ/+i6Gf/ktxn/wJoa/45yHP+3kxu58MEZHua5GQD/1hgKw5wanJBzHP/Pphr/'+
    '5rkZ/+S3Gf/ktxn/5bcZ/+a5Gf/RqBr/m3wc/8igGv/Pphr/jnIc/8OcGpz/1hgK4LMZVJl6HPHBmxr/5rkZ/+S'+
    '3Gf/ktxn/5rkZ/96yGf+nhRv/X0wg/0I1JP+BZx3/57oZ/76ZGv+WeBzx3rIZVL6YG6+Gax//2a4a/+W4Gf/luB'+
    'n/5LcZ/7+ZGv9xWh7/VEQm/31oMf9cTCn/oYEb/+e5Gf/itRn/lXcc/72YG6+lhBzpe2Yt/6aIKP/Vqxv/0qka/'+
    '4puHP9RQSL/a1kt/5R8Nf+QeTT/VkYj/8ihGv/muBn/57kZ/66LG/+mhRvplnke/oVvMv+VfTX/eGIn/1FAHv9N'+
    'Pyf/iXIz/5uCNv+cgzb/eGQw/2tVH//fsxn/5bgZ/+W3Gf+sihz/l3kc/pd6Hv5uWy3/VUYo/1pIIP+HbBz/XEo'+
    'j/3llMP+agTb/m4I2/15OKv+Udhz/6LoZ/9asGv+wjyT/gGos/5V4Hv5pUx7pRzkg/4tvHP/TqRr/57kZ/8CaGv'+
    '9oUyD/algs/4x1NP9SQyT/uZUa/8CbH/+bgC3/mH82/31oL/+lhBzpdl4dr72XGv/ktxn/5bgZ/+S3Gf/muRn/0'+
    '6kZ/31kHv9OPyX/UEAi/5yAKP+WfTP/mYA2/5h/Nv94Yij/v5kar+e5GVPmuBnx5LcZ/+S3Gf/ktxn/5LcZ/+W4'+
    'Gf/eshn/alQd/1xMKv+YgDb/moE2/5uCNv+EbjL/jnIf8eK1GFPktxkK5LcZnOS3Gf/ktxn/5LcZ/+S3Gf/luBn'+
    '/2q8Z/11KH/96ZTD/nIM2/5uCNv+NdTT/emMl/8SdGpz/1hgK4bUZAOK1GR7jtxm55LcZ/+S3Gf/ktxn/5rkZ/7'+
    'uWGv9NPiT/kXk0/5mANv+FbzL/e2Ml/7eTG7nxwhge57kZAOS3GQDktxkA5LcZHuS3GZzktxny5LcZ/+a5Gf+Nc'+
    'Rz/TD4m/31oL/95Yyj/j3Mf8sSdGpzxwhge4rYZAP/NGAAAAAAAAAAAAOS3GQDktxkK5LcZVOW3GbDeshnqZVEe'+
    '/nVeHv6nhhzqv5kasOG1GFP/0hgK+McYAAAAAAAAAAAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA4AcAAA==';

    // If TMDb ID is not available, search using the film title on Fanart.tv
    if (tmdbId) {
        createIcon(tr, 'Fanart','https://fanart.tv/movie/'+tmdbId, img);
    }
    else {
        createIcon(tr, 'Fanart.tv ', 'https://fanart.tv/?s='+filmTitle+'&sect=1', img);
    }


    // MyAnimeList
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUuUaLy9foBPJpVb7D///8iS6AV'+
    'Q5wtT58uUaIuUaJkfLhDYqtyhrzL0uaDk8KQn8myvNnc4O06XammstSEcSWfAAAACXRSTlPX/////'+
    '///F9aTcVasAAAAcUlEQVQYlXWPCQ6EMAhFKQWUWtqp3v+uA8mYcf0EQl5YYQI9aJ5g1pMA9KIHIK'+
    'ws6i6RKqyjYR8q1Ua2zgoLUSHijcxK+kiA5Ma0rZR/oKYWRfQHGKBkB1ZzAGl7i88DRV+L3BcPgsj'+
    '7Yfx+6e256/tfYXEIGLx2LncAAAAASUVORK5CYII=';

    createIcon(tr, 'MyAnimeList','https://myanimelist.net/anime.php?q='+filmTitle, img);

    // Create a new element for the third set
    tab = li.insertBefore(document.createElement('li'), li.lastChild);
    div = tab.appendChild(document.createElement('div'));
        div.id = 'tor-icons'
    tr = div.appendChild(document.createElement('tr'));

   // Parental Guide
   img='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4nGNgoAYwNk7jt9G'+
   'NEiQFe6jkssMNSItu+Wqlk/AfhFcs2vH38oXbf0I8Sv+B+P5OBf8vnb/1Z/3KfX9hajobF/xdu2L3abgBs6euf+'+
   'NtlweWDHIv/X/8yKX/86ZvAPNBuKt54f/jRy//T45sBPOdTNL+r1q68zfcgLUr9n50Mc8ASzZVzvoPAhtXH4Abs'+
   'Hvbif+/fv7+HxdUC+ZH+VX937Xt6C+4AZmRTV9yY1v+g/CuFXv/H9109H9ZWjeYX5s74f/Rzcf+L5m8FswH4aVT'+
   '1v3fsnwXwoATfWu+/iqd9x+Gn+ZO/38zc8r/6xlT/t/ImPz/XtZUuBwM75u+EbcBD7Kn/j+X0g825ERy3/8r6ZO'+
   'IN6DBvfx/vVvZ/zz7gv/3s6f9r3Qt+d/kXv6/yqX0/48SHAZcnLzxC0wi277g//X0yf+LHIv+9/pU/98a3fH/W8'+
   'nc/4cSev7/KJ2L3YCbs7Z9RjZgdmD9/72xXf/nBjX83xXb+f9IQu//FJs8cHhgNeDB/F1wAwodiv5/KpoDZj/Pm'+
   '/G/wLHwf493NZh+njsDuwFHetfCDfiO5E8Y/lgIMRAZ756FZMC6vlUr9k1Y829//+r/xODdE1b/v3Tm6mWUDPX6'+
   '9Wvehw8fChKL////z0JyrsUGAG3u+1rvQVfoAAAAAElFTkSuQmCC';

    createIcon(tr, 'IMDb PG guide','https://www.imdb.com/title/tt'+imdbId+'/parentalguide', img);

   // Quotes
   img='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvElEQVR4nM3QwQnCQBAF0'+
   'AE70LM1qKBew0wgFZgCtAkLsBDR7CSSAmzAIrx59iQKM7lGFkHUkOzGi36Yy74PO7sAf5Mw0QlxEdsJUh2'+
   '3ckxkQazl6yDL3NcBWXaVgpHM14FY8s+CPfN1QNZ1U8HlEBgZIsupruDySh4r1xdcDsi6R6PmK4/ya5dYL'+
   '8SybOVxXnbCVEZo5IBGz+Hm1vN2Yl09P8foEbcyeH9zs0OUFX1KdEasU3tTZW2H/zZ3MYQWMoe75UQAAAA'+
   'ASUVORK5CYII=';

    createIcon(tr, 'IMDb Quotes','https://www.imdb.com/title/tt'+imdbId+'/quotes', img);

   // Wikipedia
   img='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVQ4jaWTMaoCMRCG/wnvDtELmHaxdAmIXcheZA9hYeMNxNZq'+
   'sc81lu0X+2VLTzBj8V5C8uQ9UAcG5k+YP5kvhPATzCx4IZRSBAD0TnNuQu82J5NPmgFADcMAay2UUjifzw'+
   'AA733S8zzDWgtrLeZ5xvV6xXK5hPcet9vte/5pmoSIJIQgURtj5HQ6CTOLc06maRJmFmaWuq5TjVg454qN'+
   'rutEay0hBDkej8V6NC4M+r4XANL3fdo0xogxJul4UK4TxPV6Decc9vt9ArTb7XC/35MehgFVVZUUc7cQgh'+
   'CRjOOYTtNaS9d1wszStm3BgpnlKzfz3mO1WuFyuWCz2aBpGlhrcTgcsN1uAQCLxeLvG0RIRJRmjS9U13XB'+
   '5wlinlrrgnTbtk/w/jWIDPL8PXvMzz9TzuLVZgB4AExRsO8ga8hoAAAAAElFTkSuQmCC';

    createIcon(tr, 'Wikipedia','https://en.wikipedia.org/w/index.php?search='+filmTitle+'&go=Go', img);

    applyCSS();

}