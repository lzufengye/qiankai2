/**
 * Created by hongluo on 2016/3/6.
 * 顶部工具栏
 */
$(document).ready(function(){
    var barnum;
    $('.bar-right>li[id]').hover(function(){
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        barnum = Obj.substring(3, Obj.length);
        $('#bar-'+barnum).slideDown(300);
    },function(){
        /*下拉框消失*/
        $('#bar-'+barnum).hide();
    });

    $('.hidden-barBox').hover(function(){
        $('#br-'+barnum).removeClass().addClass('barSelected');
        $(this).show();
    },function(){
        $(this).slideUp(200);
        $('#br-'+barnum).removeClass();
    });
});
