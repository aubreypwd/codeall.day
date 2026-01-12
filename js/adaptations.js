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

	// Replace the current information with real information but fuck bots.
	$( document ).ready( () => {

		if ( ! $( '#contact-email' ).length ) {
			return;
		}

		if ( ! $( '#contact-phone' ).length ) {
			return;
		}

		import( 'https://openfpcdn.io/botd/v2' )
			.then( ( Botd ) => Botd.load() )
			.then( ( botd ) => botd.detect() )
			.then( ( result ) => {

				if ( result.bot ) {
					console.log( "Fuck you bot, you ain't getting shit from me!" ); return;
				}

				console.log( "Well Botd at least thinks you're human..." );

				// Futher prove you're a human and I'll actually change it out...
				setTimeout(
					() => {
						$( window ).on( 'touchstart scroll', () => {

							if ( window.realContactInfo ?? false ) {
								return; // Already switched out the info.
							}

							const el = document.getElementById( 'contact' );

							if ( ! el ) {
								return; // Can't switch anything.
							}

							const rect = el.getBoundingClientRect();

							if ( rect.top > window.innerHeight + 300 || rect.bottom < -300 ) {
								return;
							}

							window.realContactInfo = true;

							console.log( "Welcome human, I've added my real email and phone number so you can contact me directly!" );

							const fuckYouBotsEmail =
								String.fromCharCode(97)+String.fromCharCode(117)+String.fromCharCode(98)+String.fromCharCode(114)+
								String.fromCharCode(101)+String.fromCharCode(121)+String.fromCharCode(112)+String.fromCharCode(119)+
								String.fromCharCode(100)+String.fromCharCode(64)+String.fromCharCode(105)+String.fromCharCode(99)+
								String.fromCharCode(108)+String.fromCharCode(111)+String.fromCharCode(117)+String.fromCharCode(100)+
								String.fromCharCode(46)+String.fromCharCode(99)+String.fromCharCode(111)+String.fromCharCode(109);

							$( '#contact-email' )
								.attr( 'href', 'mailto:' + fuckYouBotsEmail )
								.text( fuckYouBotsEmail.replace( '@', '＠' ).replaceAll( '.', String.fromCharCode(8228) ) );

							const fuckYouBotsPhone =
								String.fromCharCode(56)+String.fromCharCode(48)+String.fromCharCode(56)+String.fromCharCode(50)+
								String.fromCharCode(54)+String.fromCharCode(57)+String.fromCharCode(51)+String.fromCharCode(48)+
								String.fromCharCode(57)+String.fromCharCode(52);

							$( '#contact-phone' )
								.attr( 'href', 'sms:+1' + fuckYouBotsPhone )
								.text(
									`+1${String.fromCharCode(8210)}` +
									fuckYouBotsPhone.slice(0,3) +
									String.fromCharCode(8210) +
									fuckYouBotsPhone.slice(3,6) +
									String.fromCharCode(8210) +
									fuckYouBotsPhone.slice(6)
								);

							$( 'p.real-number' ).removeClass( 'hidden' ).find( 'small' ).text( "Yes, this is my actual iPhone cell number." );
						} );
					},
					200 + Math.floor( Math.random() * 800 )
				);

			} )
			.catch( ( e ) => console.log( e ) );
	} );

} )( jQuery );
