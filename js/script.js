



// ============ for mobile  animation pages ============
$(document).ready(function () {

    if (screen.width <= 768 || screen.height < 625) {
        var bg_attr = $('body').find("[data-show='show-anim']");
        $('.footer-container').removeClass('white-cl-scrol')
        bg_attr.each(function () {
            var position = $(this).offset();
            if ($(window).scrollTop() > (position.top - $(window).innerHeight()) + 100) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show')
            }
        })

    } else {
        var bg_attr = $('body').find("[data-show='show-anim']");
        bg_attr.each(function () {
            $(this).removeClass('show')
        })
    }

    $(window).on('scroll', function () {

        if (screen.width <= 768 || screen.height < 625) {
            var bg_attr = $('body').find("[data-show='show-anim']");
            bg_attr.each(function () {
                var position = $(this).offset();
                if ($(window).scrollTop() > (position.top - $(window).innerHeight()) + 100) {
                    $(this).addClass('show');

                } else {
                    $(this).removeClass('show')
                }
            })
        } else {
            var bg_attr = $('body').find("[data-show='show-anim']");
            bg_attr.each(function () {
                $(this).removeClass('show')
            })
        }
    });
});



// ==================== icons_effect ===================

var windowWidth = $(window).width();
var icons = $('.our_company_icon');
for (var i = 0; i < icons.length; i++) {
    var rnd_number = Math.random() * 0.1;
    $(icons[i]).attr('data-num', rnd_number);
}

$('.scroller').mousemove(function (event) {
    // console.log(rnd_number);
    var moveX, moveY;
    $('.our_company_icon').each(function () {
        var icons_num = $(this).attr('data-num');
        moveX = (($(window).width() / 2) - event.pageX) * icons_num;
        moveY = (($(window).height() / 2) - event.pageY) * icons_num;
        $(this).css('margin-left', moveX + 'px');
        $(this).css('margin-top', moveY + 'px');
    })
});

// =================== menu bottom ===================

$(document).ready(function () {

    $('.tooltip').on('click', function () {
        $(".mySidenav").css({ "height": '100%' });
        $(".mySidenav").addClass('animation-hite');
        $('body').css({ overflow: 'hidden ' })
        // $('header').css({'height':'100%'})
    })

    $('.closer').on('click', function () {
        $(".mySidenav").css({ "height": '' });
        $(".mySidenav").removeClass('animation-hite');
        $('body').css({ overflow: 'visible' })

        // $('header').css({'height':'100%'})
    })
})


// ============ maney cards hover ============

$(document).ready(function () {

    $('.maney-card').hover(function () {
        $(this).find('.block-for-mn-snd-rng').css('display', 'none');
        $(this).find('.block-to-by').css('display', "flex");
    }, function () {
        $(this).find('.block-for-mn-snd-rng').css('display', 'block');
        $(this).find('.block-to-by').css('display', "none");
    })
})


//  ============ mask  for tell ============

$(document).ready(function () {
    $("#phone-1").mask('+7(999)999-99-999')
    $("#phone-2").mask('+7(999)999-99-999')
})

