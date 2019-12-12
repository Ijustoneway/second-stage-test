  window.onload=function(){
	 
		$('.register-huawei').on('click',function(){
			$('.for-login').css({
				left:(window.innerWidth-$('.for-login').width())/2+'px',
				display:'block',
			})
			$('.but').off();
			$('.h4').html('注册账号');
			$('.but').val('注册');
			$('.but').on('click',function(){
				 var username =$('.name').val().trim();
				 var password =$('.psw').val().trim();
				 console.log(username,password)
				 if(username||password){
					 localStorage.setItem('huaweiname',username);
					 localStorage.setItem('huaweipsw',password);
					 $('.for-login').css('display','none');
					 alert('恭喜注册成功');
						 }
			})
		})
		 
		 $('#clo').on('click',function(){
			 $('.for-login').css('display','none');
			 $('.but').off();
		 })
		 $('.login-huawei').on('click',function(){
		 	$('.for-login').css({
		 		left:(window.innerWidth-$('.for-login').width())/2+'px',
		 		display:'block',
		 	})
			$('.but').off();
		 	$('.h4').html('登录账号');
		 	$('.but').val('登录');
			$('.but').on('click',function(){
				 var username =$('.name').val().trim();
				 var password =$('.psw').val().trim();
				 console.log(localStorage.huaweiname)
				 if(localStorage.huaweiname==username&&localStorage.huaweipsw==password){
					 $('.login-huawei').html('欢迎'+username+'回来');
					 $('.for-login').css('display','none');
				 }else{
					 $('.for-login').css('display','none');
					 alert('账号或密码错误');
				 }
			})
		})
		
		$('.search').on('input',function(){
			$('.search-show').children('ul').html('')
			var text =this.value.trim()
			$.get({
				url:'https://suggest.taobao.com/sug?code=utf-8&q='+text+'&_ksTS=1563970517892_385&callback=jsonp386&k=1&area=c2c&bucketid=10',
				dataType:'jsonp',
				jsonCallback:'jsonp386',
				success:function(data){
					var result=data.result;
					for(var i=0;i<result.length;i++){
						var li =document.createElement('li');
						li.innerHTML=result[i][0]
						$('.search-show').children('ul').append(li)
						$('.search-show').css('display','block')
						
					}
				}
			})
		})
		$('.search').on('blur',function(){
			$('.search-show').children('ul').html('')
		})
		
		// 购物车
		var newUl= $('.shoplist ul').clone()
		function shopshow(){
			$.each(localStorage,function(key,value){
				if(key>=0&&key<=4){
					var li =newUl.find('li').eq(key).clone()
					li.find('a').remove()
					var span =$('<span>数量:'+value+'</span>')
					li.append(span)
					$('.shop-show ul').append(li)
				}
			})
		}
		shopshow()
		var $shop =$('.shoplist ul li a');
		$.each($shop,function(index,value){
			$(value).on('click',function(){
				var index =$(this).parent().index()
				if(!localStorage[index]){
					localStorage.setItem(index,1)
					var newLi=$(this).parent().clone()
					newLi.find('a').remove()
					var span =$('<span>数量:'+1+'</span>')
					newLi.append(span)
					$('.shop-show').children('ul').append(newLi)
				}else{
					var num =localStorage[index]
					var bhtml=newUl.find('li').eq(index).find('b').html()
					$.each($('.shop-show ul li b'),function(k,c){
						if($(c).html()==bhtml){
							$(c).parent().remove()
						}
					})
					localStorage.setItem(index,Number(num)+1)
					shopshow()
				}
			})
		})
		
		$('.shop-car').on('mouseenter',function(){
			$('.shop-show').css('display','block');
			$(this).find('a').css('background','#fff');
		})
		$('.shop-car').on('mouseleave',function(){
			$('.shop-show').css('display','none');
			$(this).find('a').css('background','#f2f2f2');
		})
		
  } 

       
