// Table Of Contents
	var toc = $('#table-of-contents h1'),
	drawer  = $('#drawer');

toc.on('click', function() {
	drawer.toggleClass('visuallyhidden');
});
