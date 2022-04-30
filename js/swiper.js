var slider = new Swiper(".swiper-container",{
    slidesPerView : 'auto',
    spaceBetween : 150,
    centeredSlides:true,
    mouseWheel : true
})

slider.on('slideChange',function(){
    TweenMax.to('.slide-text span', .2, {
        y: '-100px',
    })
    TweenMax.to('.slide-number span', .2, {
        x: '-100px',
    })
    TweenMax.to('.swiper-slide active', .5, {
        scale: .85
    })
})

slider.on('slideChangeTransitionEnd',function(){
    TweenMax.to('.slide-text span', 0.2, {
        y: 0,
        delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
        y: '100px',
    })
    TweenMax.to('.slide-number span', 0.2, {
        x: 0,
        delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
        x: '100px',
    })
    TweenMax.to('.swiper-slide-active',.5,{
        scale:1,
        ease : Power4.easeout,
    })

    TweenMax.to('.swiper-slide-active .slde-text',0,{
        autoAlpha : 1,
    })
    TweenMax.to('.swiper-slide-active .slde-number',0,{
        autoAlpha : 1,
    })

    TweenMax.to('.swiper-slide-next .slde-text',0,{
        autoAlpha : 0,
    })
    TweenMax.to('.swiper-slide-prev .slde-text',0,{
        autoAlpha : 0,
    })
    TweenMax.to('.swiper-slide-next .slde-number',0,{
        autoAlpha : 0,
    })
    TweenMax.to('.swiper-slide-prev .slde-number',0,{
        autoAlpha : 0,
    })
})

TweenMax.to('.swiper-slide-next .slde-text',0,{
    autoAlpha : 0,
})
TweenMax.to('.swiper-slide-prev .slde-text',0,{
    autoAlpha : 0,
})
TweenMax.to('.swiper-slide-next .slde-number',0,{
    autoAlpha : 0,
})
TweenMax.to('.swiper-slide-prev .slde-number',0,{
    autoAlpha : 0,
})

TweenMax.to('.swiper-slide',0,{
    scale: .85,
})
TweenMax.to('.swiper-slide-active',0,{
    scale:1,
})