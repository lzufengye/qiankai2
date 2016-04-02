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

    var create_div= function(){
        var list_div=$('<div></div>');                //创建一个list-wrap-item
        list_div.addClass("list-wrap-item");         //添加css样式

        var left_div=$('<div></div>');                //创建一个hot-view
        left_div.addClass("hot-view");                //添加css样式
        var left_div_img=$('<img>');
        var left_div_title=$('<div></div>');
        left_div_title.addClass("viewName");
        left_div_img.appendTo(left_div);
        left_div_title.appendTo(left_div);
        left_div.appendTo(list_div);

        var right_div=$('<div></div>');               //创建一个travel-show-right
        right_div.addClass("travel-show-right");     //添加css样式
        var right_div_lab=$('<label></label>');
        var right_div_abs=$('<div></div>');
        right_div_abs.addClass("abstract");
        right_div_lab.appendTo(right_div);
        right_div_abs.appendTo(right_div);
        right_div.appendTo(list_div);

        var more_div=$('<div></div>');               //创建一个more
        more_div.addClass("more");                    //添加css样式
        var more_link=$('<a href="">了解更多</a>');
        more_link.appendTo(more_div);
        more_div.appendTo(list_div);

        $(".list-wrap").append(list_div);
    };

    $.ajax({
        url: "http://localhost:3000/"+kind,
        method: "post",
        dataType: 'json',
        success: function (data) {

            var m=data.length;
            for (var i=0;i<m;i++){
                create_div();
            }

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
