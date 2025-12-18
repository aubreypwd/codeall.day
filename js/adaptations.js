( function( $ ) {

	// Scrolly.
	$( 'a[href*="#"]' ).scrolly( { offset: 100 } );

	// Push scroll position into history state on scrolly link click.
	$( document ).on( 'click', 'a[href^="#"]', function() {

		const href = $( this ).attr( 'href' );

		// Bail if no valid target.
		if ( href.length > 1 && $( href ).length ) {

			history.pushState(
				{ scrollY: $( href ).offset().top - 100 },
				'',
				href
			);

			$( 'body' ).attr( 'data-hash', window.location.hash.replace( '#', '' ) );
		}
	} );

	// Disable native scroll restoration so we can handle it manually.
	if ( 'scrollRestoration' in history ) {
		history.scrollRestoration = 'manual';
	}

	// Restore scroll position on Back/Forward navigation.
	window.addEventListener( 'popstate', function( event ) {

		if ( event.state && typeof event.state.scrollY === 'number' ) {

			$( 'html' ).animate(
				{ scrollTop: event.state.scrollY - 100 },
				600,
				'swing'
			);

			$( 'body' ).attr( 'data-hash', window.location.hash.replace( '#', '' ) );
		}
	} );

	// Scroll to the element if there is a hash.
	$( document ).ready( function() {

		$body = $( 'body' );

		$body.addClass( 'js-loaded' );

		if ( '' === window.location.hash ) {
			return; // No hash.
		}

		// Animate towards the hash.
		$( 'html' ).animate(
			{
				scrollTop: $( window.location.hash ).offset().top - 100
			},
			600,
			'swing'
		);

		// Set the active navigation element.
		$body.attr( 'data-hash', window.location.hash.replace( '#', '' ) );

		if ( new URLSearchParams( window.location.search ).has( 'sent' ) ) {
			$( '#contact .sent-message' ).addClass( 'sent' );
		}
	} );

	// Tooltips.
	$( '.tooltip-icon' ).on( 'click', function() {
		$( '.modal', this ).toggleClass( 'visible' );
	} );

} )( jQuery );
