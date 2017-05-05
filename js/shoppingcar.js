require.config({
	jquery:'jquery',
	cookie:'cookie'
});

require(['jquery','cookie'],function($,cookie){
	$(function(){
		//显示商品
		var sCookie = cookie.getCookie('goods');
		var aCookie = typeof sCookie === 'undefined' ? [] : JSON.parse(sCookie);
		
		aCookie.forEach(function(v){
			$('.good-list').append(`<li>
							<input type="checkbox" name="checkitem" checked="checked" />
							<img src="${v.url}"/>
							<span>
								<p><a href="detail.html" class="hov">${v.title}</a></p>
								<p>商品货号：${v.id}</p>
							</span>
							<b class="red" data-price = "199">¥${v.price}.00</b>
							<a href="javascript:;" class="reduce">-</a>
							<input type="text" name="gd-num"  class="gd-num" value="${v.num}" >
							<a href="javascript:;" class="add">+</a>
							<a href="javascript:;" class="delete" data-id="${v.id}">删除</a>
						</li>`);
		});
		//封装计算商品总数和总价的函数
		function Count (){
			var
			iTotal=0,     //商品总价
			iGood =0;	  //商品总件数
			//商品总件数
			$('.good-list li').each(function(){
				iGood=iGood+Number($(this).children('.gd-num').val());
			});
			$('.car-bottom b').text(iGood);
			$('#top-nav').children('li').children('a').children('strong').text(iGood);
			//商品总价
			$('.good-list li').each(function(){
				iTotal=iTotal+$(this).children('b').data('price')*$(this).children('.gd-num').val();
			});
			$('.total i').text(iTotal+'.00');
			//当购物车为空时
			if(iGood==0){
				$('.car-list').remove();
				$('#car-hide').show();
			}
			}
		
			var
			iTotal=0,     //商品总价
			iGood =0;	  //商品总件数
			//商品总件数
			$('.good-list li').each(function(){
				iGood=iGood+Number($(this).children('.gd-num').val());
			});
			$('.car-bottom b').text(iGood);
			$('#top-nav').children('li').children('a').children('strong').text(iGood);
			//商品总价
			$('.good-list li').each(function(){
				iTotal=iTotal+$(this).children('b').data('price')*$(this).children('.gd-num').val();
			});
			$('.total i').text(iTotal+'.00');
			//删除商品
			$('.delete').click(function(){
				var iId = $(this).data('id');
				for (var i=0;i<aCookie.length;i++) {
					if(aCookie[i].id==iId){
						aCookie.splice(i,1);
					}
				}
				//再将新数组添加到cookie中
				cookie.setCookie('goods',JSON.stringify(aCookie),7);
				//删除DOM节点
				if(confirm('确定要将此商品从购物车移除么')){
					$(this).parent().remove();
				}
			
			Count();
		});
	//更改商品数量
	//增加
	$('.add').click(function(){
		var iId = $(this).next().data('id');
		console.log()
		for (var i=0;i<aCookie.length;i++) {
				if(aCookie[i].id==iId){
					aCookie[i].num++;
					$(this).prev().val(aCookie[i].num);
					Count();
				}
			}
		//再将新数组添加到cookie中
		cookie.setCookie('goods',JSON.stringify(aCookie),7);
	});
	//减少
	$('.reduce').click(function(){
		var iId = $(this).parent().children('.delete').data('id');
		for (var i=0;i<aCookie.length;i++) {
				if(aCookie[i].id==iId){
					aCookie[i].num--;
					var iprice=$(this).parent().children('b').data('price');
					if(aCookie[i].num<=0){
						iprice=0;
					}
					if(aCookie[i].num<=1){
						aCookie[i].num=1;
					}
					$(this).next().val(aCookie[i].num);
					Count();
				}
			}
		//再将新数组添加到cookie中
		cookie.setCookie('goods',JSON.stringify(aCookie),7);
	});
	/*});*/
/*});

$(function(){*/
	var
	iNum1=1,	  //		
	iNum2=1,      //
	iNum3=1;      //
	/*列表商品遮罩层*/
	$('.per-good').on({
		mouseover:function(){
			var iIndex=$(this).index();
		$('.good-mask').each(function(k,v){
			if(k==iIndex){
				$('.good-mask').eq(iIndex).show().siblings().hide();
			}
		});
		},
		mouseout:function(){
			var iIndex=$(this).index();
			$('.good-mask').each(function(k,v){
			if(k==iIndex){
				$('.good-mask').eq(iIndex).hide();
			}
		});
		}
	});
	Count();

/*增加当前一条商品数量*/
	$('#gd-num1').parent().children('.add').on('click',function(){
		iNum1++;
		$('#gd-num1').val(iNum1);
	Count();
	});
	
	$('#gd-num2').parent().children('.add').on('click',function(){
		iNum2++;
		$('#gd-num2').val(iNum2);
	});
	$('#gd-num3').parent().children('.add').on('click',function(){
		iNum3++;
		$('#gd-num3').val(iNum3);
		Count();
	});
	/*减少当前一条商品数量*/
	$('#gd-num1').parent().children('.reduce').on('click',function(){
		iNum1--;
		let
		iPrice=$('#gd-num1').parent().children('b').data('price');
		if(iNum1<1){
			iPrice=0
		}
		if(iNum1<=1){
			iNum1=1;
		}
		$('#gd-num1').val(iNum1);
		iTotal=iTotal-iPrice;
		$('.total i').text(iTotal+'.00');
		//计算剩余商品总数
		Count();
	});
	$('#gd-num2').parent().children('.reduce').on('click',function(){
		iNum2--;
		let
		iPrice=$('#gd-num2').parent().children('b').data('price');
		if(iNum2<1){
			iPrice=0
		}
		if(iNum2<=1){
			iNum2=1;
		}
		$('#gd-num2').val(iNum2);
		iTotal=iTotal-iPrice;
		$('.total i').text(iTotal+'.00');
		//计算剩余商品总数
		Count();
		});
	$('#gd-num3').parent().children('.reduce').on('click',function(){
		iNum3--;
		let
		iPrice=$('#gd-num3').parent().children('b').data('price');
		if(iNum3<1){
			iPrice=0
		}
		if(iNum3<=1){
			iNum3=1;
		}
		$('#gd-num3').val(iNum3);
		iTotal=iTotal-iPrice;
		$('.total i').text(iTotal+'.00');
		//计算剩余商品总数
		Count();
	});
		//checkall复选框
		$('input[name=checkall]').click(function(){
			if($(this).prop('checked')===false){
				$('input[name=checkitem]').prop('checked','');
				$('input[name=checkall]').prop('checked','');
				//总价格和总数为0
				iGood=0;
				iTotal=0;
				$('.total i').text(iTotal+'.00');
				$('#top-nav').children('li').children('a').children('strong').text(iTotal);
				$('.car-bottom b').text(iGood);
			}else{
				$('input[name=checkitem]').prop('checked','checked');
				$('input[name=checkall]').prop('checked','checked');
				Count();
				iGood=0;
				iTotal=0;
				$('.good-list li').each(function(){
				iTotal=iTotal+$(this).children('b').data('price')*$(this).children('.gd-num').val();
				});
				$('.good-list li').each(function(){
					iGood=iGood+Number($(this).children('.gd-num').val());
				});
			}
		});
		//checkitem复选框
		var bBtn=false;
		$('li').on('click','input[name=checkitem]',function(){
			if($(this).prop('checked')===false){
				
				$(this).prop('checked','');
				iGood--;
				$('.car-bottom b').text(iGood);
				iTotal=iTotal-$(this).parent().children('b').data('price');
				$('.total i').text(iTotal+'.00');
			}else{
				$(this).prop('checked','checked');
				iGood++;
				$('.car-bottom b').text(iGood);
				iTotal=iTotal+$(this).parent().children('b').data('price');
				$('.total i').text(iTotal+'.00');
			}
			$('input[name=checkitem]').each(function(v){
				if($(this).prop('checked')===true){
					return bBtn=true;
				}else{
					return bBtn=false;
				}
			});
			
			if(bBtn){
				$('input[name=checkall]').prop('checked','checked');
				Count();
			}else{
				$('input[name=checkall]').prop('checked','');
			}
		});
		//
		$('.clear').click(function(){
			if($('input[name=checkall]').prop('checked')==true){
				if(confirm("确定要将选中商品从购物车移除么")){
					$('.car-list').remove();
					$('#car-hide').show();
				}
			}else{
				$('input[name=checkitem]').each(function(v){
				if($(this).prop('checked')===true){
					var iId = $(this).siblings('.delete').data('id');
					for (var i=0;i<aCookie.length;i++) {
					if(aCookie[i].id==iId){
						aCookie.splice(i,1);
						}
					}
					//再将新数组添加到cookie中
					cookie.setCookie('goods',JSON.stringify(aCookie),7);
					//删除DOM节点
					if(confirm('确定要将此商品从购物车移除么')){
						$(this).parent().remove();
					}
				
					Count();
					iGood=0;
					iTotal=0;
					$('.total i').text(iTotal+'.00');
					$('#top-nav').children('li').children('a').children('strong').text(iTotal);
					$('.car-bottom b').text(iGood);
				}
			});
				
			}
		});
		
		
		
		//结算跳转order
		$('#pay').click(function(){
			window.open('order.html','_self');
		});
		
	});	
});
