<?php
include "conn.php";

$result = $conn->query("select * from north_tab");

$shoparr=array();
for($i=0;$i<$result->num_rows;$i++){
    $shoparr[$i]=$result->fetch_assoc();
}

echo json_encode($shoparr);