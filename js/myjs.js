$(document).ready(function(){
	$(".list-group").hide();

	$(".btn-xs,.list-group-item").click(function(){
		$(".list-group").animate({
		width:"toggle"
		});
	});

	$(".btn-xs,.list-group-item").touchstart(function(){
		$(".list-group").animate({
		width:"toggle"
		});
	});
});
