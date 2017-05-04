require.config({
	jquery:'jquery',
	cookie:'cookie'
});
require(['jquery','cookie'],function($,cookie){
	$(function(){
		//添加商品到购物车
		$('#car').click(function(){
			//第一次添加商品	
			var 
			//假设商品没添加过
			isAdd = false,
			sGoods = cookie.getCookie('goods');
			if(typeof sGoods === 'undefined'){
				var aGoods = [];//相当于购物车的车子
			}else{
				var aGoods = JSON.parse(sGoods);
				//判断当前商品有没有添加过
				for (var i=0;i<aGoods.length;i++) {
					if(aGoods[i].id == $(this).data('id')){
						aGoods[i].num++;
						isAdd=true;
						break;
					}
				}
			}
			//如果isAdd为false，说明商品没有添加过
			if(!isAdd){
				var oGodds = {
					id:    $(this).data('id'),
					title: $(this).data('title'),
					price: $(this).data('price'),
					url:   $(this).data('url'),
					num:   1
				};
				aGoods.push(oGodds);
			}
			
			//存储cookie
			cookie.setCookie('goods',JSON.stringify(aGoods),7);
		});
		var 
	iIndexBigger=0,
	iGoods=1,
	i=0;
	//导航菜单
	$('.nav-left').on('mousemove',function(){
		$('.nav-left li').show();
	});
	$('.nav-left').on('mouseout',function(){
		$('.nav-left li').not('.nav-left li:eq(0)').hide();
	});
	
	$('#hide').on('mouseover',function(){
		$('.nav-left li').show();
		$(this).css('display','block');
	}).on('mouseout',function(){
		$(this).css('display','none');
		$('.nav-left li').not('.nav-left li:eq(0)').hide();
	});
	
	
	/*放大镜*/
	/*点击导航图标更换m ,b中图片*/
	$('.bigger-nav li').click(function(){
		iIndexBigger=$(this).index();
		$('.bigger-m img').each(function(k,v){
			if(iIndexBigger==k){
				$(v).show().siblings().hide();
				$('.bigger-b').css('background-image',' url(img/detial-slider'+(k+1)+'.png)');
				}
			});
		});
		
	/*遮罩层出现消失*/	
	$('.bigger-m').on('mouseenter',function(){
		$('.bigger-b').fadeIn(100);
		$('#mask').fadeIn(100);
	});
	$('.bigger-m').on('mouseleave',function(){
		$('.bigger-b').fadeOut(100);
		$('#mask').fadeOut(100);
	});
	/*遮罩层跟随移动*/	
	
		
	$('.bigger-m').on('mousemove',function(ev){
		var 
		ev = ev || window.event,
		iX = ev.clientX-$('.bigger-m').offset().left-$('#mask').width()/2,
		/*top方向上要+上一个滚动条隐藏的高度*/
		iY = ev.clientY-$('.bigger-m').offset().top-$('#mask').height()/2+$(window).scrollTop();
		if(iX<=0){
			iX=0;
		}
		if(iX>=200){
			iX=200;
		}
		if(iY<=0){
			iY=0;
		}
		if(iY>=200){
			iY=200;
		}
		/*遮罩层跟随移动*/
		$('#mask').css({left:''+iX+'px',top:''+iY+'px'});
		/*大图背景position改变*/
		$('.bigger-b').css({
			backgroundPositionX:-800*iX/$('.bigger-m').width()+'px',
			backgroundPositionY:-800*iY/$('.bigger-m').height()+'px'
		});
	});
	//改变商品数量
	$('.add').click(function(){
		iGoods++;
		$('.number input').val(iGoods);
	});
	$('.reduce').click(function(){
		iGoods--;
		if(iGoods<=1){
			iGoods=1;
		}
		$('.number input').val(iGoods);
	});
	$('.number input').change(function(){
		iGoods=$('.number input').val();
	})
	//右侧热销商品选项卡
	$('.hot-card span').on('mouseover',function(){
		var iIndex = $(this).index();
		if(iIndex==0){
			$('.hot-card i').hide();
			$('.first i').show();
			$('.hd img').attr('src','img/maotai.png');
		}else{
			$('.hot-card i').show();
			$('.first i').hide();
			$('.hd img').attr('src','img/wuliangye.png');
		}
	});
	//商品详情介绍、评论、咨询栏随滚动事件固定
	$(window).scroll(function(){
		if($(window).scrollTop()>=850){
			$('.introduce').css('position','fixed');
		}else{
			$('.introduce').css('position','absolute');
		}
	});
	//introduce选项卡
	$('.introduce a').on('click',function(){
		$(this).addClass('in-act').siblings().removeClass('in-act');
		if($(this).index()!=0){
			$('.gd-name').hide();
			$('.gd-pic').hide();
			$('.detial-pic').hide();
		}
		if($(this).index()==1){
			$(window).scrollTop(869);
		}
		if($(this).index()==2){
			$(window).scrollTop(2172);
		}
		if($(this).index()==0){
			$(window).scrollTop(840);
			$('.gd-name').show();
			$('.gd-pic').show();
			$('.detial-pic').show();
		}
	});
	//ajax获取评论内容 
	//页面打开时获取
	$.ajax({
		type:"get",
		url:"message.php",
		data:{page:1},
		async:true,
		success:function(data){
			//将字符串转化为对象
			data=JSON.parse(data);
			data.forEach(function(v){
				$('.buyer-list').append(`<li>
								<span>初次评价:</span>
								<p>${v.content}</p>
								<span class="buyer-id">${v.username}<i></i></span>
							</li>`)
			})
		}
	});
	//点击列表导航按钮获取对应评论内容
	$('.buyer-nav a').click(function(){
		var iIndex=$(this).index();
		if(iIndex==5){
			i++;
			if(i>=3){
				i=3;
			}
		}else if(iIndex==0){
			i--;
			if(i<=0){
				i=0;
			}
		}else{
			i=iIndex-1;
		}
		
		if(i<=0){
			$('.buyer-nav a').eq(0).hide();
		}else{
			$('.buyer-nav a').eq(0).css('display','inline-block');
		};
		if(i>=3){
			$('.buyer-nav a').eq(5).hide();
		}else{
			$('.buyer-nav a').eq(5).show();
		};
		$('.buyer-list').empty();
		$('.buyer-nav a').eq((i+1)).addClass('buyer-act').siblings().removeClass('buyer-act');
		$.ajax({
			type:"get",
			url:"message.php",
			data:{page:i+1},
			async:true,
			success:function(data){
				//将字符串转化为对象
				data=JSON.parse(data);
				data.forEach(function(v){
					$('.buyer-list').append(`<li>
								<span>初次评价:</span>
								<p>${v.content}</p>
								<span class="buyer-id">${v.username}<i></i></span>
							</li>`)
				})
			}
		});
	});
	});
});