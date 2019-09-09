var apis 		= require( './apis' );
var rongrequest = require( './rongrequest' );
//添加敏感词
exports.add = function( word, callback ) {
    if( word === '' || word === null || word === undefined ) {
        return callback( 'Empty word' );
    }

    var params = { words : word };
    rongrequest.request( apis['wordfilter']['add'], params, function( err, result ) {
        return callback( err, result );
    } );
}
//删除敏感词
exports.delete = function( word, callback ) {
    if( word === '' || word === null || word === undefined ) {
        return callback( 'Empty word' );
    }
    var params = { words : word };
    rongrequest.request( apis['wordfilter']['delete'], params, function( err, result ) {
        return callback( err, result );
    } );
}
//获取敏感词
exports.list = function(callback ) {
    rongrequest.request( apis['wordfilter']['list'], {}, function( err, result ) {
        return callback( err, result );
    } );
}
