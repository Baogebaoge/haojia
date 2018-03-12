$(function(){
    $('.figure-1>h3').on('click',function(){
        if($(this).text()=='收藏'){
            $(this).text('已收藏')
            $(this).prev().css({display:'none'})
        }else{
            $(this).text('收藏')
            $(this).prev().css({display:'block'})
        }
    })

})