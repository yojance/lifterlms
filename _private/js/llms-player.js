/**
 * load all app modules
 */
//= include /vendor/embedplayer.js
//= include /vendor/vimeo.js
//= include /vendor/youtube.js
( function( $ ) {

	window.llms = window.llms || {};
	window.llms.Player = function( $el, options ) {

		$el.embedplayer( 'listen' );

		var self = this,
			defaults = {
				store: true,
			},
			data = {},
			local_data;

		options = options || {};
		options = $.extend( defaults, options );

		function load_data() {

			local_data = JSON.parse( window.localStorage.getItem( 'llms' ) );

			if ( ! local_data ) {
				local_data = { videos: {} };
			}

			var id = $el.embedplayer( 'link' );

			if ( ! local_data.videos[ id ] ) {
				local_data.videos[ id ] = {
					current_time: 0,
					start_time: null,
				};
			}

			return local_data.videos[ id ];
		}

		data = load_data();

		this.get = function( key ) {
			return data[ key ];
		}
		this.set = function( key, val ) {
			data[ key ] = val;
			return this;
		}
		this.save = function() {
			// console.log( local_data );
			window.localStorage.setItem( 'llms', JSON.stringify( local_data ) );
		}


		if ( options.store ) {

			var start = self.get( 'current_time' ) - 5;
			if ( start >= 5 ) {
				$el.embedplayer( 'seek', start ).embedplayer( 'pause' );
			}


			$el.on( 'embedplayer:play', function( e ) {
				if ( ! self.get( 'start_time' ) ) {
					self.set( 'start_time', new Date() ).save();
				}
			} );

			$el.on( 'embedplayer:timeupdate', function( e ) {
				console.log( e );
				self.set( 'current_time', e.currentTime ).save();
			} );

		}

		console.log( options );


		// $el.on('embedplayer:statechange', function (event) {
		// 	console.log('state:', event.state);
		// }).on('embedplayer:error', function (event) {
		// 	console.error('error:', event.error);
		// }).on('embedplayer:durationchange', function (event) {
		// 	console.log('duration:', event.duration);
		// }).on('embedplayer:volumechange', function (event) {
		// 	console.log('volume:', event.volume);
		// }).on('embedplayer:timeupdate', function (event) {
		// 	console.log('currentTime:', event.currentTime);
		// }).on('embedplayer:ready', function (event) {
		// 	console.log('link:', $(this).embedplayer('link'));
		// }).embedplayer('listen'); // enable all events

		// $el.embedplayer('play');
		// $el.embedplayer('seek',30);
		// $el.embedplayer('volume',0.5);
		// $el.embedplayer('pause');
		// $el.embedplayer('stop');

		return this;

	};

} )( jQuery );
