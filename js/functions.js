$(document).ready(function() {

	$("#panel1").height($(window).height());

	var containerHeight = $('.container1').outerHeight(true);
	var emptySpace = $(window).height() - containerHeight;
	$('.container1').css({'margin-top' : emptySpace/2 })
	if ($(window).width() <= 400) {

			$('.container1').css({'margin-top' : 20  });
		}



	

});