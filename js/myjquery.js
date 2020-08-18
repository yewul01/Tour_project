(function($){

    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on') ) {
            $('.nav').css({
                display:'block'
            }).animate({
                right:'0px'
            }, 500)
        } else {
            $('.nav').animate({
                right:'-320px'
            }, 500, function(){
                $(this).css({
                    display:'none'
                })
            })
        }
        $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)
    
    function init(){
         var winWidth = $(window).innerWidth()
         if (winWidth>800 && !$('html').hasClass('pc')) {
             $('#header').removeClass('on')
             $('.outlayer').removeClass('on')
             $('nav').css({
                 display:'block',
                 right:'0px'
             })
             $('html').addClass('pc')
         } else if (winWidth<800 && $('html').hasClass('mobile')) {
             $('#header').removeClass('on')
             $('.nav').css({
                 display:'none',
                 right:'-320px'
             })
             $('html').addClass('mobile').removeClass('pc')
         }
    }

    $(window).resize(function(){
        init()
    })
        

    // 메인슬라이드 : 슬릭슬라이더 연결
    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:2500,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:false,
        pauseOnFocus:false,
        cssEase:'ease',
        draggable:true,
        fade:false,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
            breakpoint:801,
            settings:{
                arrows:false,
            }
        }]
    })


    // toggle: 1회 클릭시 1번째 function문 수행 
    // 2회 클릭시 2번째 function문 수행 3회 클릭시 다시 되돌아옴
    $('.plpa').on('click',function(){
        if ($(this).find('i').hasClass('fa-pause')){
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $('.slide-inner').slick('slickPause')
        } else {
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $('.slide-inner').slick('slickPlay')
            }
        })

    // 포트폴리오 갤러리 클릭 이벤트시 팝업박스 작동
       var href,src,alt
    $('.gallery > li > a').on('click',function(e){
        e.preventDefault();
        $('.galleryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        console.log(alt)
    })
    $('.galleryPopup .close').on('click',function(){
        $('.galleryPopup').removeClass('on')
    })
})(jQuery)