( function( $ ) {

	// Set the inital data hash.
	$( 'body' ).attr( 'data-hash', window.location.hash.replace( '#', '' ) );

	$( document ).ready( function() {

		const lenis  = new Lenis( { autoRaf: true } );
		const OFFSET = -100; // Offset from the location it's meant to scroll to.

		// Scroll
		function scroll( hash, push ) {

			const id = ( hash || '' ).replace( /^#/, '' );
			const el = id ? document.getElementById( id ) : null;

			if ( ! el ) {
				return;
			}

			if ( push ) {

				// Keep track of navigation state.
				history.pushState( null, '', '#' + id );
			}

			// Scroll to the section.
			lenis.scrollTo( el, { offset: OFFSET, duration: 1.1 } );

			// Update the data hash (used for styling).
			$( 'body' ).attr( 'data-hash', id );
		}

		// Find links that link to sections.
		$( document ).on( 'click', 'a[href^="#"]', function( e ) {

			const hash = this.getAttribute( 'href' );

			if ( ! hash || '#' === hash ) {
				return; // These should continue to do nohthing.
			}

			if ( ! document.getElementById( hash.slice( 1 ) ) ) {
				return; // Nothing to scroll to.
			}

			e.preventDefault();

			scroll( hash, true );
		} );

		window.addEventListener( 'popstate', () => scroll( window.location.hash, false ) );

		scroll( window.location.hash, false );
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

	// Make sure forms save to storage so they are there when you come back!
	$( document ).ready( () => Savior.init( { selector: 'form', saveDelayMs: 100 } ) );

} )( jQuery );
