<?php
$phonenumber = $_POST['phonenumber'];
$password    = $_POST['password'];


//连接数据库
$mysqli = new mysqli('localhost','root','root','zhongjiuwang');

$mysqli -> query('set name utf8');

echo $phonenumber;
//添加到数据库
$mysqli ->query('insert into username(phonenumber,password) value("'.$phonenumber.'","'.md5($password).'")');
?>