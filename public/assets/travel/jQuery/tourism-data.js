/**
 * Created by 123 on 2016/3/10.
 */
/**
 *
 * 获取json数据
 */
$(function() {

    var create_hot_div= function(){

        var left_div=$('<div></div>');                //创建一个hot-view
        left_div.addClass("hot-view");                //添加css样式
        var left_div_img=$('<a><img></a>');
        var left_div_title=$('<div></div>');
        left_div_title.addClass("viewName");
        left_div_img.appendTo(left_div);
        left_div_title.appendTo(left_div);

        $("#hot-view").append(left_div);
    };

    var create_village_div= function(){

        var left_div=$('<div></div>');                //创建一个hot-view
        left_div.addClass("village-view");            //添加css样式
        var left_div_img=$('<a><img></a>');
        var left_div_title=$('<div></div>');
        left_div_title.addClass("viewName");
        left_div_img.appendTo(left_div);
        left_div_title.appendTo(left_div);

        $("#village-view").append(left_div);
    };

    $.ajax({
        url: serverUrl+"api/tourisms?tourism_tag=hot",
        method: "get",
        dataType: 'json',
        success: function (data) {

            var tourisms = data['tourisms'];
            var m=tourisms.length;
            for (var i=0;i<m;i++){
                //console.log(i);
                create_hot_div();
            }

            $(".hot-view .viewName").each(function(index){
                $(this).html(tourisms[index].title);
            });
            $(".hot-view img").each(function(index){
                $(this).attr("src",tourisms[index].image);
            });
            $(".hot-view a").each(function(index){
                $(this).attr("id",tourisms[index].id);
            }).click(function(){
                var temp_id = $(this).attr("id");
                $(this).attr("href","/view.html?kind=hots&id="+temp_id);
            })
        }
    });

    $.ajax({
        url: serverUrl+"api/tourisms?tourism_tag=village",
        method: "get",
        dataType: 'json',
        success: function (data) {

            var tourisms = data['tourisms'];
            var m=tourisms.length;
            for (var i=0;i<m;i++){
                //console.log(i);
                create_village_div();
            }

            $(".village-view .viewName").each(function(index){
                $(this).html(tourisms[index].title);
            });
            $(".village-view img").each(function(index){
                $(this).attr("src",tourisms[index].image);
            });
            $(".village-view a").each(function(index){
                $(this).attr("id",tourisms[index].id);
            }).click(function(){
                var temp_id = $(this).attr("id");
                $(this).attr("href","/view.html?kind=villages&id="+temp_id);
            })
        }
    });
});
