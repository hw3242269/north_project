// 渲染
!function ($) {
    let id = location.search.substring(1).split("=")[1]
    let $left_pic = $("#detail .small_con img")
    let $left_spic = $('#detail .detail_left_list img')
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
        $left_spic.attr("src", arrdata.picurl)
        $big_con_pic.attr("src", arrdata.picurl)
        $right_title.text(arrdata.title)
        $right_price_top.text("￥" + arrdata.pirce)
        $right_price_bottom.text("￥" + arrdata.pirce)
        $right_pic.attr("src", arrdata.picurl)
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

    // $spic.on("mouseover",function(){
    //     $move.css('visibility', 'visible');
    //     $(this).on("mousemove",function(e){
    //         $move.css({
    //             left:e.pageX-$scon.offset().left-($move.width()/2),
    //             top:e.pageY-$scon.offset().top-($move.width()/2)
    //         })
    //     })
    //     $(this).on("mouseout",function(e){
    //         $move.hide()
    //         $(this).off("mousemove",function(){})
    //     })
    // })
}(jQuery)


// 切换
!function($){
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
    let $time=null

    function range() {
        if ($val <= 1) {
            $val = 1
            $num.val($val)
            $hint.css({opacity:1,
            zIndex:6}).children().text("此商品的最小购买数量为一件")
            $time=setInterval(() => {
                $hint.animate({
                    opacity:0,
                    zIndex:3
                })
                clearInterval($time)
            }, 3000);
        } else if ($val > 99) {
            $val = 99
            $num.val($val)
            $hint.css({opacity:1,
                zIndex:6}).children().text("此商品的最大购买数量为99件")
            $time=setInterval(() => {
                $hint.animate({
                    opacity:0,
                    zIndex:3
                })
                clearInterval($time)
            }, 3000);
        }
    }
    $num.on("blur", function () {
        console.log($val);
        console.log(/[^0-9]/.test($val));
        $val = parseInt($num.val())
        if(/[^0-9]/.test($val)){
            $num.val(1)
            $val=1
        }
        range()
    })
    $add.on("click", function () {
        if($val===isNaN) return
        $val++
        $num.val($val)
        range()
    })
    $minus.on("click", function () {
        if($val===isNaN) return
        if($val<1) return
        $val--
        $num.val($val)
        range()
    })

}(jQuery)