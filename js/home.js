$(function(){
    let add=$('.add');
    add.on('click',function(){
        $('.jia').css({display:'block'})
    })
    $(".big").on('click',function(){
        $(this).css({display:'none'})
    })
});