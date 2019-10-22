let request = require('superagent');
let sha1 = require('./util').sha1;

let BASEURL	  = 'http://47.100.91.40:18080';
let APPKEY 	  = undefined;
let APPSECRET = undefined;
let TIMESTAMP = undefined;
let SIGNATURE = undefined;
let NONCE 	  = undefined;
let HEADERS	  = {};

exports.init = function( appKey, appSecret) {
    APPKEY 	  = appKey;
	APPSECRET = appSecret;
	NONCE = parseInt(Math.random() * 100000 + 3);
	TIMESTAMP = Date.now();
	SIGNATURE = sha1(NONCE +"|"+APPSECRET+"|"+ TIMESTAMP);
	HEADERS['nonce'] 		= NONCE;
	HEADERS['timestamp']	= TIMESTAMP;
	HEADERS['sign']	= SIGNATURE;
	HEADERS['Connection']	= "Keep-Alive";
	HEADERS['Content-Type']	= "application/json; charset=utf-8";

}

exports.request = function( api, params, callback ) {
	return requestWithDomain( BASEURL, api, params, callback );
}

requestWithDomain = function( base_url, api, params, callback ) {
	request
	.post(base_url + api)
	.set(HEADERS)
	.type('form')
	.send(JSON.stringify(params))
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

