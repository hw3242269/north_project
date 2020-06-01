<?php
include "conn.php";
if(isset($_POST['username'])){
    $username=$_POST['username'];
    $password = sha1($_POST['password']);
    $email=$_POST['email'];
    $conn->query("insert registry1903 values(null,'$username','$password',null,'$email',NOW())");
}
