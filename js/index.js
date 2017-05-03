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
		if(i==0){
			$('#hide').hide();
		}
		if(i==1){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>
							<li><a href="#">剑南春</a></li>`);
			$('.type').empty().append(`<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>
							<li><a href="#">酱香型</a></li>`);
			$('.origin-p').empty().append(`<h4>产区</h4>
							<ul class="hide-nav origin">
							<li><a href="#">贵州</a></li>
							<li><a href="#">贵州</a></li>
							<li><a href="#">贵州</a></li>
							<li><a href="#">贵州</a></li>
							<li><a href="#">贵州</a></li>
							</ul>`);
		}
		if(i==2){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">拉菲</a></li>`);
			$('.type').empty().append(`<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">果酒</a></li>`);
			$('.origin-p').empty();			
		}
		if(i==3){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>`);
			$('.type').empty().append(`<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>
							<li><a href="#">洋酒</a></li>`);
			$('.origin-p').empty().append(`<h4>产区</h4>
							<ul class="hide-nav origin">
							<li><a href="#">法国</a></li>
							<li><a href="#">法国</a></li>
							<li><a href="#">法国</a></li>
							<li><a href="#">法国</a></li>
							<li><a href="#">法国</a></li>
							</ul>`);
		}
		if(i==4){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">女儿红</a></li>
							<li><a href="#">女儿红</a></li>
							<li><a href="#">女儿红</a></li>
							<li><a href="#">女儿红</a></li>
							<li><a href="#">女儿红</a></li>
							<li><a href="#">女儿红</a></li>`);
			$('.type').empty().append(`<li><a href="#">聚会用酒</a></li>
							<li><a href="#">聚会用酒</a></li>
							<li><a href="#">聚会用酒</a></li>
							<li><a href="#">礼节拜访</a></li>
							<li><a href="#">礼节拜访</a></li>
							<li><a href="#">礼节拜访</a></li>
							<li><a href="#">礼节拜访</a></li>`);
			$('.origin-p').empty();				
		}
		if(i==5){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">茅台</a></li>
							<li><a href="#">茅台</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">人头马</a></li>`);
			$('.type').empty().append(`<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>
							<li><a href="#">礼盒</a></li>`);
			$('.origin-p').empty().append(`<h4>适用</h4>
							<ul class="hide-nav origin">
							<li><a href="#">送长辈</a></li>
							<li><a href="#">送朋友</a></li>
							<li><a href="#">自己喝</a></li>
							</ul>`);
		}
		if(i==6){
			$('#hide').show();
			$('#hide .adv').attr('src','img/nav'+i+'.jpg');
			$('.band').empty().append(`<li><a href="#">剑南春</a></li>
							<li><a href="#">茅台</a></li>
							<li><a href="#">拉菲</a></li>
							<li><a href="#">XO</a></li>
							<li><a href="#">人头马</a></li>
							<li><a href="#">张裕</a></li>
							<li><a href="#">白兰地</a></li>
							<li><a href="#">干红</a></li>`);
			$('.type').empty().append(`<li><a href="#">洋酒</a></li>
							<li><a href="#">果酒</a></li>
							<li><a href="#">黄酒</a></li>
							<li><a href="#">白酒</a></li>
							<li><a href="#">白开水</a></li>`);
			$('.origin').empty().append(`<li><a href="#">结婚</a></li>
							<li><a href="#">离婚</a></li>
							<li><a href="#">生孩子</a></li>`);	
										
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
		if(i==0){
			$('.con-list').empty().append(`<li><img src="img/jiu1.jpg"/></li>
				<li><img src="img/jiu2.jpg"/></li>
				<li><img src="img/jiu3.jpg"/></li>
				<li><img src="img/jiu4.jpg"/></li>
				<li><img src="img/jiu5.jpg"/></li>
				<li><img src="img/jiu6.jpg"/></li>
				<li><img src="img/jiu7.jpg"/></li>
				<li><img src="img/jiu8.jpg"/></li>
				<li><img src="img/jiu9.jpg"/></li>
				<li><img src="img/jiu10.jpg"/></li>`)
		}else if(i==1){
			$('.con-list').empty().append(`<li><img src="img/jiu10.jpg"/></li>
				<li><img src="img/jiu9.jpg"/></li>
				<li><img src="img/jiu8.jpg"/></li>
				<li><img src="img/jiu7.jpg"/></li>
				<li><img src="img/jiu6.jpg"/></li>
				<li><img src="img/jiu5.jpg"/></li>
				<li><img src="img/jiu4.jpg"/></li>
				<li><img src="img/jiu3.jpg"/></li>
				<li><img src="img/jiu2.jpg"/></li>
				<li><img src="img/jiu1.jpg"/></li>`)
		}
		else if(i==2){
			$('.con-list').empty().append(`<li><img src="img/jiu1.jpg"/></li>
				<li><img src="img/jiu4.jpg"/></li>
				<li><img src="img/jiu7.jpg"/></li>
				<li><img src="img/jiu2.jpg"/></li>
				<li><img src="img/jiu5.jpg"/></li>
				<li><img src="img/jiu8.jpg"/></li>
				<li><img src="img/jiu3.jpg"/></li>
				<li><img src="img/jiu6.jpg"/></li>
				<li><img src="img/jiu9.jpg"/></li>
				<li><img src="img/jiu10.jpg"/></li>`)
		}else if(i==3){
			$('.con-list').empty().append(`<li><img src="img/jiu10.jpg"/></li>
				<li><img src="img/jiu7.jpg"/></li>
				<li><img src="img/jiu4.jpg"/></li>
				<li><img src="img/jiu1.jpg"/></li>
				<li><img src="img/jiu8.jpg"/></li>
				<li><img src="img/jiu5.jpg"/></li>
				<li><img src="img/jiu2.jpg"/></li>
				<li><img src="img/jiu9.jpg"/></li>
				<li><img src="img/jiu6.jpg"/></li>
				<li><img src="img/jiu3.jpg"/></li>`)
		}else if(i==4){
			$('.con-list').empty().append(`<li><img src="img/jiu2.jpg"/></li>
				<li><img src="img/jiu3.jpg"/></li>
				<li><img src="img/jiu5.jpg"/></li>
				<li><img src="img/jiu10.jpg"/></li>
				<li><img src="img/jiu4.jpg"/></li>
				<li><img src="img/jiu7.jpg"/></li>
				<li><img src="img/jiu8.jpg"/></li>
				<li><img src="img/jiu9.jpg"/></li>
				<li><img src="img/jiu10.jpg"/></li>
				<li><img src="img/jiu1.jpg"/></li>`)
		}
	});
	//banner遮罩层
	$('.zzc:eq(0)').on('mouseover',function(){
		$(this).hide();
	});
	$('.bi-1').on('mouseout',function(){
		$('.zzc:eq(0)').fadeIn(300);
	});
	$('.zzc:eq(1)').on('mouseover',function(){
		$(this).hide();
	});
	$('.bi-2').on('mouseout',function(){
		$('.zzc:eq(1)').fadeIn(300);
	});
	
	//floor区域
	//封装函数f1,f2,f3,f4选项卡的mouseover函数
	function Mouseover(x){
		$('.f'+x+'-list li').on('mousemove',function(){
		var iF=$(this).index();
		$('.f'+x+'-list li').each(function(){
			if(iF==0){
				$('.f'+x+' .main2').css('display','block');
				$('.f'+x+' .main2-hid').css('display','none');
				
			}else if(iF==1){
				$('.f'+x+' .main2').css('display','none');
				$('.f'+x+' .main2-hid').css('display','block');
				$('.f'+x+' .main2-hid img').attr('src','img/m2-h2.png')
			}else if(iF==2){
				$('.f'+x+' .main2').css('display','none');
				$('.f'+x+' .main2-hid').css('display','block');
				$('.f'+x+' .main2-hid img').attr('src','img/m2-h3.png')
			}else if(iF==3){
				$('.f'+x+' .main2').css('display','none');
				$('.f'+x+' .main2-hid').css('display','block');
				$('.f'+x+' .main2-hid img').attr('src','img/m2-h4.png')
			}else if(iF==4){
				$('.f'+x+' .main2').css('display','none');
				$('.f'+x+' .main2-hid').css('display','block');
				$('.f'+x+' .main2-hid img').attr('src','img/m2-h5.png')
			}
		});
	});
	$('.f'+x+' .f'+x+'-list li').on('mousemout',function(){
	});
	};
	Mouseover(1);
	Mouseover(2);
	Mouseover(3);
	Mouseover(4);
	
	
	
	/*//f1
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
	});*/
	
	//floor轮播图
	//f1
	//右边按钮
	/*$('.f1 .ms-btnr').click(function(){
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
	});*/
	//f2
	//右边按钮
/*	$('.f2 .ms-btnr').click(function(){
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
	});*/
	//f3
	//右边按钮
	/*$('.f3 .ms-btnr').click(function(){
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
	});*/
	//f4
	//右边按钮
	/*$('.f4 .ms-btnr').click(function(){
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
	});*/
	//调用Slider函数
	Slider(1,iIndexmf1);
	Slider(2,iIndexmf2);
	Slider(3,iIndexmf3);
	Slider(4,iIndexmf4);
	
	/*封装中间轮播图函数f1,f2,f3,f4*/
	function Slider(x){
		//右边按钮
	$('.f'+x+' .ms-btnr').click(function(){
		iIndexmf4++;
		if(iIndexmf4===3){
			iIndexmf4=0
		}
		$('.f'+x+' .ms-list').stop(true).animate({left:'-'+iIndexmf4*190+'px'},300);
	});
	//左边按钮
	$('.f'+x+' .ms-btnl').click(function(){
		iIndexmf4--;
		if(iIndexmf4===-1){
			iIndexmf4=2
		}
		$('.f'+x+' .ms-list').stop(true).animate({left:'-'+iIndexmf4*190+'px'},300);
	});
	}
	
	
	
	
	
	
	
	
	
	/*封装中间轮播图函数*/
	
	
	
	
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
		$('.hide-top:eq('+iIndext+')').show();
	});
	$('.ht-p').on('mouseout',function(){
		iIndext=$('.ht-p').index($(this));
		$('.hide-top:eq('+iIndext+')').hide();
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