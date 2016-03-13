/**
 * Created by 123 on 2016/3/10.
 */
/**
 *
 * 自驾旅游导航栏
 */
$(document).ready(function(){
    $("#kaixiangouwu").on('click', function(){
        $.ajax({
            url: 'http://qiankai-admin.daoapp.io/api/products?hot=true',
            dataType: 'json',
            cache:false,
            success: function (data) {
                $(".travel-show img").each(function (index){
                    console.log($(this));
                    $(this).attr("src",data[index].image_url);
                });
            }.bind(this)
        });
    });
});
