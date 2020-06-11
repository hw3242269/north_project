// 左侧商品列表
!function ($) {
    const $con = $('.main_left ul')
    const $list = $('.main_left ul li')
    const $btn = $('.main_left ul div')
    const $arrow = $('.main_left ul div i')
    let $bool = true

    $con.on("click", function (e) {
        e.preventDefault()
        e.stopPropagation();
        if (e.target.nodeName === "LI") return
        if (e.target.nodeName === "P" || e.target.nodeName === "I" || e.target.nodeName === "DIV") {
            if ($bool && (e.target.nodeName === "P" || e.target.nodeName === "I")) {
                $arrow.eq($(this).index()).addClass('fa-angle-up').removeClass('fa-angle-down')
                $(e.target.parentElement).siblings('li').hide()
            } else if (!$bool && (e.target.nodeName === "P" || e.target.nodeName === "I")) {
                $arrow.eq($(this).index()).addClass('fa-angle-down').removeClass('fa-angle-up')
                $(e.target.parentElement).siblings('li').show()
            } else if (e.target.nodeName === "DIV" && $bool) {
                $arrow.eq($(this).index()).addClass('fa-angle-up').removeClass('fa-angle-down')
                $(e.target).siblings('li').hide()
            } else if (e.target.nodeName === "DIV" && !$bool) {
                $arrow.eq($(this).index()).addClass('fa-angle-down').removeClass('fa-angle-up')
                $(e.target).siblings('li').show()
            }
            $bool = !$bool
        }
    })
}(jQuery)





// show
!function ($) {
    const $list = $('.right_header_list');
    const $filter = $('.filter-more')
    let $bool = true

    $filter.on("click", function (e) {
        if (e.target.parentElement.nodeName !== "P") return
        else {
            if ($bool) {
                $list.eq(4).show()
                $list.eq(5).show()
            } else {
                $list.eq(4).hide()
                $list.eq(5).hide()
            }
        }
        $bool = !$bool
    })
}(jQuery)

// choise
!function ($) {
    const $list = $('.right_header_list ul li')
    const $a = $('.right_header_list ul li a')
    const $ul = $('.right_header .choice ul')
    const $header = $('.right_header')

    $header.on("click", "div", function (e) {
        // console.log($(".choice ul li"));
        if (e.target.nodeName === "LI") {
            let $index1 = $(this).index()
            let $index2 = $(e.target).index()
            let $data = $index1 + "_" + $index2
            if ($(e.target).index() === 0) {
                $(e.target).siblings("li").children("a").css("opacity", 0)
                $(e.target).addClass("right_header_active").siblings("li").removeClass("right_header_active")
            } else {
                $(e.target).addClass("right_header_active").parent().children().first("li").removeClass("right_header_active")
                $(e.target).attr("data", $data)
                $(e.target).children("a").css("opacity", 1)
                $ul.append($(e.target).clone())
            }
            // $(e.target).children("a").css("opacity", 1).parent().siblings("li").children("a").css("opacity", 0)
            $('.choice ul').children("li").children("a").on("click", function (e) {
                console.log(1);
                $(e.target).parent().remove("li")
                $.each($list, function (index, value) {
                    if ($(value).attr("data") === $(this).attr("data")) {
                        $(value).children("a").css("opacity", 0).parent().removeClass("right_header_active")
                        $(value).children("a").parent().parent().children().first("li").addClass("right_header_active")
                    }
                })
            })
        }

    })
    $a.on("click", function (e) {
        let $remove = $(e.target)
        $remove.parent().removeClass("right_header_active")
        $remove.css("opacity", 0)
        $remove.parent().parent().children().first("li").addClass("right_header_active")
        $.each($(".choice ul li"), function (index, value) {
            if ($(value).attr("data") === $remove.parent("li").attr("data")) {
                $(value).remove()
            }
        })
    })
    $(".filter u").on("click", function () {
        window.location.href = "http://10.31.162.48/north/src/list.html"
    })
}(jQuery)


// 后端获取数据
!function ($) {
    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;





    // 第一页渲染
    const $shoplist = $(".main_shoplist")
    $.get("http://10.31.162.48/north/php/list.php",
        function (data) {
            let arrdata = JSON.parse(data)
            let $str = '<ul class="main_shoplist_ul">'
            for (let value of arrdata) {
                $str += `
                <li class="main_shoplist_list">
                    <a href="http://10.31.162.48/north/src/detail.html?sid=${value.sid}">
                        <div>
                            <img data-original="${value.picurl}" alt="" class="lazy">
                        </div>
                        <h4>${value.title}</h4>
                        <p class="price">￥${value.pirce}</p>
                        <span class="options">
                            <i class="fa fa-angle-left prevBtn2 disabled"></i>
                            <span>
                                <ul>
                                    <li>
                                        <img data-original="${value.picurl}" alt="" class="lazy">
                                    </li>
                                </ul>
                            </span>
                            <i class="fa fa-angle-right nextBtn2 disabled "></i>
                        </span>
                    </a>
                </li>
            `
            }
            $str += '</ul>'
            $shoplist.html($str)
            $(".lazy").lazyload({
                effect: "fadeIn"
            });
            array_default = [];
            array = [];
            prev = null;
            next = null;
            $('.main_shoplist').children("ul").children("li").each(function (index, element) {
                array[index] = $(this);
                array_default[index] = $(this);
            });
        })
    //2.分页
    $('.page').pagination({
        pageCount: 3,
        jump: true,
        coping: true,
        prevContent: '上一页',
        nextContent: '下一页',
        homePage: '首页',
        endPage: '尾页',
        callback: function (api) {
            $.ajax({
                url: 'http://10.31.162.48/north/php/list.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function (data) {
                let $str = '<ul class="main_shoplist_ul">';
                $.each(data, function (index, value) {
                    $str += `
                    <li>
                    <a href="http://10.31.162.48/north/src/detail.html?sid=${value.sid}">
                        <div>
                            <img data-original="${value.picurl}" alt="" class="lazy">
                        </div>
                        <h4>${value.title}</h4>
                        <p class="price">￥${value.pirce}</p>
                        <span class="options">
                            <i class="fa fa-angle-left prevBtn2 disabled"></i>
                            <span>
                                <ul>
                                    <li>
                                        <img data-original="${value.picurl}" alt="" class="lazy">
                                    </li>
                                </ul>
                            </span>
                            <i class="fa fa-angle-right nextBtn2 disabled "></i>
                        </span>
                    </a>
                </li>
                    `;
                });
                $str += '</ul>';
                $shoplist.html($str);
                $(".lazy").lazyload({
                    effect: "fadeIn"
                });

                array_default = [];
                array = [];
                prev = null;
                next = null;

                
                $('.main_shoplist').children("ul").children("li").each(function (index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });
            })
        }
    });


    const $btns = $(".main_choiseBtn").children().not("select")
    const $select = $(".main_choiseBtn select option")


    $btns.eq(0).on('click', function () {
        $select.eq(0).attr("selected", true).siblings("option").attr("selected", false)
        $.each(array_default, function (index, value) {
            $('.main_shoplist .main_shoplist_ul').append(value);
        });
        return;
    });
    $btns.eq(1).on('click', function () {
        $select.eq(1).attr("selected", true).siblings("option").attr("selected", false)
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                // console.log(array[j].find('.price').html());
                prev = parseFloat(array[j].find('.price').html().substring(1));
                next = parseFloat(array[j + 1].find('.price').html().substring(1));
                // console.log(prev,next);
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        $.each(array, function (index, value) {
            $('.main_shoplist .main_shoplist_ul').append(value);
        });
    });
    $btns.eq(2).on('click', function () {
        $select.eq(2).attr("selected", true).siblings("option").attr("selected", false)
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                // console.log(array[j].find('.price').html());
                prev = parseFloat(array[j].find('.price').html().substring(1));
                next = parseFloat(array[j + 1].find('.price').html().substring(1));
                // console.log(prev,next);
                if (prev < next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        $.each(array, function (index, value) {
            $('.main_shoplist .main_shoplist_ul').append(value);
        });
    });






}(jQuery)


