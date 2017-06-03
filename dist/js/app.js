'use strict';

$(document).ready(function () {
    console.log('Ready to rock');

    new WOW().init();

    $('[data-scroll]').on('click', function (event) {
        var rolarPara = $(this).data('scroll');
        console.log(rolarPara);

        if ($(rolarPara)[0]) {
            $('html, body').animate({
                scrollTop: $(rolarPara).offset().top - 60
            }, 1000);
        }

        event.preventDefault();
    });

    var posicaoLimiar = $('#banners').offset().top;

    $(window).scroll(function (event) {
        if ($(window).scrollTop() > posicaoLimiar) {
            $("#navbar").addClass('toggle');
        } else {
            $("#navbar").removeClass('toggle');
        }
    });

    $('#slider-produtos').slick({
        infinite: true,
        arrows: false,
        dots: true
    });

    $('#slider-depoimentos').slick({
        infinite: true,
        arrows: false
    });

    // Mapa 

    var mapa = new GMaps({
        div: "#mapa",
        lat: -22.5075378,
        lng: -44.0931215
    });

    var mapaStyle = [{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "saturation": "-100"
        }, {
            "lightness": "30"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "gamma": "0.00"
        }, {
            "lightness": "74"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "color": "#27ae60"
        }, {
            "saturation": "-15"
        }, {
            "lightness": "40"
        }, {
            "gamma": "1.25"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "color": "#27ae60"
        }, {
            "lightness": "80"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e5e5e5"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#efefef"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }];

    mapa.addStyle({
        styledMapName: "Styled Map",
        styles: mapaStyle,
        mapTypeId: "map_style"
    });

    mapa.setStyle("map_style");
});