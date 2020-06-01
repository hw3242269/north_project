<?php
header('content-type:text/html;charset=utf-8');


define('HOST', 'localhost'); 
define('USERNAME', 'root'); 
define('PASSWORD', 'root');
define('DBNAME', 'taobao');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME);
if ($conn->connect_error) {
    die('数据库连接错误，请检查用户名和密码！' . $conn->connect_error);
}

$conn->query('SET NAMES UTF8');