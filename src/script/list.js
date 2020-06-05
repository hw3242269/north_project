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

        // if($bool){
        //     if (e.target.nodeName === "P" || e.target.nodeName === "I"){
        //         $(e.target.parentElement.parentElement).children("li").hide();
        //     }else if(e.target.nodeName === "DIV"){
        //         $(e.target.parentElement).children("li").hide()
        //     }
        // }else{
        //     if (e.target.nodeName === "P" || e.target.nodeName === "I"){
        //         $(e.target.parentElement.parentElement).children("li").show();
        //     }else if(e.target.nodeName === "DIV"){
        //         $(e.target.parentElement).children("li").show()
        //     }
        // }
        // $bool=!$bool    
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
    let $choice_a
    $list.on("click", function (e) {
        if(e.target.nodeName==="A") return
        if ($(this).index() === 0) {
            $(this).siblings("li").children("a").css("opacity", 0)
            $(this).addClass("right_header_active").siblings("li").removeClass("right_header_active")
        } else {
            $(e.target).addClass("right_header_active").parent().children().first("li").removeClass("right_header_active")
            $(e.target).children("a").css("opacity", 1)
            $ul.append($(e.target).clone())
        }
        // $(e.target).children("a").css("opacity", 1).parent().siblings("li").children("a").css("opacity", 0)
        $choice_a=$('.right_header .choice ul li a')
    })
    $a.on("click",function(e){
        $(e.target).parent().removeClass("right_header_active")
        $(e.target).css("opacity", 0)
        $(e.target).parent().parent().children().first("li").addClass("right_header_active")
    })
    // $choice_a.on("click",function(e){
    //     $(e.target).parent().remove("li")
    // })
}(jQuery)


// 后端获取数据
!function($){
    let $img=$('.main_shoplist ul li a div img')
    let $text=$('.main_shoplist h4')
    let $pirce=$('.main_shoplist p')
    let $pic=$('.options img')

    $.get("http://10.31.162.48/north/php/list.php",
    function(data){
        let arrdata=JSON.parse(data)
        console.log(arrdata);
        for(let value of arrdata){
            $img.eq(value.sid-1).attr("src",value.picurl)
            $text.eq(value.sid-1).text(value.title)
            $pirce.eq(value.sid-1).text("￥"+value.pirce)
            $pic.eq(value.sid-1).attr("src",value.picurl)
        }
    })
}(jQuery)

// 排序，分页未做