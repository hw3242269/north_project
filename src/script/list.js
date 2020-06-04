!function($){
    const $con=$('.main_left ul')
    const $list=$('.main_left ul li')
    const $btn=$('.main_left ul div')
    const $arrow=$('.main_left ul div i')
    let $bool=false

    $btn.on("click",function(){
        console.log($btn);
        console.log($btn.index());
        $bool=!$bool
        if($bool){
            $con.eq($(this).index()).children('li').hide()
        }else{
            $con.eq($(this).index()).children('li').show()
        }
        
    })
}(jQuery)