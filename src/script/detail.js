// 渲染
!function ($) {
    let id = location.search.substring(1).split("=")[1]
    let $left_pic = $("#detail .small_con img")
    let $left_spic = $('#detail .detail_left_list ul')
    let $big_con_pic = $('.big_con img')
    let $right_title = $('#detail .detail_right h3')
    let $right_price_top = $('#detail .detail_right .detail_left_top_price span')
    let $right_price_bottom = $('#detail .detail_right .detail_left_bottom_price i')
    let $right_pic = $('#detail .detail_right .detail_right_color img')

    $.get("http://10.31.162.48/north/php/detail.php", {
        sid: id
    }, function (data) {
        let arrdata = JSON.parse(data)
        console.log(arrdata);
        $left_pic.attr("src", arrdata.picurl)
        $left_pic.attr("sid", arrdata.sid)
        $big_con_pic.attr("src", arrdata.picurl)
        $right_title.text(arrdata.title)
        $right_price_top.text("￥" + arrdata.pirce)
        $right_price_bottom.text("￥" + arrdata.pirce)
        $right_pic.attr("src", arrdata.picurl)

        let spic = arrdata.url.split(",")
        let $str = ''
        $.each(spic, function (index, value) {
            $str += `
                <li>
                    <img src="${value}">
                </li>
            `
        })
        // 小图切换
        $left_spic.html($str).css({
            width: $left_spic.children("li").length * $left_spic.children("li").eq(0).outerWidth(true)
        })
        $(".detail_left_list_ulCon").css({
            width: $left_spic.children("li").eq(0).outerWidth(true) * 5
        })
        $left_spic.on("click", "li", function () {
            let $url = $(this).find('img').attr("src")
            $left_pic.attr('src', $url)
            $big_con_pic.attr('src', $url)
        })
        // 箭头切换
        const $left = $('.detail_left_list_leftbtn')
        const $right = $('.detail_left_list_rightbtn')
        let $detail_left_list = 5



        $right.on("click", function () {
            let $lists = $left_spic.children("li")
            if ($lists.size() > $detail_left_list) {
                $detail_left_list++
                $left.children("span").show()
                if ($lists.size() == $detail_left_list) {
                    $right.children("span").hide()
                }
                $left_spic.animate({
                    left: -($detail_left_list - 5) * $lists.eq(0).outerWidth(true)
                })
            }
        })
        $left.on("click", function () {
            let $lists = $left_spic.children("li")
            if ($detail_left_list > 5) {
                $detail_left_list--
                $right.children("span").show()
                if ($detail_left_list <= 5) {
                    $left.children("span").hide()
                }
                $left_spic.animate({
                    left: -($detail_left_list - 5) * $lists.eq(0).outerWidth(true)
                })
            }
        })
    })
}(jQuery)

// 放大镜
!function ($) {
    const $scon = $('#detail .small_con')
    const $spic = $('#detail .small_con img')
    const $move = $('#detail .small_con .small_con_move')
    const $bcon = $('.big_con')
    const $bpic = $('.big_con img')


    $scon.hover(function () {
        let scale = $bpic.width() / $spic.width()
        // $move.css('visibility', 'visible');
        $bcon.css('visibility', 'visible');
        $move.css({
            visibility: "visible",
            width: $spic.outerWidth() * $bcon.outerWidth() / $bpic.outerWidth(),
            height: $spic.outerHeight() * $bcon.outerHeight() / $bpic.outerHeight()
        })
        $(this).on("mousemove", function (e) {
            let x = e.pageX - $scon.offset().left - ($move.width() / 2)
            let y = e.pageY - $scon.offset().top - ($move.width() / 2)
            if (x < 0) x = 0
            if (x > $scon.width() - $move.width()) {
                x = $scon.width() - $move.width()
            }
            if (y < 0) y = 0
            if (y > $scon.height() - $move.height()) {
                y = $scon.height() - $move.height()
            }
            $move.css({
                left: x,
                top: y
            })
            $bpic.css({
                left: -scale * x,
                top: -scale * y
            })
        })
    }, function () {
        $move.css('visibility', 'hidden');
        $bcon.css('visibility', 'hidden');
    })

}(jQuery)


// 切换
!function ($) {
    const $size = $(".detail_right_size div")
    const $text = $(".detail_right_size p span")
    $size.on("click", function () {
        $(this).addClass("detail_right_size_active").siblings("div").removeClass("detail_right_size_active")
        $text.text($(this).text())
    })
}(jQuery)


// 添加按钮
!function ($) {

    const $add = $(".detail_right_num_add")
    const $minus = $(".detail_right_num_minus")
    const $num = $(".detail_right_num_num input")
    const $hint = $(".detail_right_num_hint")
    let $val = parseInt($num.val())
    let $time = null
    let bool = true

    function range() {
        if ($val <= 1) {
            $val = 1
            $num.val($val)
            $hint.css({
                opacity: 1,
                zIndex: 6
            }).children().text("此商品的最小购买数量为一件")
            if (bool) {
                bool = false
                $time = setInterval(() => {
                    $hint.animate({
                        opacity: 0,
                        zIndex: 3
                    })
                    clearInterval($time)
                    bool = true
                }, 3000);
            }

        } else if ($val > 99) {
            $val = 99
            $num.val($val)
            $hint.css({
                opacity: 1,
                zIndex: 6
            }).children().text("此商品的最大购买数量为99件")
            if (bool) {
                bool = false
                $time = setInterval(() => {
                    $hint.animate({
                        opacity: 0,
                        zIndex: 3
                    })
                    clearInterval($time)
                    bool = true
                }, 3000);
            }
        }
    }
    $num.on("blur", function () {
        $val = parseInt($num.val())
        if (/[^0-9]/.test($val)) {
            $num.val(1)
            $val = 1
        }
        range()
    })
    $add.on("click", function () {
        if ($val === isNaN) return
        $val++
        $num.val($val)
        range()
    })
    $minus.on("click", function () {
        if ($val === isNaN) return
        if ($val < 1) return
        $val--
        $num.val($val)
        range()
    })

}(jQuery)



// 添加cookie
!function ($) {
    let arrsid = []
    let arrnum = []
    const $btn = $(".detail_right_cart")
    const $imgCon = $(".small_con")
    const $input = $(".detail_right_num_num input")
    const $cart = $('.cart-dialog')
    let $time = null

    function cookietoarray() {
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {
            arrsid = $.cookie('cookiesid').split(',');
            arrnum = $.cookie('cookienum').split(',');

        } else {
            arrsid = [];
            arrnum = [];
        }
    }

    $btn.on("click", function () {
        let $sid = $imgCon.find($imgCon.children("img")).attr('sid')
        cookietoarray();
        if ($.inArray($sid, arrsid) != -1) {//非第一次添加
            let $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($input.val())
            arrnum[$.inArray($sid, arrsid)] = $num
            $.cookie('cookienum', arrnum, { expires: 10, path: '/' })
        } else {//第一次添加
            arrsid.push($sid)
            $.cookie("cookiesid", arrsid, { expires: 10, path: '/' })
            arrnum.push($input.val())
            $.cookie('cookienum', arrnum, { expires: 10, path: '/' })
            showlist($sid, $input.val())
        }
        $cart.show()
        $(".the-none-ware").hide()
        $(".cart-d").show()
        $time = setInterval(() => {
            $cart.hide()
            clearInterval($time)
        }, 5000);
    })
    function showlist(sid, num) {
        $(".the-none-ware").hide()
        $(".cart-d").show()
        $.get("http://10.31.162.48/north/php/cart.php",
            function (data) {
                data = JSON.parse(data)
                $.each(data, function (index, value) {
                    if (sid === value.sid) {
                        let $clonebox = $('.car-hidden').clone(true, true)
                        $clonebox.removeClass("car-hidden").addClass('car-show')
                        $clonebox.find('.ware-l img').attr('src', value.picurl)
                        $clonebox.find('.ware-l img').attr('sid', value.sid)
                        $clonebox.find('.ware-r i').html(value.title)
                        $clonebox.find('.ware-b .money').html((value.pirce * num).toFixed(2))
                        $clonebox.find('.ware-d .piece').html("×" + num)
                        $clonebox.css('display', 'block');
                        $('.listbox').append($clonebox);
                        total()
                    }
                })
            })
    }
    function total() {
        let $piece = 0
        let $total = 0

        $('.car-show').each(function (index, value) {
            $piece += parseInt($(value).find('.ware-d span').html().substring(1))
            $total += parseFloat(($(value).find('.ware-b .money').html()))
        })
        $('.cart-d .d-all .allcount').html($piece + "件商品")
        $('.cart-d .d-all .allmoney').html("商品总计:￥" + $total)
        $('.header_cartshop div').html($piece)
    }
}(jQuery)


