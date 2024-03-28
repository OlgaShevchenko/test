$(document).ready(function() { 
   $('.footer__mob-submenu .footer__link-header').click(function() { 
      if ($(window).width() < 992) 			
			$(this).next('ul').slideToggle();
			$(this).parent().toggleClass('active');		
	});  
	
	$('.contacts__form-item').on('input', function() {
		$(this).next('.error').remove(); 
	});
	
	 $('.contacts__form-submit').click(function(e) {		 
		e.preventDefault();
		if ( validateForm() ) { 		
			$('.contacts__form form').hide();
			$('.contacts__form-header').text('Заявка отправлена');
			
		}
	   
	});
});


  function validateForm() {
		var result = true;
	  	var first_name = $('.name').val();
		var tel = $('.phone').val();
		var email = $('.email').val(); 
		$(".error").remove(); 
		if (first_name.length< 3) {
		  $('.name').parent().after('<span class="error">Введите имя</span>');
		  result = false;
		}
		if (tel.length< 1) {
		  $('.phone').parent().after('<span class="error">Введите номер телефона</span>');
		  result = false;
		} else {
		  var regEx = /^((\+7|7|8)+([0-9]){10})$/;
		  var validTel = regEx.test(tel);
		  if (!validTel) {
			$('.phone').parent().after('<span class="error">Введите правильный номер телефона</span>');
			result = false;
		  }
		}    
		if (email.length< 1) {
		  $('.email').parent().after('<span class="error">Введите email</span>');
		  result = false;
		} else {
		  var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		  var validEmail = regEx.test(email);
		  if (!validEmail) {
			$('.email').parent().after('<span class="error">Введите правильный email</span>');
			result = false;
		  }
		}	
		return result;
  }

$(window).on('resize', function(){
	 $('.footer__mob-submenu').removeClass('active');	
	 $('.footer__links-list').removeAttr('style');
});



 var swiper = new Swiper(".swiper1", {
      slidesPerView: 1,      
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
	  breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 8,
        },       
      },
    });
	
	 var swiper = new Swiper(".swiper2", {
      slidesPerView: 1,     
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
	  breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 8,
        },       
      },
    });



