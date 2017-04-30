$(function(){
	var 
	iIndex=0,
	oTimer=null,
	k=0,
	iIndex1=0,
	iIndext=0,
	iIndexmf1=0,
	iIndexmf2=0,
	iIndexmf3=0,
	iIndexmf4=0;
	//鼠标划入，导航菜单出现
	$('.nav-left li').on('mouseover',function(){
		var i=$(this).index();
		if(!i==0){
			$('#hide').css('display','block');
			$('#hide .adv').attr('src','img/nav'+i+'.jpg')
		}
	}).on('mouseout',function(){
		$('#hide').css('display','none');
	});
	
	$('#hide').on('mouseover',function(){
		$(this).css('display','block');
	}).on('mouseout',function(){
		$(this).css('display','none');
	});
	
	
	//轮播图
	//划入导航栏操作
	$('#banner-nav li').on('mouseover',function(){
		clearInterval(oTimer);
		iIndex=$(this).index();
		if(!$(this).hasClass('bigger')){
			$('#banner-bg li').each(function (k, v) {
					if(k == iIndex) {
						$(this).stop(true,true).fadeIn(500);
					} else {
						$(this).stop(true).fadeOut(500);
					}
				});
			$(this).addClass('bigger').siblings().removeClass('bigger');
		}
	
	});
	
	//划出导航栏
	$('#banner-nav li').on('mouseout',function(){
		oTimer = setInterval(function(){
			iIndex++;
			if(iIndex===8){
				iIndex=0;
			}
			$('#banner-bg li').each(function (k, v) {
				if(k == iIndex) {
					$(this).fadeIn(500);
				} else {
					$(this).fadeOut(500);
				}
			});
			$('#banner-nav li:eq('+iIndex+')').addClass('bigger').siblings().removeClass('bigger');
	},3000);
	});
	//自动轮播
	oTimer = setInterval(function(){
		iIndex++;
			if(iIndex===8){
				iIndex=0;
			}
		$('#banner-bg li').each(function (k, v) {
			if(k == iIndex) {
				$(this).fadeIn(500);
			} else {
				$(this).fadeOut(500);
			}
		});
			$('#banner-nav li:eq('+iIndex+')').addClass('bigger').siblings().removeClass('bigger');
	},3000);
	
	
	//选项卡
	//导航菜单
	$('#con-nav li').on('mouseover',function(){
		var i=$(this).index();
		$(this).addClass('con-active').siblings().removeClass('con-active');
		$('.con-list li').children().attr('src','img/jiu'+(i+1)+'.jpg');
	});
	//floor区域
	//f1
	$('.f1-list li').on('mousemove',function(){
		var iF=$(this).index();
		$('.f1-list li').each(function(){
			if(!iF==0){
				$('.f1 .main2').css('display','none');
				$('.f1 .main2-hid').css('display','block');
			}else{
				$('.f1 .main2').css('display','block');
				$('.f1 .main2-hid').css('display','none');
			}
		});
	});
	$('.f1 .f1-list li').on('mousemout',function(){
	});
	
	//f2
	$('.f2-list li').on('mousemove',function(){
		var iF=$(this).index();
		$('.f2-list li').each(function(){
			if(!iF==0){
				$('.f2 .main2').css('display','none');
				$('.f2 .main2-hid').css('display','block');
			}else{
				$('.f2 .main2').css('display','block');
				$('.f2 .main2-hid').css('display','none');
			}
		});
	});
	$('.f2 .f2-list li').on('mousemout',function(){
	});
	
	//f3
	$('.f3-list li').on('mousemove',function(){
		var iF=$(this).index();
		$('.f3-list li').each(function(){
			if(!iF==0){
				$('.f3 .main2').css('display','none');
				$('.f3 .main2-hid').css('display','block');
			}else{
				$('.f3 .main2').css('display','block');
				$('.f3 .main2-hid').css('display','none');
			}
		});
	});
	$('.f3 .f3-list li').on('mousemout',function(){
	});
	
	//f4
	$('.f4-list li').on('mousemove',function(){
		var iF=$(this).index();
		$('.f4-list li').each(function(){
			if(!iF==0){
				$('.f4 .main2').css('display','none');
				$('.f4 .main2-hid').css('display','block');
			}else{
				$('.f4 .main2').css('display','block');
				$('.f4 .main2-hid').css('display','none');
			}
		});
	});
	$('.f4 .f4-list li').on('mousemout',function(){
	});
	
	//floor轮播图
	//f1
	//右边按钮
	$('.f1 .ms-btnr').click(function(){
		iIndexmf1++;
		if(iIndexmf1===3){
			iIndexmf1=0
		}
		$('.f1 .ms-list').stop(true).animate({left:'-'+iIndexmf1*190+'px'},300);
	});
	//左边按钮
	$('.f1 .ms-btnl').click(function(){
		iIndexmf1--;
		if(iIndexmf1===-1){
			iIndexmf1=2
		}
		$('.f1 .ms-list').stop(true).animate({left:'-'+iIndexmf1*190+'px'},300);
	});
	//f2
	//右边按钮
	$('.f2 .ms-btnr').click(function(){
		iIndexmf2++;
		if(iIndexmf2===3){
			iIndexmf2=0
		}
		$('.f2 .ms-list').stop(true).animate({left:'-'+iIndexmf2*190+'px'},300);
	});
	//左边按钮
	$('.f2 .ms-btnl').click(function(){
		iIndexmf2--;
		if(iIndexmf2===-1){
			iIndexmf2=2
		}
		$('.f2 .ms-list').stop(true).animate({left:'-'+iIndexmf2*190+'px'},300);
	});
	//f3
	//右边按钮
	$('.f3 .ms-btnr').click(function(){
		iIndexmf3++;
		if(iIndexmf3===3){
			iIndexmf3=0
		}
		$('.f3 .ms-list').stop(true).animate({left:'-'+iIndexmf3*190+'px'},300);
	});
	//左边按钮
	$('.f3 .ms-btnl').click(function(){
		iIndexmf3--;
		if(iIndexmf3===-1){
			iIndexmf3=2
		}
		$('.f3 .ms-list').stop(true).animate({left:'-'+iIndexmf3*190+'px'},300);
	});
	//f4
	//右边按钮
	$('.f4 .ms-btnr').click(function(){
		iIndexmf4++;
		if(iIndexmf4===3){
			iIndexmf4=0
		}
		$('.f4 .ms-list').stop(true).animate({left:'-'+iIndexmf4*190+'px'},300);
	});
	//左边按钮
	$('.f4 .ms-btnl').click(function(){
		iIndexmf4--;
		if(iIndexmf4===-1){
			iIndexmf4=2
		}
		$('.f4 .ms-list').stop(true).animate({left:'-'+iIndexmf4*190+'px'},300);
	});
	
	//底部轮播图
	//右边按钮
	$('#btn-right').click(function(){
		k++;
		if(k===10){
			k=0
		}
		$('.bs-outer').stop(true).animate({left:'-'+k*550+'px'},300);
	});
	//左边按钮
	
	$('#btn-left').click(function(){
		k--;
		if(k===-1){
			k=9
		}
		$('.bs-outer').stop(true).animate({left:'-'+k*550+'px'},300);
	});
	
	
	//隐藏区域划过显示
	//顶部隐藏区域
	$('.ht-p').on('mouseover',function(){
		iIndext=$('.ht-p').index($(this));
		$('.hide-top:eq('+iIndext+')').css('display','block');
	});
	$('.ht-p').on('mouseout',function(){
		iIndext=$('.ht-p').index($(this));
		$('.hide-top:eq('+iIndext+')').css('display','none');
	});
	//右侧导航菜单
	//鼠标划入出现
	$('#fix-right .hide-p').on('mouseover',function(){
		//this指向错误，指向实际父级元素，而不是上面的iIndex1=$(this).index();
		//纠正，
		iIndex1=$('#fix-right .hide-p').index($(this));
		$('.hide').each(function (k, v) {
				if(k == iIndex1) {
					$(this).stop(true).css('display','block').animate({opacity:'1',left:'-100px'},300);
				} else {
					$(this).css('display','none').stop(true).animate({opacity:'0',left:'-150px'},300)}
	
				});
			});
	//鼠标划出消失		
	$('#fix-right .hide-p').on('mouseout',function(){
		iIndex1=$('#fix-right .hide-p').index($(this));
		$('.hide:eq('+iIndex1+')').css('display','none').stop(true).animate({opacity:'0',left:'-150px'},300);
	});

	//左侧导航电梯
	
	//滚动事件
	window.onscroll = function(){
	var 
	ev=ev||window.event,
	iH=document.documentElement.scrollTop||document.body.scrollTop;
	if(iH>=600&iH<1400){
		$('#fix-left').fadeIn(300);
		$('#fix-list li:eq(0)').addClass('fix-active').siblings().removeClass('fix-active');
	}else if(iH>=1400&iH<2200){
		$('#fix-left').fadeIn(300);
		$('#fix-list li:eq(1)').addClass('fix-active').siblings().removeClass('fix-active');
	}
	else if(iH>=2200&iH<3000){
		$('#fix-left').fadeIn(300);
		$('#fix-list li:eq(2)').addClass('fix-active').siblings().removeClass('fix-active');
	}
	else if(iH>=3000&iH<3800){
		$('#fix-left').fadeIn(300);
		$('#fix-list li:eq(3)').addClass('fix-active').siblings().removeClass('fix-active');
	}
	else{
		$('#fix-left').fadeOut(300);
	}
	}
	//点击事件
	$('#fix-list li').on('click',function(){
		var i = $(this).index();
		switch(i){
			case 0:
			$('body').animate({'scrollTop':800});
			break;
			case 1:
			$('body').animate({'scrollTop':1600});
			break;
			case 2:
			$('body').animate({'scrollTop':2400});
			break;
			case 3:
			$('body').animate({'scrollTop':3200});
			break;
		}
	});
	
});