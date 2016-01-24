jQuery(document).ready(function () {
    var highlighted_states = { //Color-codes districts
        ga: '#e74c3c',
        nc: '#2ecc71',
        mi: '#34495e',
        in : '#ffa299',
        me: '#1D8251',
        vt: '#1D8251',
        nh: '#1D8251',
        ri: '#1D8251',
        ma: '#1D8251',
        ct: '#1D8251',
        nj: '#F0BB42',
        pa: '#F0BB42',
        de: '#F0BB42',
        or: '#f39c12',
        wa: '#f39c12',
        md: '#9b59b6',
        va: '#9b59b6',
    }
    jQuery('#map').vectorMap({ //Initialize JQVMap
        map: 'usa_en',
        onRegionClick: function (event, code, region) {
            window.open("https://my.usfirst.org/myarea/index.lasso?page=searchresults&programs=FRC&reports=teams&sort_teams=number&results_size=250&omit_searchform=1&season_FRC=2016&area=" + code.toUpperCase() + "-USA", "_blank");
        },
        enableZoom: false,
        showTooltip: true,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderOpacity: 1,
        borderWidth: 1,
        color: '#4eb0e3',
        colors: highlighted_states,
        hoverOpacity: '0.7',
        selectedColor: '#4eb0e3',
        onLabelShow: function (event, label, code) {
            //            /* Hardcoding labels for states with only 1 Team (vs. "X Teams") */
            if (code == 'mt') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Montana</strong>" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Team" + "\n" + "<font style='font-weight: 900;'>0</font>" + " Regionals");
            }
            if (code == 'ne') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Nebraska</strong>" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Team" + "\n" + "<font style='font-weight: 900;'>0</font>" + " Regionals");
            }
            if (code == 'ak') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Alaska</strong>" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Team" + "\n" + "<font style='font-weight: 900;'>0</font>" + " Regionals");
            }
            if (code == 'id') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Idaho</strong>" + "\n" + "<font style='font-weight: 900;'>15</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'nv') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Nevada</strong>" + "\n" + "<font style='font-weight: 900;'>10</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'ut') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Utah</strong>" + "\n" + "<font style='font-weight: 900;'>21</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'wi') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Wisconsin</strong>" + "\n" + "<font style='font-weight: 900;'>48</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'al') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Alabama</strong>" + "\n" + "<font style='font-weight: 900;'>12</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'la') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Louisiana</strong>" + "\n" + "<font style='font-weight: 900;'>35</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'hi') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Hawaii</strong>" + "\n" + "<font style='font-weight: 900;'>26</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional");
            }
            if (code == 'pa') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Pennsylvania</strong>" + "\n" + "<font style='font-weight: 900;'>73</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional" + "\n" + "<font style='font-weight: 900;'>4</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>MAR</font>" + " District Championships");
            }
            if (code == 'mo') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Missouri</strong>" + "\n" + "<font style='font-weight: 900;'>70</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " Regional" + "\n" + "<font style='font-weight: 900;'><em>FIRST®</em></font>" + " Championships");
            }

            if (code == 'or') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Oregon</strong>" + "\n" + "<font style='font-weight: 900;'>43</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>3</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>PNW</font>" + " District Championships");
            }

            if (code == 'wa') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Washington</strong>" + "\n" + "<font style='font-weight: 900;'>114</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>6</font>" + " District Events");
            }

            if (code == 'mi') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Michigan</strong>" + "\n" + "<font style='font-weight: 900;'>412</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>21</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>FIM</font>" + " District Championships");
            }

            if (code == 'in') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Indiana</strong>" + "\n" + "<font style='font-weight: 900;'>49</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>3</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>Indiana</font>" + " District Championships");
            }

            if (code == 'ga') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Georgia</strong>" + "\n" + "<font style='font-weight: 900;'>65</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>4</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>Peachtree</font>" + " District Championships");
            }

            if (code == 'nc') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>North Carolina</strong>" + "\n" + "<font style='font-weight: 900;'>52</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>4</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>NC</font>" + " District Championships");
            }

            if (code == 'va') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Virginia</strong>" + "\n" + "<font style='font-weight: 900;'>78</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>4</font>" + " District Events");
            }

            if (code == 'md') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Maryland</strong>" + "\n" + "<font style='font-weight: 900;'>41</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>3</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>Chesapeake</font>" + " District Championships");
            }

            if (code == 'de') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Delaware</strong>" + "\n" + "<font style='font-weight: 900;'>4</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>0</font>" + " District Events");
            }

            if (code == 'nj') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Delaware</strong>" + "\n" + "<font style='font-weight: 900;'>77</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>4</font>" + " District Events");
            }

            if (code == 'ct') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Connecticut</strong>" + "\n" + "<font style='font-weight: 900;'>48</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>2</font>" + " District Events" + "\n" + "<font style='font-weight: 900;'>NE</font>" + " District Championships");
            }

            if (code == 'ri') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Rhode Island</strong>" + "\n" + "<font style='font-weight: 900;'>6</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " District Event");
            }

            if (code == 'ma') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Massachusetts</strong>" + "\n" + "<font style='font-weight: 900;'>68</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>f</font>" + " District Events");
            }

            if (code == 'vt') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Vermont</strong>" + "\n" + "<font style='font-weight: 900;'>4</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>0</font>" + " District Events");
            }

            if (code == 'nh') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>New Hampshire</strong>" + "\n" + "<font style='font-weight: 900;'>32</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>2</font>" + " District Events");
            }

            if (code == 'me') {
                label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>Maine</strong>" + "\n" + "<font style='font-weight: 900;'>24</font>" + " Teams" + "\n" + "<font style='font-weight: 900;'>1</font>" + " District Event");
            }
        },
        onRegionOver: function (event, code, region) {
            document.body.style.cursor = "pointer";
        },
        onRegionOut: function (element, code, region) {
            document.body.style.cursor = "default";
        },
    });
});

/*

map.label.html("<strong style='font-size: 14px; font-weight: 900; color: #4eb0e3;'>" + mapData.pathes[code].name + "</strong>" + "\n" + "<font style='font-weight: 900;'>" + mapData.pathes[code].teams + "</font>" + " Teams");

*/