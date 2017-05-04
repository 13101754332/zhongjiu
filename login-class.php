<?php
class Login{
	//账号列表
	private $username=array(
		array(
			'username'=>'13101754332',
			'password'=>'123456q'
			),
		array(
			'username'=>'18739307801',
			'password'=>'123456q'
			),
		array(
			'username'=>'18203668194',
			'password'=>'123456q'
			)	
	);
	//检测用户是否登录成功
	public function checkLogin($username,$password){
		foreach($this->username as $v){
			//判断账号和密码是否正确
			if($v['username']===$username && $v['password']===$password){
				return true;
			}
		}
		return false;
	}
}
?>