!function ($) {
    const $form = $('form input')
    const $username = $('.username')
    const $password = $('.password')
    const $btn = $('.login')
    const $decide = $('.decide span')


    $btn.on("click", function () {
        if ($username.val() !== "" && $password.val() !== "") {
            $.post('http://10.31.162.48/north/php/login.php', {
                username: $username.val(),
                password: $password.val()
            }, function (data) {
                if (data) {
                    location.href = "http://10.31.162.48/north/src/index.html"
                } else {
                    $('.hint').show()
                    $('.cover').show()
                    $('.hint span').on("click", function () {
                        $('.hint').hide()
                        $('.cover').hide()
                        $password.val("")
                        $form.get(0).focus()
                    })

                }
            })
        }
        if ($username.val() === "") {
            $decide.eq(0).show()
        } else {
            $decide.eq(0).hide()
        }
        if ($password.val() === "") {
            $decide.eq(1).show()
        } else {
            $decide.eq(1).hide()
        }
    })
}(jQuery)