/**
 * Created by hongluo on 2016/3/6.
 * 右导航栏
 */
$(document).ready(function(){
//    nav-li hover e
    var num,barnum;
    $('.nav-right>li[id]').mouseenter(function(){
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#list-'+num).slideDown(200);
    }).mouseleave(function(){
        /*下拉框消失*/
        $('#list-'+num).hide();
    });
//    hidden-box hover e
    $('.hidden-box').mouseenter(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).slideUp(200);
    });
});
