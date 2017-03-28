$(document).ready(function() {

    function matchHeight() {
        var getWindowWidth = $(window).width();
        var getWindowHeight = $(window).height();
        $('.parent').each(function() {
            $(this).find('.child').matchHeight({
                byRow: true,
            });
        });
    }
    matchHeight();

    function fullWidthToggleMenu() {
        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
            $("body").toggleClass('scrol-event')
        });

    }
    fullWidthToggleMenu();


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 50,
        autoplay: 4000,
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    $("#clearable").click(function() {
        $(".custom-form-search").val('');
    });

    $('#focusin').click(function() {
        setTimeout(function() {
            $('#tofocus').focus();
        }, 500);
    });
});
