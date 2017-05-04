<?php
//接受用户提交信息
$username = $_POST['username'];
$password = $_POST['password'];

//检测用户是否登录成功
require_once('login-class.php');

//实例化login对象
$login = new Login;

$bBtn = $login->checkLogin($username,$password);
if($bBtn){
	$url = 'jump.html';
}else{
	$url = 'login.html';
}
?>
<script type="text/javascript">
	location.href='<?php echo $url; ?>'
</script>