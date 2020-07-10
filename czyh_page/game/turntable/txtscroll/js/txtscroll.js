/*
 * txtscroll - 基于jQuery的文本无缝循环滚动插件
 *
 * 作者: obear
 * 版本: 1.0
 * 创建日期: 2018-12-07
 * 
 * 使用说明：
 *          { 使用前请引入jQuery, 文本长度大于父级元素才可激活滚动，否则无滚动效果 }
 */

;(function ($) {
    "use strict";

    $.fn.txtscroll = function (options) {
        //默认参数
        //{
        //   speed - 滚动间隔时间
        //}
        
        var settings = $.extend({
            'speed': 50
        }, options);

        return this.each(function () {
            var $this = $(this);
            var $settings = settings;

            var scrollbox = $('.scrollbox',$this);
            var txt_begin = $('.txt',$this);
            var txt_end = $('<div class="txt-clone"></div>');
            var scrollVaue = 0;

            function marquee() {
                if (txt_end.width() - scrollbox.scrollLeft() <= 0){
                    scrollVaue = scrollbox.scrollLeft() - txt_begin.width();
                    scrollbox.scrollLeft(scrollVaue);
                } else{
                    scrollVaue = scrollVaue + 1;
                    scrollbox.scrollLeft(scrollVaue);
                }
            }

            if(txt_begin.width() > scrollbox.width()){
                txt_end.html(txt_begin.html());
                scrollbox.append(txt_end);

                var setmarquee = setInterval(marquee, $settings.speed);
                $this.on('mouseover', function(){
                    clearInterval(setmarquee);
                });
                $this.on('mouseout', function(){
                    setmarquee = setInterval(marquee, $settings.speed);
                });
            }
        });
    };
})(jQuery);