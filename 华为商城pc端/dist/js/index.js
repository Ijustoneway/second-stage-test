  window.onload=function(){
	 var swiper = new Swiper('.swiper-container', {
	      spaceBetween: 30,
	      centeredSlides: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
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
		// 给轮播图左侧列表添加js
		$.each($('.slide-text>ul li'),function(index,value){
			$(value).on('mouseenter',function(){
				$(this).siblings().css('background','#f6eff1')
				var div=$('<div></div>');
				div.addClass('li-show');
				var index =$(this).index();
				var img=$('<img src="./images/ia_10021.png">');
				var span =$('<span>手环</span>');
				div.append(img).append(span)
				$(this).parent().append(div)
			})
			$(value).on('mouseleave',function(){
				$(this).siblings().css('background','#fff')
				$(this).parent().find('.li-show').remove()
			})
		})
  } 

       
