$(function() {

	$('.small_mnu_wrap button').click(function() {
		$('.small_mnu_hover').toggleClass('hover_mnu');
	})

	$('.button_right_wrap button').click(function() {
		$(this).siblings().removeClass('active_right_button');
		$(this).addClass('active_right_button');
	})

	selects('.standart_select', '.content_standart_select span', 'active_select_standart');
	selects('.select_month', '.content_select_date span', 'active_select_month');

	function selects(param1, param2, param3){
		$(param1).click(function() {
			$(this).children().eq(2).slideToggle();
			$(this).children().css('z-index', '1000');
		})

		$(param2).click(function() {
			$(this).siblings().removeClass(param3);
			$(this).addClass(param3);
			$(this).parent().parent().children().eq(0).html($(this).html());
		})
	}

	$('.chose_program h3 img').click(function() {
		$(this).parent().parent().parent().hide();
	})

	$('.name_wrap p').click(function() {
		$('.name_mnu').toggleClass('name_mnu_hover');
	})

	$('.login').click(function() {
		$(this).toggleClass('login_hover');
	})

	$('.popup > img').click(function() {
		$(this).parent().hide();
	})

	$('.cancel').hide();

	$('.button_control_famyli .add').click(function(){
		$(this).parent().parent().parent().before($('.content_add_form').clone());
		$(this).parent().parent().parent().prev().slideToggle();
		$(this).parent().parent().parent().prev().attr('class', '');
		if(!$(this).parent().parent().parent().prev().hasClass('form_item')){
			$(this).prev().css('display', 'inline-block');
			$(this).css('float', 'right');
		}
	})


	$('.button_control_famyli .cancel').click(function(){
		$(this).parent().parent().parent().prev().remove();
		if($(this).parent().parent().parent().prev().hasClass('form_item')){
			$(this).css('display', 'none');
			$(this).next().css('float', 'left');
		}
	})


	$('label[for="otkaz_viza"]').click(function() {
		$(this).parent().parent().next().slideToggle();
	})

 	var len_kolej;

 	len_kolej = $('.content_kolej_catalog .kolej_item').length;
 	var len_img_kolej;
 	for(var a = 0; a < len_kolej; a++){
 		$('.content_kolej_catalog .kolej_item').eq(a).attr("id", 'kolej_item_' + a);
 		len_img_kolej = $('.content_kolej_catalog #kolej_item_' + a + ' img').length;
 		for(var b = 0; b < len_img_kolej; b++){
 			$('#kolej_item_' + a + ' .kolej_shadow_tabs .tabs').append('<div class="tabs_item"><span></span></div>');
 		}
 		$('#kolej_item_' + a + ' .kolej_shadow_tabs .tabs .tabs_item').eq(0).addClass('active_kolej_tabs');
 	}

 	$('.tabs_item').hover(function() {
 		$(this).addClass('active_kolej_tabs');
 		$(this).siblings().removeClass('active_kolej_tabs');
 		$(this).parent().parent().parent().children().eq($(this).index()).css('z-index', '100');
 	}, function(){
 		$(this).parent().parent().parent().children().eq($(this).index()).css('z-index', '0');
 	});


	$('.dop_usluh_item > h3').click(function(){
		$(this).next().slideToggle();
		if($(this).children().hasClass('transforms_up')) $(this).children().removeClass('transforms_up');
		else $(this).children().addClass('transforms_up');
	})

	$('.active_all_info_student_in_admin').parent().parent().hide();
	$('.norm_strok').click(function() {
		$(this).parent().parent().next().slideToggle();
	})

	$('.last_tab').click(function(){
		if($(this).attr('id') == 'active_last_tab') $(this).attr('id', '');
		else $(this).attr('id', 'active_last_tab');
	})

	$('.mnu_list').hover(function() {
		if($(this).attr('id') == 'mnu_0') hover_mnu('#hover_mnu_0', '#mnu_0');
		else if($(this).attr('id') == 'mnu_1') hover_mnu('#hover_mnu_1', '#mnu_1');
		else if($(this).attr('id') == 'mnu_2') hover_mnu('#hover_mnu_2', '#mnu_2');
	},function() {
		$('.hover_mnu').hover(function() {
			$(this).css('display', 'block');},
			function(){
				$(this).css('display', 'none');
			})
		if($(this).attr('id') == 'mnu_0') $('#hover_mnu_0').css('display', 'none');
		else if($(this).attr('id') == 'mnu_1') $('#hover_mnu_1').css('display', 'none');
		else if($(this).attr('id') == 'mnu_2') $('#hover_mnu_2').css('display', 'none');
	})

	var ml;
	function hover_mnu(param1, param2){
		$(param1).css('display', 'block');
		var param3 = param1 + " ul";
		ml = $(param2).offset().left - 
		($(param3).width() / 2) + 
		($(param2).width() / 2) + 20;
		$(param1).css('margin-left', ml + 'px');
	}
	


	$('.wrap_hover_mnu').css('width', document.documentElement.clientWidth);

	$('.nav_ask a span').hover(function() {
		$('.targ_1').css('display', 'block');}, function(){
			$('.targ_1').css('display', 'none');
		})

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

});
