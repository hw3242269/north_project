// 页面渲染
!function ($) {
    const $cart_main_shop_num = $('.cart_main_shop_num')


    $(".cart_main_noshop span").on("click", function () {
        location.href = "http://10.31.162.48/north/src/list.html"
    })
    $(".cart_main_shop_num_bottom div").eq(0).on("click", function () {
        location.href = "http://10.31.162.48/north/src/list.html"
    })

    function showlist(sid, num) {
        $.get("http://10.31.162.48/north/php/cart.php",
            function (data) {
                data = JSON.parse(data)
                $.each(data, function (index, value) {
                    if (sid === value.sid) {
                        let $clonebox = $('.cart_shop_hideen').clone(true, true)
                        $clonebox.removeClass("cart_shop_hideen").addClass("cart_shop_show")
                        $clonebox.find('form input').prop('checked', true)
                        $('.cart_main_shop_title input').prop('checked', true)
                        $clonebox.find('.cart_shop_img img').attr('src', value.picurl)
                        $clonebox.find('.cart_shop_img img').attr('sid', value.sid)
                        $clonebox.find('.cart_shop_text p').html(value.title)
                        $clonebox.find('.cart_shop_pirce span').html("￥" + value.pirce)
                        $clonebox.find('.cart_shop_num input').val(num)
                        $clonebox.find('.cart_shop_total span').html((value.pirce * num).toFixed(2))
                        $clonebox.insertBefore($cart_main_shop_num)
                        total()
                    }
                })
            })
    }
    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        $('#cart_main .cart_main_noshop').hide()
        $('#cart_main .cart_main_shop').show()
        let s = $.cookie('cookiesid').split(',');
        let n = $.cookie('cookienum').split(',');
        $.each(s, function (index, value) {
            showlist(s[index], n[index]);
        });
    } else if (!$.cookie('cookiesid') || !$.cookie('cookienum')) {
        $('#cart_main .cart_main_noshop').show()
        $('#cart_main .cart_main_shop').hide()
    }


    // 总价
    function total() {
        let $piece = 0
        let $total = 0

        $('.cart_shop_show').each(function (index, value) {
            if ($(value).find('form input').prop('checked')) {
                $piece += parseInt($(value).find('.cart_shop_num input').val())
                $total += parseFloat($(value).find('.cart_shop_total span').html())
            }
        })
        $('.cart_main_shop_num_total i').html($total.toFixed(2))
        $('.cart_main_shop_num_price i').html($total.toFixed(2))
    }

    // 全选
    $('.cart_main_shop_title input').on("change", function () {
        $('.cart_shop_show').find(':checkbox').prop('checked', $(this).prop("checked"))
        $('.cart_main_shop_title input').prop('checked', $(this).prop('checked'))
        total()
    })
    $('.cart_main_shop').on('change', $('.cart_shop_show').find(':checkbox'), function () {
        if ($('.cart_shop_show').find(':checkbox').length === $('.cart_shop_show').find('input:checked').size()) {
            $('.cart_main_shop_title input').prop('checked', true)
        } else {
            $('.cart_main_shop_title input').prop('checked', false)
        }
        total()
    })

    // 点击加减改变商品数量
    // 计算单价
    function calculate(obj) {
        let $unit = parseFloat(obj.parents(".cart_shop_show").find('.cart_shop_pirce span').html().substring(1))
        let $num = parseInt(obj.parents(".cart_shop_show").find(".cart_shop_num input").val())
        return ($unit * $num).toFixed(2)
    }
    // 存放cookie
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

    function setcookie(obj) {
        cookietoarray()
        let $sid = obj.parents('.cart_shop_show').find('img').attr('sid')
        arrnum[$.inArray($sid, arrsid)] = obj.parents('.cart_shop_show').find('.cart_shop_num input').val()
        $.cookie('cookienum', arrnum, { expires: 10, path: '/' })

    }
    // 点击减
    let bool = true
    $('.cart_main_shop_page_minus').on("click", function () {
        let $num = parseInt($(this).parents(".cart_shop_show").find(".cart_shop_num input").val())
        $num--
        if ($num < 1) {
            $num = 1
            $('.cart_shop_hint').css("opacity", 1).text("此商品的最小购买数量为一件")
            if (bool) {
                bool=false
                $time = setInterval(() => {
                    $('.cart_shop_hint').animate({
                        opacity: 0,
                    })
                    clearInterval($time)
                    bool=true
                }, 3000);
            }
        }
        // console.log($num);
        // console.log($(this).parents(".cart_shop_show").find('.cart_shop_total span').html());
        $(this).parents(".cart_shop_show").find(".cart_shop_num input").val($num)
        $(this).parents(".cart_shop_show").find('.cart_shop_total span').html(calculate($(this)))
        total()
        setcookie($(this))
    })
    // 点击加
    $('.cart_main_shop_page_add').on("click", function () {
        let $num = parseInt($(this).parents(".cart_shop_show").find(".cart_shop_num input").val())
        $num++
        if ($num > 99) {
            $num = 99
            $('.cart_shop_hint').css("opacity", 1).text("此商品的最大购买数量为99件")
            if (bool) {
                bool=false
                $time = setInterval(() => {
                    $('.cart_shop_hint').animate({
                        opacity: 0,
                    })
                    clearInterval($time)
                    bool=true
                }, 3000);
            }
        }
        $(this).parents(".cart_shop_show").find(".cart_shop_num input").val($num)
        $(this).parents(".cart_shop_show").find('.cart_shop_total span').html(calculate($(this)))
        total()
        setcookie($(this))
    })
    // 数值变化
    $(".cart_shop_num input").on("input", function () {
        let $reg = /^\d+$/g;
        let $value = $(this).val();
        if (!$reg.test($value)) {
            $(this).val(1);
            if ($value < 1) {
                $value = 1
                $('.cart_shop_hint').css("opacity", 1).text("此商品的最小购买数量为一件")
                if (bool) {
                    bool=false
                    $time = setInterval(() => {
                        $('.cart_shop_hint').animate({
                            opacity: 0,
                        })
                        clearInterval($time)
                        bool=true
                    }, 3000);
                }
            }
        }
        if ($value > 99) {
            $(this).val(99);
            if ($value > 99) {
                $value = 99
                $('.cart_shop_hint').css("opacity", 1).text("此商品的最大购买数量为99件")
                if (bool) {
                    bool=false
                    $time = setInterval(() => {
                        $('.cart_shop_hint').animate({
                            opacity: 0,
                        })
                        clearInterval($time)
                        bool=true
                    }, 3000);
                }
            }
        }
        $(this).parents(".cart_shop_show").find('.cart_shop_total span').html(calculate($(this)))
        total();
        setcookie($(this));
    })

    // 点击删除，删除cookie
    function delCookie(sid, arrsid) {
        let $index = -1
        $.each(arrsid, function (index, value) {
            if (sid === value) $index = index
        })
        arrsid.splice($index, 1)
        arrnum.splice($index, 1)

        $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
        $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
    }

    $('.cart_shop_remove .cart_shop_remove_remove').on("click", function () {
        cookietoarray()
        if (window.confirm('确定移除此商品？')) {
            $(this).parents('.cart_shop_show').remove()
            delCookie($(this).parents('.cart_shop_show').find('img').attr('sid'), arrsid)
            total()
        }
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