$(window).scroll(function(){
	var scroll=$(window).scrollTop();
	if(scroll >= 10){
		$(".navbar").addClass("nav-scroll");
	}else{
		$(".navbar").removeClass("nav-scroll");
	}
	
});
