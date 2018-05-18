$(function(){
    $(".col-md-2 span").hover(function(){
        $(this).stop().animate({"margin-top":"-300px"},300)
    },function(){
        $(this).stop().animate({"margin-top":"0"},300)
    })
});
$(function(){
    $('.slider .icon li').not('.up,.down').mouseenter(function(){
        $('.slider .info').addClass('hover');
        $('.slider .info li').hide();
        $('.slider .info li.'+$(this).attr('class')).show();//.slide .info li.qq
    });
    $('.slider').mouseleave(function(){
        $('.slider .info').removeClass('hover');
    });
    $('#btn').click(function(){
        $('.slider').toggle();
        if($(this).hasClass('index_cy')){
            $(this).removeClass('index_cy');
            $(this).addClass('index_cy2');
        }else{
            $(this).removeClass('index_cy2');
            $(this).addClass('index_cy');
        }
    });
});