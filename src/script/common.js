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




// 侧边栏右
!function ($) {
    const $div = $('#rightNav div')
    const $span = $('#rightNav div span')

    $div.hover(function () {
        if ($(this).index() === 0) {
            $span.hide()
        } else {
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


// 头部购物车
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


!function ($) {
    function showlist(sid, num) {
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
    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        $(".the-none-ware").hide()
        $(".cart-d").show()
        let s = $.cookie('cookiesid').split(',');
        let n = $.cookie('cookienum').split(',');
        $.each(s, function (index, value) {
            showlist(s[index], n[index]);
        });
    }else if(!$.cookie('cookiesid') || !$.cookie('cookienum')){
        $(".the-none-ware").show()
        $(".cart-d").hide()
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



    
    let arrsid = []
    let arrnum = []
    function cookietoarray() {
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {
            arrsid = $.cookie('cookiesid').split(',');
            arrnum = $.cookie('cookienum').split(',');
        } else {
            arrsid = [];
            arrnum = [];
        }
    }


    function delCookie(sid,arrsid){
        let $index = -1
        $.each(arrsid,function(index,value){
            if(sid === value) $index = index
        })
        arrsid.splice($index,1)
        arrnum.splice($index,1)

        $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
        $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
    }

    $('.ware-d .remove_cart').on("click",function(){
        cookietoarray()
        if(window.confirm('确定移除此商品？')){
            $(this).parents('.car-show').remove()
            delCookie($(this).parents('.car-show').find('img').attr('sid'),arrsid)
            total()
        }
    })

    
}(jQuery)