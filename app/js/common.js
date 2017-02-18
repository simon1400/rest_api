$(function() {

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

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
