<?php
include "conn.php";

if(isset($_POST["username"]) && isset($_POST['password'])) {
    $user = $_POST['username'];
    $pass = sha1($_POST['password']) ;
    $result = $conn->query("select * from registry1903 where username='$user' and password = '$pass'");
    if($result->fetch_assoc()){
        echo true; //匹配成功
    }else{
        echo false; //匹配失败
    }
}