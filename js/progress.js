$(function(){
    let add=$('.jia');
    add.on('click',function(){
        $('.jin').css({display:'block'})
    })
    $(".jin").on('click',function(){
        $(this).css({display:'none'})
    })
});