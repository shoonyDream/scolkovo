import velocity from 'velocity-animate/velocity.min.js';
$('.js-add-trigger')
	.on('click', function(e) {

		let $this = $(this),
			$body = $this.next('.js-add-content');

		if ($body.length) {
			if ($body.is(':visible')) {
				$body
					// .velocity('stop')
					.velocity("slideUp", {
						duration: 300,
						complete: function() {
							$this.removeClass('js-add-content--open');
						}
					})
			} else {
				$body
					// .velocity('stop')
					.velocity("slideDown", {
						duration: 300,
						complete: function() {
							$this.addClass('js-add-content--open');
						}
					})
			}
		}
	})

$('.additional-info__close')
	.on('click', function(e) {

		let $this = $(this),
			$body = $this.parent('.js-add-content');

		$body
			// .velocity('stop')
			.velocity("slideUp", {
				duration: 300,
				complete: function() {
					$this.removeClass('js-add-content--open');
				}
			})
	})
