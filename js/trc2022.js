/* TRC JS FILE */

$(document).ready(function(){
	//search toggle trigger
	var $searchTrigger = $('li.search-trigger a');
	var $searchFlyout = $('.search-flyout');
	var $searchField = $('.search-flyout').find('input[type="search"]');
	var $searchDismiss = $searchFlyout.find('.dismiss-trigger').children('a');

	$searchTrigger.on('click', function(e){
		$searchFlyout.removeClass('inactive');
		$searchField.focus();
		e.preventDefault();
	});

	$searchDismiss.on('click', function(e){
		$searchFlyout.addClass('inactive');
		e.preventDefault();
	});

	//mobile nav hamburger
	var $hamburger = $('button.navbar-toggle');
	var $mobileNav = $('ul.navbar-nav');

	$hamburger.on('click', function(){
		$mobileNav.toggleClass('inactive');
	});

});//doc.ready
