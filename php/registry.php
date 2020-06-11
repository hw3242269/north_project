<?php
include "conn.php";

if(isset($_POST['username'])){
    $user=$_POST['username'];
    $result=$conn->query("select*from registry1903 where username='$user'");
    if($result->fetch_assoc()){
        echo true;
    } else{
        echo false;
    }
}



if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password = sha1($_POST['password']);
    $email=$_POST['email'];
    $conn->query("insert registry1903 values(null,'$username','$password',null,'$email',NOW())");
    header('location:http://10.31.162.48/north/src/login.html');
}
