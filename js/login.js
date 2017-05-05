$(function(){
	//切换登录模式
	$('.log-list li').click(function(){
		var iIndex=$(this).index();
		if(iIndex==0){
			$(this).addClass('active').siblings().removeClass('active');
			$('form').hide();
			$('.tip').hide();
			$('.hide').show();
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			$('form').show();
			$('.tip').show();
			$('.hide').hide();
		}
	});
	//登录检测
	$('')
});