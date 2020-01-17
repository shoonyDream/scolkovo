import velocity from 'velocity-animate/velocity.min.js';
$('.js-footer-header')
	.on('click', function(e) {
		if ($(window).width() <= 1150) {

			let $this = $(this),
				$body = $this.next('.js-footer-body');

			if ($body.length) {
				if ($body.is(':visible')) {
					$body
						// .velocity('stop')
						.velocity("slideUp", {
							duration: 300,
							complete: function() {
								$this.removeClass('footer__title--open');
							}
						})
				} else {
					$body
						// .velocity('stop')
						.velocity("slideDown", {
							duration: 300,
							complete: function() {
								$this.addClass('footer__title--open');
							}
						})
				}
			}
		}
	})
