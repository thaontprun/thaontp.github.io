$(document).ready(function() {
	$("button").click(function() {
		$.ajax({
			url: 'https://api.twitter.com/oauth/request_token',
			type: 'POST',
			dataType: 'json',
			data: {
				oauth_token: 'pdYrQ8FixpE4sJ4PJviy8Ff8t',
				oauth_token_secret: 'mMVkPawGgtjghaUnXAKlfruj4blk1KCZOWJRMTZx1zHL49RdWK',
				oauth_callback_confirmed: true
			},
			success: function(data) {
				$(".content").html(data);
			},
			statusCode: {
				400: function() {
					console.log("bad");
				},
				200: function() {
					console.log("good");
				}
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});