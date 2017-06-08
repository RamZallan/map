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
            var width = $(window).width();
            if (width > 768) {
              window.open("https://my.usfirst.org/myarea/index.lasso?page=searchresults&programs=FRC&reports=teams&sort_teams=number&results_size=250&omit_searchform=1&season_FRC=2016&area=" + code.toUpperCase() + "-USA", "_blank");
            }

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
