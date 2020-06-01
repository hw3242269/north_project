!function ($) {
    let $form = $('form')
    let $username = $('.username')
    let $password = $('.password')
    let $email = $('.email')
    let $decide = $('.decide span')
    let $login = $('.login')
    let $check = $('.checkbox')
    let $bool = false
    let $bool1 = false
    $username.on("blur", function () {
        $.post('http://10.31.162.48/north/php/registry.php', { username: $username.val() },
            function (data) {
                if (data) {
                    $decide.eq(0).html("用户名已存在")
                    $decide.eq(0).css("color", "red")
                } else {
                    $decide.eq(0).html("用户名可正常使用")
                    $decide.eq(0).css("color", "yellowgreen")
                }
            })
        if ($username.val() === "") {
            $decide.eq(0).hide()
        }
    })
    $login.on("click", function () {
        if ($decide.eq(0).html() === "用户名可正常使用") {
            $bool1 = true
        } else {
            $bool1 = false
        }
        console.log($bool1);
        if ($username.val() === "") {
            $decide.eq(0).show()
            $decide.eq(0).html("请输入用户名")
            $decide.eq(0).css("color", "red")
        }
        if ($password.val() === "") {
            $decide.eq(1).show()
        } else {
            $decide.eq(1).hide()
        }
        if ($email.val() === "") {
            $decide.eq(2).show()
        } else {
            $decide.eq(2).hide()
        }
        if ($check.prop('checked') === false) {
            $decide.eq(3).show()
        } else {
            $decide.eq(3).hide()
        }
        if ($username.val() !== "" && $password.val() !== "" && $email.val() !== "" && $check.prop('checked') === true) {
            $bool = true
        }
        if (!$bool && !$bool1) {
            return false
        } else if ($bool && bool1) {
            location.href = "http://10.31.162.48/north/src/login.html"
            $.post("http://10.31.162.48/north/php/registry1.php", {
                username: $username.val(),
                password: $password.val(),
                email: $email.val()
            })
        }

    })

}(jQuery)