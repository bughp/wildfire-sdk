const superagent = require( 'superagent' );
const sha1 = require('./util').sha1;

const BASEURL	  = 'http://http://47.100.91.40:18080';
const APPKEY 	  = undefined;
const APPSECRET = undefined;
const TIMESTAMP = undefined;
const SIGNATURE = undefined;
const NONCE 	  = undefined;
const HEADERS	  = {};

exports.init = function( appKey, appSecret) {
	options = options || {};
	APPKEY 	  = appKey;
	APPSECRET = appSecret;
	NONCE	    = parseInt( Math.random() * 0xffffff );
	TIMESTAMP = Date.parse( new Date() )/1000;
		SIGNATURE = sha1( NONCE +"|"+ APPSECRET +"|"+ TIMESTAMP  );
	HEADERS['nonce'] 		= NONCE;
	HEADERS['timestamp']	= TIMESTAMP;
	HEADERS['sign']	= SIGNATURE;
	HEADERS['Content-Type']	= "application/json; charset=utf-8";
}

exports.request = function( api, params, callback ) {
	return requestWithDomain( BASEURL, api, params, callback );
}

requestWithDomain = function( base_url, api, params, callback ) {
	superagent.agent()
	.post( base_url + api)
	.set( HEADERS )
	.type( 'form' )
	.send( params )
	.end( function( err, result ) {
		if( err ) {
			return callback( err, result ? result.text : null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}

exports.validateSignature = function( nonce, timestamp, signature ) {
	return sha1( nonce +"|"+ APPSECRET +"|"+ timestamp ) == signature;
}

