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
    var temp_id=$.getUrlVar('id')-1;
    //alert("http://localhost:3000/"+kind+"/"+temp_id);

    $.ajax({
        url: "http://localhost:3000/"+kind+"/"+temp_id,
        method: "post",
        dataType: 'json',
        success: function (data) {
            $(".mainText").each(function(){
                //console.log(data.content);
                $(this).html(data.content);
            });
        }
    });

});
