$(function() {
	$('#prev').live('click', function() {
		return navigate('prev');
	});

	$('#next').live('click', function () {
		return navigate('next');
	});
});

var navigate = function(direction) {
	var url = document.URL,
		chunks = url.split('/'),
		page = chunks[chunks.length - 1],
		currentPage = 0;

	if (direction === 'prev') {
		if (page !== 'index.html') {
			currentPage = parseInt(page.split('.')[0], 10);

			if (currentPage === 1) {
				currentPage = 'index';
			} else {
				currentPage--;
			}
		} else {
			return false;
		}
	}

	if (direction === 'next') {
		if (page !== 'index.html') {
			currentPage = parseInt(page.split('.')[0], 10);
		}
		currentPage++;
	}
	console.log(currentPage);
	window.location.href = currentPage + '.html';
	return false;
}