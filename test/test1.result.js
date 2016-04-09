$('#main').each(function () {
	$('.menu', this).each(function () {
		var menu_object = this;
		var onload = function () {
			this.action_count = 1;
		};
		$(this).on('jss:increment_action_count', function () {
			this.action_count += 1;
			$('div.action_count', this).text(menu_object.action_count);
		});
		$(this).on('click', 'button.add_user', function () {
			var user = $('div.user_template').clone();
			user.removeClass('user_template');
			$('div.user_list').append(user);

			$(menu_object).trigger('jss:increment_action_count');
		});
		$.proxy(onload, this)();
	});
	$('.user_list', this).each(function () {
		$('.user', this).each(function () {
			var user_object = this;
			$(this).on('click', 'button.del_user', function () {
				$(user_object).detach();
			});
		});
	});
});