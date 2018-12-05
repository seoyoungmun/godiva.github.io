$(window).resize(function(){
    if($(this).width()>1024){
        $('.mask').stop().fadeOut();
        $('.user').removeClass('on');
        $('.signin_signup').css({'display':'none'});
        $('.search').removeClass('on');
    }
    if($(this).width()<992){
        $('.navbar_nav_wrap').css({'display':'block'});
        $('.navbar-bg').css({'left':'-320px'});
    }
    if($(this).width()>992){
        $('.find_form').css({'display':'none'});
        $('.navbar_nav_wrap').css({'display':'none'});
        $('.navbar-bg').css({'left':'0'});
    }
})

    $('.nav_open').click(function(){
            $('.nav_open').addClass('on');
            $('.navbar-bg').stop().animate({'left':0});
            $('.mask').stop().fadeIn();

            $('.sub').css({'display':'none'});
            $('.navbar-nav>li>a').removeClass('on');
    })
    $('.mask,.close_btn').click(function(){
            $('.nav_open').removeClass('on');
            $('.navbar-bg').stop().animate({'left':'-320px'});
            $('.mask').stop().fadeOut();
    })

    $('.open_2depth').click(function(){
       $('.depth_1>li').css({'display':'none'});
       $('.navbar-nav>li').css({'display':'none'});
        $(this).next().css({'display':'block'});
    })

    $('.title').click(function(){
        $('.depth_1>li').css({'display':'block'});
        $('.navbar-nav>li').css({'display':'block'});
        $('.depth_2').css({'display':'none'});
    })

    $('.user').click(function(){
        if($('.search').hasClass('on')){
            $('.search').removeClass('on');
            $('.find_form').slideUp();
        }
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.signin_signup').slideUp();
        }
        else {
            $(this).addClass('on');
            $('.signin_signup').slideDown();
        }
    })
    $('.search').click(function(){
        if($('.user').hasClass('on')){
            $('.user').removeClass('on');
            $('.signin_signup').slideUp();
        }
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.find_form').slideUp();
        }
        else {
            $(this).addClass('on');
            $('.find_form').slideDown();
        }
    })
$(window).scroll(function(){
    if($(document).scrollTop()>0){
        $('.header').css({'display':'none'});
    } else if($(document).scrollTop()==0){
        $('.header').css({'display':'block'});
    }
})

/*
$('.search_btn').click(function(){
    $('.find_form').slideToggle('fast');
})
*/
/*
$('.country').click(function(){
    if($('.select').hasClass('on')){
        $('.select').animate({'top':0});
        $('.select').removeClass('on');
        $('.select').css({'display':'none'});
    } else {
        $('.select').animate({'top':'-48vw'});
        $('.select').addClass('on');
        $('.select').css({'display':'block'});
    }
})
*/
    var myVar;
    $('.shop_godiva').mouseenter(function(){
        if($(window).width()<1024){
            return false;
        }
        myVar = setInterval(snowfall, 700);
        $(this).css({'color':'#cfb56a'});
        $('.navbar-bg-mask').animate({'opacity':'1'},'fast');
        $('.navbar_nav_wrap').fadeIn('fast');
        /*$('.navbar_nav_wrap li:not(.title)').slideDown();*/
    })

    $('.navbar_nav_wrap').mouseleave(function(){
        if($(window).width()<1024){
            return false;
        }
        clearInterval(myVar);
        $('#flake').css({'display':'none'});
        $('.shop_godiva').css({'color':'#CDC6C1'});
        $('.navbar-bg-mask').animate({'opacity':'0'},'fast');
        $('.navbar_nav_wrap').fadeOut('fast');
    })

    var $flake = $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
    documentHeight 	= 670,
    documentWidth	= $(window).width();

    function snowfall(){
        var startPositionLeft = Math.random() * documentWidth - 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = 10 + Math.random() * 20,
        endPositionTop = documentHeight - 40,
        endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
        durationFall = documentHeight * 10 + Math.random() * 5000;
        $flake
            .clone()
            .appendTo('body')
            .css(
                {
                    left: startPositionLeft,
                    opacity: startOpacity,
                    'font-size': sizeFlake,
                    color: "#ffffff"
                }
            )
            .animate(
                {
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                },
                durationFall,
                'linear',
                function() {
                    $(this).remove()
                }
            );
    }
    $('.instagram .insta').mouseenter(function(){
        if($(window).width()<1024){
            return false;
        }
        $(this).find('.hover_img').stop().fadeIn('slow');
        $(this).find('img').stop().animate({'bottom':'-7px'});
    })

    $('.instagram .insta').mouseleave(function(){
        $(this).find('.hover_img').stop().fadeOut('slow');
        $(this).find('img').stop().animate({'bottom':'-200px'});
    })
    $('.search').click(function(){
        if($(window).width()<1024){
            return false;
        }
                       $('.find_form').slideToggle();
                       })

$('.row4 li').css({'display':'none'});
$('.row4 .now_lang').click(function(){
    $('.row4 li').slideToggle();
    return false;
})
