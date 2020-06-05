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