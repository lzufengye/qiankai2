/**
 * Created by hongluo on 2016/3/6.
 * 全部商品分类
 */
$(function(){
    $('#jinkoushangpin').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright6').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('#kaixianziying').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright1').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('#gongyichanpin').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright4').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('#mingtechanpin').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright2').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('#xiangcuntuhuo').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright3').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('#xianwaichanpin').mouseenter(function(){
        $(this).stop().animate({'height':'195'},300).siblings().stop().animate({'height':'44px'},300);
        $(this).siblings().css('background','#e03627');
        $('#fenleiright5').fadeTo(0,0.8).stop().animate({'width':'289px'},300);
    }).mouseleave(function(){
        $('.fenLei ul li').stop().animate({'height':'69'},300)
        $(this).siblings().css('background','#e03627');
        $('.fenLeiRight').stop().animate({'width':'0px'},300);
    });
    $('.navLeft').mouseleave(function(){
        $('.fenleiright').stop().animate({'width':'0px'},300);
    })
})

