$(function(){
	
	var
	iTotal=0,     //商品总价
	iGood =0,	  //商品总件数
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
	/*删除当前一条商品信息*/
	$('.good-list .delete').on('click',function(){
		if(confirm('确定要将此商品从购物车中移除么？')){
			/*var
		index=$('.good-list .delete').index($(this));
		$('.good-list li').eq(index).remove();*/
		$(this).parent().remove();
		//计算剩余商品总价
		var
		iTotal=0;
	$('.good-list li').each(function(){
		iTotal=iTotal+$(this).children('b').data('price')*$(this).children('.gd-num').val();
	});
	$('.total i').text(iTotal+'.00');
	$('#top-nav').children('li').children('a').children('strong').text(iGood);
		//计算剩余商品总数
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	
	//当购物车为空时
	if(iGood==0){
		$('.car-list').remove();
		$('#car-hide').show();
	}
	
		}
		
	
	});
	/*增加当前一条商品数量*/
	$('#gd-num1').parent().children('.add').on('click',function(){
		iNum1++;
		$('#gd-num1').val(iNum1);
		iTotal=iTotal+$('#gd-num1').parent().children('b').data('price');
		$('.total i').text(iTotal+'.00');
		//商品总件数
		//计算剩余商品总数
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	$('#top-nav').children('li').children('a').children('strong').text(iGood);
	});
	$('#gd-num2').parent().children('.add').on('click',function(){
		iNum2++;
		$('#gd-num2').val(iNum2);
		iTotal=iTotal+$('#gd-num2').parent().children('b').data('price');
		$('.total i').text(iTotal+'.00');
		//商品总件数
		//计算剩余商品总数
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	});
	$('#gd-num3').parent().children('.add').on('click',function(){
		iNum3++;
		$('#gd-num3').val(iNum3);
		iTotal=iTotal+$('#gd-num3').parent().children('b').data('price');
		$('.total i').text(iTotal+'.00');
		//商品总件数
		//计算剩余商品总数
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
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
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	$('#top-nav').children('li').children('a').children('strong').text(iGood);
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
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	$('#top-nav').children('li').children('a').children('strong').text(iGood);
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
		var 
		iGood=0;
	$('.good-list li').each(function(){
		iGood=iGood+Number($(this).children('.gd-num').val());
	});
	$('.car-bottom b').text(iGood);
	$('#top-nav').children('li').children('a').children('strong').text(iGood);
	});
		//checkall复选框
		$('input[name=checkall]').click(function(){
			if($(this).prop('checked')===false){
				$('input[name=checkitem]').prop('checked','');
				$('input[name=checkall]').prop('checked','');
			}else{
				$('input[name=checkitem]').prop('checked','checked');
				$('input[name=checkall]').prop('checked','checked');
			}
		});
		//checkitem复选框
		var bBtn=false;
		$('input[name=checkitem]').click(function(){
			if($(this).prop('checked')===false){
				$(this).prop('checked','');
			}else{
				$(this).prop('checked','checked');
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
			}else{
				$('input[name=checkall]').prop('checked','');
			}
		});
		
});