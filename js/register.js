$(function(){
	var 
	iIndex=0,
	bBtn1=false,
	bBtn2=false,
	bBtn3=false,
	bBtn4=false,
	bBtn5=false,
	bBtn6=false;
	$('input').on('focus',function(){
		iIndex=$('input').index($(this));
			$('.hide').each(function(k,v){
			if(k==iIndex){
				$('.hide').eq(iIndex).show();
			}
		});
	});
	//失去焦点时判断是否符合要求
	//手机号码验证
	$('.username input').on('blur',function(){
	  var str = $(this).val();
      var ret = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if(ret.test(str)){
        $('.username .hide').hide();
        bBtn1=true;
      }else{
         $('.username .hide').css({background:'#FFEBEB',borderColor:'red',color:'red'});
         bBtn1=false;
      }
	});
	//图形验证
	$('.vali input').on('blur',function(){
		var str = $(this).val();
		if(str===$('.vali img').data('num')){
			$('.vali .hide').hide();
			bBtn2=true;
		}else{
			$('.vali .hide').css({background:'#FFEBEB',borderColor:'red',color:'red'});
			 bBtn2=false;
		}
	});
	//密码验证
	$('.password input').on('blur',function(){
	  var str = $(this).val();
	  //大小写英文字母和数字混合组成的6-20位字符串
      var ret = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/;
      if(ret.test(str)){
        $('.password .hide').hide();
        bBtn3=true;
      }else{
         $('.password .hide').css({background:'#FFEBEB',borderColor:'red',color:'red'});
          bBtn3=false;
      }
	});
	//再次确认密码验证
	$('.confirm input').on('blur',function(){
		var 
		str1 = $('.password input').val(),
		str2 = $(this).val();
		if(str1==str2){
			 $('.confirm .hide').hide();
			 bBtn4=true;
		}else{
			  $('.confirm .hide').css({background:'#FFEBEB',borderColor:'red',color:'red'});
			   bBtn4=false;
		}
	});
	//手机验证
	$('.phone input').on('blur',function(){
		var 
		str1 = $('.phone a').data('value');
		str2 = $(this).val();
		if(str1==str2){
			 $('.phone .hide').hide();
			 bBtn5=true;
		}else{
			$('.phone .hide').css({background:'#FFEBEB',borderColor:'red',color:'red'});
			 bBtn5=false;
		}
	});
	
	//提交验证
	//***************************************
	//问题点击按钮时单选框（双选框）会默认选中
	//***************************************
	
	$('#btn').click(function(){
		if($('.radio input').attr('checked','checked')){
			$('.radio .hide').hide();
			bBtn6=true;
			if(bBtn1===true&&bBtn1===true&&bBtn2===true&&bBtn3===true&&bBtn4===true&&bBtn5===true&&bBtn6===true){
			alert('提交成功!');
		}else{
			alert('请核实注册信息！');
		}
		}
		
	});
	
});