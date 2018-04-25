$(document).ready(function() {
	let clickeddot = ".a1";
	let count=1;
	let homepagecounter=1;
	let lastcurrenthomepage="#about1";
	
	$(".dot").click(function() { // jQuery Function Number #1

		$(clickeddot).removeClass("on"); // jQuery Function Number #2
		$(clickeddot).addClass("off");// jQuery Function Number #3
		
		count=count+1
		clickeddot = ".a"+ count%2;


		$(clickeddot).removeClass("off");
		$(clickeddot).addClass("on");
		
		$(lastcurrenthomepage).css("left","-999em");

		homepagecounter=homepagecounter+1

		lastcurrenthomepage="#about"+homepagecounter%2;

		$(lastcurrenthomepage).css("left","0");// jQuery Function Number #4

		
	 })

})
// for searchview 

	$("#banner").hover(function() {     // jQuery Function Number #5
		$(".bannerquote").show(500);    // jQuery Function Number #6
		
	})
	



