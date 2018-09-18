//nav icon

$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });
});

//back to top
		$(window).scroll(function() {
			var height = $(window).scrollTop();
			if (height > 100) {
				$('#back2Top').fadeIn();
			} else {
				$('#back2Top').fadeOut();
			}
		});
		$(document).ready(function() {
			$("#back2Top").click(function(event) {
				event.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, "slow");
				return false;
			});

		});

//contact button
function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}