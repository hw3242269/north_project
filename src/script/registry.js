!function ($) {
    const $form = $('form')
    const $username = $('.username')
    const $password = $('.password')
    const $email = $('.email')
    const $check = $('.checkbox')
    const $decide = $('.decide span')
    const $login = $('.login')


    let $userbool = true
    let $passbool = true
    let $emailbool = true
    let $checkbool = true
    // 用户名
    $username.on("blur", function () {
        // 验证唯一性
        if ($username.val() !== "") {
            let $size = $username.val().replace(/[\u4e00-\u9fa5]/g, 'ab').length
            if ($size < 16) {
                $.post('http://10.31.162.48/north/php/registry.php', { username: $username.val() },
                    function (data) {
                        if (data) {
                            $userbool = false
                            $decide.eq(0).html("用户名已存在").css({
                                color: "red"
                            })
                        } else {
                            $userbool = true
                            $decide.eq(0).html("√").css({
                                color: "#22bb55"
                            })
                        }
                    })
            } else {//验证长度
                $decide.eq(0).html('用户名长度有问题').css({
                    color: 'red',
                });
                $userbool = false
            }

        } else {//空值验证
            $userbool = false
            $decide.eq(0).html('用户名不能为空').css({
                color: 'red'
            });
        }
    })

    $username.on("focus", function () {//获得焦点显示文字
        $decide.eq(0).html('最长为8个汉字或16个英文字母').css({
            color: "#666666"
        })
    })


    $password.on('input', function () {
        // 密码强度验证
        let $passVal = $(this).val();
        if ($passVal.length >= 8 && $passVal.length <= 16) {
            let $passNum = /\d+/;
            let $passCaps = /[A-Z]+/;
            let $passlower = /[a-z]+/;
            let $passSymbol = /[\W\_]+/;
            let $num = 0;
            if ($passNum.test($passVal)) $num++;
            if ($passCaps.test($passVal)) $num++;
            if ($passlower.test($passVal)) $num++;
            if ($passSymbol.test($passVal)) $num++;
            switch ($num) {
                case 1:
                    $decide.eq(1).html('弱').css({
                        left: 0,
                        color: 'red'
                    });
                    $passbool = false;
                    break;
                case 2:
                case 3:
                    $decide.eq(1).html('中').css({
                        left: 0,
                        color: 'orange'
                    });
                    $passbool = true;
                    break;
                case 4:
                    $decide.eq(1).html('强').css({
                        left: 0,
                        color: 'green'
                    });
                    $passbool = true;
                    break;
            }
            // 密码长度验证
        } else {
            $decide.eq(1).html('密码长度错误').css({
                left: 0,
                color: 'red'
            });
            $passbool = false;
        }
    });
    // 空值验证
    $password.on('blur', function () {
        if ($(this).val() !== '') {
            if ($passbool) {
                $decide.eq(1).html('√').css({
                    left: 0,
                    color: '#22bb55'
                });
                $passbool = true;
            }
        } else {
            $decide.eq(1).html('密码不能为空').css({
                color: 'red',
                left: 0
            });
            $passbool = false;
        }
    });
    $password.on('focus', function () {//获得焦点
        $decide.eq(1).html('长度为8~16个字符,需要包含数字，大小写字母，特殊符号中的两种字符').css({
            color: "#666666",
            left: -50
        });
    });

    // 邮箱验证
    $email.on('focus', function () {//获得焦点
        $decide.eq(2).html('您可以通过该邮箱登录或找回密码').css({
            color: "#666666",
        });
    });
    $email.on("blur", function () {
        //验证邮箱格式是否正确
        if ($email.val() !== "") {
            let $emailVal = /^(\w+[\+\-\.]*\w+)\@(\w+[\-\.]*\w+)\.(\w+[\-\.]*\w+)$/
            if ($emailVal.test($email.val())) {
                $emailbool = true
                $decide.eq(2).html("√").css({
                    color: "#22bb55"
                })
            } else {//验证邮箱格式是否正确
                $decide.eq(2).html('您的邮箱格式有问题').css({
                    color: 'red',
                });
                $emailbool = false
            }

        } else {//空值验证
            $emailbool = false
            $decide.eq(2).html('邮箱不能为空').css({
                color: 'red'
            });
        }
    })


    $form.on('submit', function () {
        if ($username.val() === '') {
            $decide.eq(0).html('用户名不能为空').css({
                color: 'red'
            });
            $userbool = false;
        }

        if ($password.val() === '') {
            $decide.eq(1).html('密码不能为空').css({
                color: 'red'
            });
            $passbool = false;
        }
        if ($email.val() === '') {
            $decide.eq(2).html('邮箱不能为空').css({
                color: 'red'
            });
            $emailbool = false;
        }
        // 判断I agree是否选中
        if ($check.prop('checked') === false) {
            $checkbool = false
            $decide.eq(3).html('您需要同意用户协议方可正常注册').css({
                color: 'red'
            });
        } else {
            $checkbool = true
            $decide.eq(3).html('')
        }
        //全部不为空时才可以提交
        console.log($userbool);
        console.log($passbool);
        console.log($emailbool);
        console.log($checkbool);
        if (!$userbool || !$passbool || !$emailbool || !$checkbool) {
            return false;
        }else if ($userbool && $passbool && $emailbool && $checkbool) {
            location.href = "http://10.31.162.48/north/src/login.html"
            $.post("http://10.31.162.48/north/php/registry.php", {
                username: $username.val(),
                password: $password.val(),
                email: $email.val()
            })
        }
    });



}(jQuery)