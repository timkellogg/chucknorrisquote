$(document).ready(function() {
	$('#get-quote').click(function(event) {
		$('#quote-box').text('');
		$.ajax({
			url: 'http://api.icndb.com/jokes/random',
			data: {
				format: 'json'
			},
			error: function() {
				$('#quote-box').text('An Error Has Occured!');
			},
			dataType: 'jsonp',
			success: function(data) {
				$('#quote-box').append(data.value.joke);
			},
			type: 'GET'
		});
	});
});
