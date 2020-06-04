// header_shoplist
!function ($) {
    const $nav = $('.nav_list li')
    const $listCon = $('.header_shoplist')
    const $list = $('.header_shoplist div')

    $nav.on("mouseover", function () {
        $list.eq($(this).index()).show().siblings('div').hide()
        $(this).addClass('header_nav_list_active').siblings('li').removeClass('header_nav_list_active')
    })
    $nav.on("mouseout", function () {
        $list.eq($(this).index()).hide()
        $(this).removeClass('header_nav_list_active')
    })
    $list.on("mouseover", function () {
        $(this).show()
        $nav.eq($(this).index()).addClass('header_nav_list_active').siblings('li').removeClass('header_nav_list_active')
    })
    $list.on("mouseout", function () {
        $(this).hide()
        $nav.eq($(this).index()).removeClass('header_nav_list_active')
    })
}(jQuery)



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



// tab切换
!function ($) {
    const $text = $('.tab_text div')
    const $pic = $('.tab_pic ul')

    $text.on("click", function () {
        $pic.eq($(this).index()).show().siblings("ul").hide()
        $(this).addClass("tab_active").siblings("div").removeClass("tab_active")
    })
    $text.hover(function () {
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



// 购物车
!function ($) {
    const $header = $(".header_cartshop")
    const $con = $('.cart-dialog')
    const $btn = $('.closebtn')
    $btn.on("click", function () {
        $con.hide()
    })
    $header.hover(function () {
        $con.show()
    }, function () {
        $con.hide()
    })
    $con.hover(function () {
        $con.show()
    }, function () {
        $con.hide()
    })
}(jQuery)

// 侧边栏右
!function ($) {
    const $div = $('#rightNav div')
    const $span = $('#rightNav div span')

    $div.hover(function () {
        if($(this).index()===0){
            $span.hide()
        }else{
            $span.eq($(this).index() - 1).show()
        }
    }, function () {
        $span.eq($(this).index() - 1).hide()
    })
    $div.eq(3).on("click", function () {
        $('html,body').scrollTop({
            scrollTop: 0
        });
    })
}(jQuery)

// 头部通知页面隐藏
!function ($) {
    const $info = $('#header .info')

    $(window).on('scroll', function () {
        let $top = $(window).scrollTop()
        if ($top > 80) $info.hide()
        else $info.show()
    })

}(jQuery)

// 最佳销售单品数据
!function ($) {
    let $bestPic = $('.best_pic')
    let $a = $('.best_pic ul li a')
    let $img = $('.best_pic ul li img')
    let $p=$('.best_pic ul li p')
    let $b=$('.best_pic ul li b')
    let $i=$('.best_pic ul li i')
    $.get("http://10.31.162.48/north/php/index_best.php",
        function (data) {
            let arrdata = JSON.parse(data)
            for (let value of arrdata) {
                $a.eq(value.sid - 1).attr("href", value.url)
                $img.eq(value.sid - 1).attr("src", value.picurl)
                $p.eq(value.sid - 1).text(value.title)
                $b.eq(value.sid - 1).text(value.pirce)
                $i.eq(value.sid - 1).text("￥"+value.pirce)
            }
            // best_banner轮播图
            const $best = $('.best_banner')
            const $imgCon = $('.best_pic')
            const $pic = $('.best_pic ul')
            const $btns = $('.best_banner ol li')
            const $left = $('.best_left')
            const $right = $('.best_right')
            let $index = 0
            let $time = null
            let $pic_width = $pic.eq(0).width()

            $imgCon.append($pic.eq(0).clone(true, true)).css({
                width: ($pic.length + 1) * $pic_width
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


// best_banner
// !function ($) {
//     const $best = $('.best_banner')
//     const $imgCon = $('.best_pic')
//     const $pic = $('.best_pic ul')
//     const $btns = $('.best_banner ol li')
//     const $left = $('.best_left')
//     const $right = $('.best_right')
//     let $index = 0
//     let $time = null
//     let $pic_width = $pic.eq(0).width()

//     $imgCon.append($pic.eq(0).clone(true, true)).css({
//         width: ($pic.length + 1) * $pic_width
//     })
//     $btns.on("click", function () {
//         $index = $(this).index()
//         tabSwitch()
//     })
//     $left.on("click", function () {
//         $index--
//         tabSwitch()
//     })
//     $right.on("click", function () {
//         $index++
//         tabSwitch()
//     })
//     function tabSwitch() {
//         if ($index > $pic.length) {
//             $imgCon.css({
//                 left: 10
//             })
//             $index = 1
//         }
//         if ($index < 0) {
//             $imgCon.css({
//                 left: -$pic_width * $pic.length - 1
//             })
//             $index = 1
//         }
//         if ($index === $pic.length) {
//             $btns.eq(0).addClass('best_active').siblings("li").removeClass("best_active")
//         } else {
//             $btns.eq($index).addClass('best_active').siblings("li").removeClass("best_active")
//         }
//         $imgCon.stop(true).animate({
//             left: -$index * $pic_width - 10
//         })
//     }
//     function autoPlay() {
//         $time = setInterval(() => {
//             $right.click()
//         }, 3500);
//     }
//     autoPlay()
//     $best.hover(function () {
//         clearInterval($time)
//     }, function () {
//         autoPlay()
//     })
// }(jQuery)