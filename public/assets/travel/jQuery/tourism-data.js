/**
 * Created by 123 on 2016/3/10.
 */
/**
 *
 * 获取json数据
 */
$(function() {
    $.ajax({
        url: "http://localhost:3000/hots",
        method: "post",
        dataType: 'json',
        success: function (data) {
            $(".hot-view .viewName").each(function(index){
                console.log(data[index].title);
                $(this).html(data[index].title);
            });
            $(".hot-view img").each(function(index){
                console.log(data[index].images[0]);
                $(this).attr("src",data[index].images[0]);
            });
            $(".hot-view a").each(function(index){
                $(this).attr("id",data[index].id);
            }).click(function(){
                var temp_id = $(this).attr("id");
                $(this).attr("href","http://localhost:63342/qiankai/qiankai/view.html?kind=hots&id="+temp_id);
            })
        }
    });

    $.ajax({
        url: "http://localhost:3000/villages",
        method: "post",
        dataType: 'json',
        success: function (data) {
            $(".village-view .viewName").each(function(index){
                console.log(data[index].title);
                $(this).html(data[index].title);
            });
            $(".village-view img").each(function(index){
                console.log(data[index].images[0]);
                $(this).attr("src",data[index].images[0]);
            });
            $(".village-view a").each(function(index){
                $(this).attr("id",data[index].id);
            }).click(function(){
                var temp_id = $(this).attr("id");
                $(this).attr("href","http://localhost:63342/qiankai/qiankai/view.html?kind=villages&id="+temp_id);
            })
        }
    });
});
