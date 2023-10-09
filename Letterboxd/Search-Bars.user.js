// ==UserScript==
// @name        Letterboxd Search Bars
// @namespace   https://github.com/emukus
// @description Adds a search bar to various sites on Letterboxd
// @author      Lelobster, edited by emukus
// @icon        https://letterboxd.com/favicon.ico
// @match       *://letterboxd.com/film/*
// @version     1.4
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

    // Look for the IMDb ID in the button
    var imdbElement =  document.querySelector('[data-track-action="IMDb"]')
    if (imdbElement != 'undefined' && imdbElement != null) {
        // Get imdb id from the button
        buttons = document.getElementsByClassName('micro-button track-event');
        imdbBtn = buttons[0].href.match(/tt(\d{7})/);
        var imdbId = imdbBtn[1]
        console.log('IMDb ID:', imdbId)
    } else {
        // In the rare case where a film doesn't have a imdb page
        // use just the title instead
        var imdbId = filmTitle
        console.log('Film has no IMDb page, using filmTitle')
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

    createIcon(tr, 'RARBG','https://therarbg.com/get-posts/keywords:'+filmTitle+' '+filmYear+'/', img);

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

    createIcon(tr, 'Pahe','http://www.pahe.li/?s='+filmTitle.replace(/\s/g, "+"), img);

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

    // YTS
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEUeHyEeIB8fHyEfHx8eHiAe'+
    'HyMdHiAeHh4cICEdHx4fHx0eIB0cIB8gHh8fHSAbIBwXURcAvwAbNB4bKx4ZRhsYVRkWahUcJh4N'+
    'igwdKiAJlwcUZRYTcBUQgBARdxMOlA0AqAEYORwAtQQUWxkHoAoUYBYFsQcAxQAdMx4C1wMbQRwA'+
    'zAAPhA8JqwoDwgNhHtUJAAAA00lEQVQYlRWP2XaDMBBDNTMe2ywxOCshJCEGElpK///zSl/vkc6V'+
    'QKz7AzgnUhAVBNH6KACXVncw7IDTmeGt512eAVZxaa4QatobuvbuiHB7lJkPz759pTggAONkBHqK'+
    '6Z0eRQDjXXtDckkx9qWxGW1g8+Wu/cS9YflPTFIqU7O0xTZpQ2tTCWnWL5MP5NmiS3MQwtYQYhcO'+
    'uKSWq/L1NZJR6HWAnWKDcP2evXI2NzN2+ojjka2Twk1jrdsrTGnp7133s651rhATquq8/n7iOMBA'+
    '/gDR8Q8MVeL5jwAAAABJRU5ErkJggg==';

    createIcon(tr, 'YTS','https://yts.ag/browse-movies/'+filmTitle+'/all/all/0/latest/0/all', img);

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
   '///////////zAAAAAA/f39nf/////o6v3/WGPu/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/2x28P////////////39/ZgAAAAAAAAAAP///wr9/f3D//////n5/v+lrPb/XWnu/zxK6/86R+r/Wmbu/6Kp9f/5+f7///////39/cH+/v4JAAAAAAAAAAAAAAAA////Cv39/Z3///////////////////////////////////////////39/Zn+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Mv39/Zn9/f3b/f39+v39/fr9/f3a/f39mP///zAAAAAAAAAAAAAAAAAAAAAA8A8AAMADAACAAQAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIABAADAAwAA8A8AAA==';

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

    createIcon(tr, 'PSARips', 'https://psa.re/?s='+filmTitle, img);

    // Fora - Snahp
    img = 'data:text/html;charset=utf-8;base64,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';

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

    // BluRay
    img = 'data:text/html;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA6'+
    'klEQVQ4je3Rr0oEYRQF8N+3TFhElg0iImL2CVazIANuEdRqmSfQN5B9ArFomCI2g8kwoGDSYjKJGG'+
    'UwLSiLTHIM+4VdWBbNessNl/PnnsP/hGnHNK9bWMICWnjFU5GFwRhBmtc97KBCt8hCOYFsHlvYRx+'+
    'nOA9pXndwjwbOcIkEn3jD86himtdNXGEdJw0cRXAfJZaxiFVc4D3N65sIVGShwnHk20vQwzZWsIkB'+
    'vtCMDm6jYjXy0UbcD1NDnJDDLA5xgDvsJj8AtdFBF2t4jA6uiyyM1xgV5jBjWFvbMNASL0UWPn7j+'+
    'K/MN5CHQLPEzoOzAAAAAElFTkSuQmCC';

    createIcon(tr, 'BluRay', 'http://www.blu-ray.com/search/?quicksearch=1&quicksearch_country=US&quicksearch_keyword='+filmTitle+'&section=theatrical', img);

    applyCSS();

}
