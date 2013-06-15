$(document).ready(function() {

	// ==========================================================================
	// Table Of Contents

	var toc = $('.toc h1'),
			drawer  = $('#drawer');

	// Toggle The TOC Open
	toc.on('click', function() {
		if(drawer.hasClass('visuallyhidden')) {
			drawer.removeClass('visuallyhidden');
			drawer.addClass('slide-down');
			drawer.removeClass('slide-up');
		}else {
			drawer.addClass('visuallyhidden');
			drawer.removeClass('slide-down');
			drawer.addClass('slide-up');
		}
	});


	// ==========================================================================
	// Google Analytics Event Tracking
	// Tracks when a user clicks any of our port download buttons
	// for the Typeplate project.

	$('.dl-item').on('click', function() {
		var projectUrl = $(this).attr('href'),
				category = 'Download',
				action = 'Typeplate Port Download',
				packageName = $(this).data('name'),
				pushTrackEvent = function() {
					_gaq.push(['_trackEvent', category, action, projectUrl, packageName]);
				};

		// Push Track Event Data Function
		// https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
		pushTrackEvent();
	});


	// ==========================================================================
	// Magical Page Scroll
	//http://jqueryboilerplate.com
	//http://position-relative.net/creation/anchor
	//http://position-relative.net/creation/anchor/js/jquery.anchor.js

	jQuery.fn.anchorAnimate = function(settings) {
		// Setting for Event
		settings = jQuery.extend({
			speed : 800
		}, settings);

		return this.each(function(){
			var caller = this;
			$(caller).click(function (event) {
				event.preventDefault();
				// local vars
				var locationHref = window.location.href,
				elementClick = $(caller).attr("href"),
				destination = $(elementClick).offset().top;
				//
				$("html:not(:animated),body:not(:animated)").animate({
					scrollTop: destination
				}, settings.speed, function() {
					window.location.hash = elementClick;
				});
				return false;
			});
		});
	};

	// Event Trigger for Page Scroll
	// Calls the anchorAnimate function below
	$("a.anchorLink").anchorAnimate();
});
