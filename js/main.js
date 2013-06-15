$(document).ready(function() {

	// ==========================================================================
	// Table Of Contents

	var toc = $('#table-of-contents h1'),
	drawer  = $('#drawer');

	// Toggle The TOC Open
	toc.on('click', function() {
		drawer.toggleClass('visuallyhidden');
	});

	$('.dl-item').on('click', function() {
		$(this).each(function() {
			var projectUrl = $(this).attr('href'),
					category = 'Download',
					packageName = $(this).attr('data-name'),
					pushTrackEvent = function() {
						debugger;
				_gaq.push(['_trackEvent', category, projectUrl, packageName]);
			};

			pushTrackEvent();
		});
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
