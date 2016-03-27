/**
 * Created by 123 on 2016/3/10.
 */
/**
 *
 * 获取json数据
 */
$(function() {
    $.extend({
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function (name) {
            return $.getUrlVars()[name];
        }
    });

    var kind = $.getUrlVar('kind');

    $.ajax({
        url: "http://localhost:3000/"+kind,
        method: "post",
        dataType: 'json',
        success: function (data) {
            $(".hot-view .viewName").each(function(index){
                $(this).html(data[index].title);
            });
            $(".hot-view img").each(function(index){
                $(this).attr("src",data[index].images[0]);
            });
            $(".travel-show-right label").each(function(index){
                $(this).html(data[index].title);
            });
            $(".travel-show-right .abstract").each(function(index){
                $(this).html(data[index].description);
            });
            $(".more a").each(function(index){
                $(this).attr("id",data[index].id);
            }).click(function(){
                var temp_id = $(this).attr("id");
                $(this).attr("href","http://localhost:63342/qiankai/qiankai/view.html?kind="+kind+"&id="+temp_id);
            })
        }
    });

});
