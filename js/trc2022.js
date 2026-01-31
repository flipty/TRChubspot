/* TRC JS FILE */

$(document).ready(function(){
	//search toggle trigger - IN MODULE JS on HubSpot
	var $searchTrigger = $('li.search a');
	var $searchFlyout = $('.searchbar');
	var $searchField = $('.searchbar').find('input[type="search"]');
	var $searchDismiss = $searchFlyout.find('.dismiss-trigger').children('a');

	$searchTrigger.on('click', function(e){
		$searchFlyout.toggleClass('active');
		$searchField.focus();
		e.preventDefault();
	});

	$searchDismiss.on('click', function(e){
		$searchFlyout.removeClass('active');
		e.preventDefault();
	});

	//mobile nav hamburger
	var $hamburger = $('div.hamburger');
	var $mobileNav = $('.navbar-nav');

	$hamburger.on('click', function(){
		$mobileNav.toggleClass('hamburger-active');
	});

});//doc.ready
