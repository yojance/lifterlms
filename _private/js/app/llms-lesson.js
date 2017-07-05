/* global LLMS, $ */
/* jshint strict: false */

LLMS.Lesson = {

	init: function() {

		if ( $( 'body' ).hasClass( 'single-lesson' ) ) {
			this.bind();
		}

	},

	bind: function() {

		var self = this;

		LLMS.wait_for_player( function() {

			self.load_players();

		} );

	},

	load_players: function() {

		$( '.llms-video-wrapper' ).each( function() {

			new window.llms.Player( $( this ).find( 'iframe' ) );
			// var player = new window.llms.Player( $iframe );
			// player.on( 'play', function( data ) {
			// 	console.log( 'started', data );
			// } );
			// player.on( 'pause', function( data ) {
			// 	console.log( 'paused', data );
			// } );
			// player.on( 'complete', function( data ) {
			// 	console.log( 'completed', data );
			// } );

		} );

	}

};
