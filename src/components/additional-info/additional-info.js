import velocity from 'velocity-animate/velocity.min.js';
$('.js-add-trigger')
	.on('click', function(e) {

		let $this = $(this),
			$body = $this.next('.js-add-content');

		if ($body.length) {
			if ($body.is(':visible')) {
				closeAdd($body)
			} else {
				openAdd($body)
			}
		}
	})

$('.additional-info__close')
	.on('click', function(e) {

		let $this = $(this),
			$body = $this.parent('.js-add-content');

		closeAdd($body)
	})

function openAdd(item) {
	item
		.velocity("slideDown", {
			duration: 300,
			complete: function() {
				$this.addClass('js-add-content--open');
			}
		})
}

function closeAdd(item) {
	item
		.velocity("slideUp", {
			duration: 300,
			complete: function() {
				$this.removeClass('js-add-content--open');
			}
		})
}