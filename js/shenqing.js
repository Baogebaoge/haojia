$(function(){
    let submit = $('.submit');
    let sure = $('.sure');

    submit.on('click',function(){
        $('.seccess').css({display:'block'})
    });
    sure.on('click',function(){
        $('.seccess').css({display:'none'})
    })
});