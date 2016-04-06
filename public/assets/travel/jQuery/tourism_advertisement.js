/**
 * Created by 123 on 2016/4/7.
 */
$(function() {

    var create_ad_item= function(){

        var item_li=$('<li></li>');
        item_li.addClass("hiSlider-item");
        var item_link=$('<a></a>');
        var item_img=$('<img>');
        item_img.addClass("img-item");
        item_img.appendTo(item_link);
        item_link.appendTo(item_li);

        $("#tourism_ad").append(item_li);
    };


    $.ajax({
        url: serverUrl+"/api/tourism_advertisements",
        method: "post",
        dataType: 'json',
        success: function (data) {

            var m=data.length;
            //console.log(m);
            for (var i=0;i<m;i++){
                //console.log(i);
                create_ad_item();
            }

            $(".img-item").each(function(index){
                //console.log(data[index].imageUrl);
                $(this).attr("src",data[index].imageUrl);
            });
        }
    });

});