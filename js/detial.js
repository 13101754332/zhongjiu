$(function(){
	var 
	iIndexBigger=0,
	iGoods=1;
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
		console.log($(window).scrollTop());
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
	
	
//area插件	
/*var currentShowCity=0;
$(document).ready(function(){
   $("#province").change(function(){
   $("#province option").each(function(i,o){
   if($(this).attr("selected"))
   {
  
   $(".city").hide();
   $(".city").eq(i).show();
   currentShowCity=i;
   }
   });
   });
   $("#province").change();
});
function getSelectValue(){
alert("1级="+$("#province").val());
  
$(".city").each(function(i,o){
                    
 if(i == currentShowCity){
alert("2级="+$(".city").eq(i).val());
 }
   });
}*/
});