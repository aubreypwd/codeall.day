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
	$( '.tooltip-text' ).on( 'click', function() {
		$( '.modal', this ).toggleClass( 'visible' );
	} );

	// If you're here you're not a bot.
	setTimeout(
		() => {
			$( window ).on( 'scroll', () => {

				if ( window.realContactInfo ?? false ) {
					return;
				}

				if ( true === window.realContactInfoSwitched ?? false ) {
					return;
				}

				const el = document.getElementById( 'contact' );

				if ( ! el ) {
					return;
				}

				const rect = el.getBoundingClientRect();

				if ( rect.top > window.innerHeight + 300 || rect.bottom < -300 ) {
					return;
				}

				window.realContactInfo = true;

				const fuckYouBotsE =
					String.fromCharCode(97)+String.fromCharCode(117)+String.fromCharCode(98)+String.fromCharCode(114)+
					String.fromCharCode(101)+String.fromCharCode(121)+String.fromCharCode(112)+String.fromCharCode(119)+
					String.fromCharCode(100)+String.fromCharCode(64)+String.fromCharCode(105)+String.fromCharCode(99)+
					String.fromCharCode(108)+String.fromCharCode(111)+String.fromCharCode(117)+String.fromCharCode(100)+
					String.fromCharCode(46)+String.fromCharCode(99)+String.fromCharCode(111)+String.fromCharCode(109);

				$( '#contact-email' ).attr( 'href', 'mailto:' + fuckYouBotsE ).text( fuckYouBotsE );

				const fuckYouBotsP =
					String.fromCharCode(56)+String.fromCharCode(48)+String.fromCharCode(56)+String.fromCharCode(50)+
					String.fromCharCode(54)+String.fromCharCode(57)+String.fromCharCode(51)+String.fromCharCode(48)+
					String.fromCharCode(57)+String.fromCharCode(52);

				$( '#contact-phone' )
					.attr( 'href', 'sms:+1' + fuckYouBotsP )
					.text( '+1 (' + fuckYouBotsP.slice(0,3) + ')-' + fuckYouBotsP.slice(3,6) + '-' + fuckYouBotsP.slice(6) );
			} );
		},
		400 + Math.floor( Math.random() * 1000 )
	);

	} )( jQuery );
