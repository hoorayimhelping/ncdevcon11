$(function() {
    $('#prev').live('click', function() {
        return navigate('prev');
    });

    $('#next').live('click', function () {
        return navigate('next');
    });

	$('pre').each(function() {
		if (!$(this).hasClass('prettyprint')) {
			$(this).addClass('prettyprint');
		}
	});

	prettyPrint();
});

var navigate = function(direction) {
    var url = document.URL,
        chunks = url.split('/'),
        page = chunks[chunks.length - 1],
        currentPage = 0,
		lastPage = 21;

    if (direction === 'prev') {
        if (page !== 'index.html') {
            currentPage = parseInt(page.split('.')[0], 10);

            if (currentPage === 1) {
                currentPage = 'index';
            } else {
                currentPage--;
            }
        } else {
            currentPage = lastPage;
        }
    }

    if (direction === 'next') {
        if (page !== 'index.html') {
            currentPage = parseInt(page.split('.')[0], 10);
        }

		if (currentPage === lastPage) {
			window.location.href = 'index.html';
			return false;
		}
        currentPage++;
    }

    window.location.href = currentPage + '.html';
    return false;
}