
// banner
!function ($) {


    const $banner = $('#banner')
    const $imgCon = $('.banner_imgCon')
    const $img = $('.banner_imgCon a')
    const $btns = $('#banner ul li')
    const $left = $('.banner_left')
    const $right = $('.banner_right')
    let $index = 0
    let $time = null

    $imgCon.append($img.eq(0).clone(true, true)).css({
        width: $img.eq(0).width() * ($img.length + 1)
    })

    $btns.on("click", function () {
        $index = $(this).index()
        tabSwitch()
    })
    $left.on("click", function () {
        $index--
        tabSwitch()
    })
    $right.on("click", function () {
        $index++
        tabSwitch()
    })
    function tabSwitch() {
        if ($index > $img.length) {
            $imgCon.css({
                left: 0
            })
            $index = 1
        }
        if ($index < 0) {
            $imgCon.css({
                left: -$img.eq(0).width() * $img.length - 1
            })
            $index = $img.length - 1
        }
        $imgCon.stop(true).animate({
            left: -$index * $img.eq(0).width()
        })
        if ($index === $img.length) {
            $btns.eq(0).addClass('banner_active').siblings('li').removeClass('banner_active')
        } else {
            $btns.eq($index).addClass('banner_active').siblings('li').removeClass('banner_active')
        }

    }
    function autoPlay() {
        $time = setInterval(() => {
            $right.click()
        }, 3500);
    }
    autoPlay()
    $banner.hover(function () {
        clearInterval($time)
    }, function () {
        autoPlay()
    })
}(jQuery)



// tab切换+渲染
!function ($) {
    const $text = $('.tab_text div')
    $.get("http://10.31.162.48/north/php/index_tab.php",
        function(data){
            let arrdata = JSON.parse(data)
            console.log(arrdata);
            let $str1='<ul class="man_pic">'
            let $str2='<ul class="woman_pic">'
            for (let value of arrdata) {
                if (value.sid < 5) {
                    $str1 += `
                    <li>
                        <div>
                            <img src="${value.picurl}" alt="">
                        </div>
                        <img src="${value.url}" alt="" class="tab_shopimg">
                    </li>
                    `
                }else{
                    $str2 += `
                    <li>
                        <div>
                            <img src="${value.picurl}" alt="">
                        </div>
                        <img src="${value.url}" alt="" class="tab_shopimg">
                    </li>
                    `
                }
            }
            $str1+='</ul>'
            $str2+='</ul>'
            $('.tab_pic').html($str1+$str2)
    })

    
    

    $('.tab_text div').on("click", function () {
        $('.tab_pic ul').eq($(this).index()).show().siblings("ul").hide()
        $(this).addClass("tab_active").siblings("div").removeClass("tab_active")
    })
    $('.tab_text div').hover(function () {
        if ($(this).hasClass("tab_active")) {

        } else {
            $(this).css({
                color: "#6bcdff"
            })
        }
    }, function () {
        $(this).css({
            color: "#000000"
        })
    })
}(jQuery)



// 最佳销售单品数据
!function ($) {
    const $ul1 = $(".best_pic").children("ul").first()
    const $ul2 = $(".best_pic").children("ul").eq(1)
    const $ul3 = $(".best_pic").children("ul").last()
    $.get("http://10.31.162.48/north/php/index_best.php",
        function (data) {
            let arrdata = JSON.parse(data)
            let $str = ''
            let $str1 = ''
            for (let value of arrdata) {
                if (value.sid < 5) {
                    $str += `
                    <li>
                        <a href="">
                            <img class="lazy" data-original="${value.picurl}" width="238" height="238"/>
                            <p>${value.title}</p>
                            <div>
                                <b>${value.pirce}</b>
                                <i>￥${value.pirce}</i>
                            </div>
                        </a>
                    </li>
                    `
                } else {
                    $str1 += `
                    <li>
                        <a href="">
                            <img class="lazy" data-original="${value.picurl}" width="238" height="238"/>
                            <p>${value.title}</p>
                            <div>
                                <b>${value.pirce}</b>
                                <i>￥${value.pirce}</i>
                            </div>
                        </a>
                    </li>
                    `
                }



                // $a.eq(value.sid - 1).attr("href", value.url)
                // $img.eq(value.sid - 1).attr("data-original", value.picurl).css({
                //     width:238,
                //     height:238
                // })
                // $p.eq(value.sid - 1).text(value.title)
                // $b.eq(value.sid - 1).text(value.pirce)
                // $i.eq(value.sid - 1).text("￥"+value.pirce)
            }
            $ul1.html($str)
            $ul2.html($str1)
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
            // best_banner轮播图

            const $best = $('#best')
            const $imgCon = $('.best_pic')
            const $pic = $('.best_pic ul')
            const $btns = $('#best ol li')
            const $left = $('.best_left')
            const $right = $('.best_right')
            let $index = 0
            let $time = null
            let $pic_width = $pic.eq(0).width()
            let $clone=$pic.eq(0).clone(true, true)
            let $src=$clone.children().children().children("img")

            $imgCon.append($clone).css({
                width: ($pic.length + 1) * $pic_width
            })
            $src.eq(2).attr("src",$src.eq(2).attr("data-original"))
            $pic.children("li").each(function(i){
                $src.eq(i).attr("src",$src.eq(i).attr("data-original"))
                if(i>3) return
            })
            $btns.on("click", function () {
                $index = $(this).index()
                tabSwitch()
            })
            $left.on("click", function () {
                $index--
                tabSwitch()
            })
            $right.on("click", function () {
                $index++
                tabSwitch()
            })
            function tabSwitch() {
                if ($index > $pic.length) {
                    $imgCon.css({
                        left: 10
                    })
                    $index = 1
                }
                if ($index < 0) {
                    $imgCon.css({
                        left: -$pic_width * $pic.length - 1
                    })
                    $index = 1
                }
                if ($index === $pic.length) {
                    $btns.eq(0).addClass('best_active').siblings("li").removeClass("best_active")
                } else {
                    $btns.eq($index).addClass('best_active').siblings("li").removeClass("best_active")
                }
                $imgCon.stop(true).animate({
                    left: -$index * $pic_width - 10
                })
            }
            function autoPlay() {
                $time = setInterval(() => {
                    $right.click()
                }, 3500);
            }
            autoPlay()
            $best.hover(function () {
                clearInterval($time)
            }, function () {
                autoPlay()
            })
        })

}(jQuery)
