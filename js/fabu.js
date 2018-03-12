$(function(){
    let files = $(':file');
    let img = $('.pictures');

    files.on('change',function(){
        let data = this.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = function(e){
            img.attr('src',e.currentTarget.result);
        }
    })
})