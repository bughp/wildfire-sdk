const apis = require( './apis' );
const rongrequest = require( './rongrequest' );

//获取Token
exports.getToken = function( userId, clientId, callback ) {
	rongrequest.request( apis['user']['getToken'], {
		userId 		: userId,    //用户Id
		clientId   	: clientId   //设备Id
	},function( err, result ) {
		return callback( err, result );
	} );
}

//注册或更新用户
exports.create = function( userId, name, portraitUri, displayName, callback ) {
	var params
	if(userId && name && portraitUri && displayName){
		params = {
			userId: userId,
			name: name,
			portrait: portraitUri,
			displayName:displayName
		}
	}else{
		return callback('缺少必要参数' , "" );
	}
	rongrequest.request( apis['user']['create'], params, function( err, result ) {
		return callback( err, result );
	} );
}

exports.mute = {};

//添加用户禁言
exports.mute.add = function( userId, callback ) {
	rongrequest.request( apis['user']['addBlock'], {
		userId 	: userId,
		status : 1
	}, function( err, result ) {
		return callback( err, result );
	} );
}

//移除用户禁言
exports.mute.remove = function( userId, callback ) {
	rongrequest.request( apis['user']['removeBlock'], {
		userId 		: userId,
		status : 0
	}, function( err, result ) {
		return callback( err, result );
	} );
}

//查询用户的禁言状态
exports.mute.check = function( userId, callback ) {
	rongrequest.request( apis['user']['checkStatus'], {
		userId 		: userId
	}, function( err, result ) {
		return callback( err, result );
	} );
}

//获取禁言的用户列表
exports.mute.query = function( userId, callback ) {
	rongrequest.request( apis['user']['queryBlocked'], {
		userId 		: userId
	}, function( err, result ) {
		return callback( err, result );
	} );
}

exports.block = {};

//添加用户封禁
exports.block.add = function( userId, callback ) {
	rongrequest.request( apis['user']['addBlock'], {
		userId 		: userId,
		status : 2
	}, function( err, result ) {
		return callback( err, result );
	} );
}

//移除用户封禁
exports.block.remove = function( userId, callback ) {
	rongrequest.request( apis['user']['removeBlock'], {
		userId 		: userId,
		status : 0
	}, function( err, result ) {
		return callback( err, result );
	} );
}


//查询用户的封禁状态
exports.block.check = function( userId, callback ) {
	rongrequest.request( apis['user']['checkStatus'], {
		userId 		: userId
	}, function( err, result ) {
		return callback( err, result );
	} );
}

//获取封禁的用户列表
exports.block.query = function( userId, callback ) {
	rongrequest.request( apis['user']['queryBlocked'], {
		userId 		: userId
	}, function( err, result ) {
		return callback( err, result );
	} );
}



//检查用户是否在线
exports.checkOnline = function( userId, callback ) {
	rongrequest.request( apis['user']['checkOnline'], {
		userId 		: userId
	},  function( err, result ) {
		return callback( err, result );
	} );
}


exports.blacklist = {};

//加入黑名单
exports.blacklist.add = function( userId, blackUserId, callback ) {
	rongrequest.request( apis['user']['addToBlackList'], {
		userId 		  : userId,
		friendUid : blackUserId,
		status:2
	},  function( err, result ) {
		return callback( err, result );
	} );
}

//移除黑名单
exports.blacklist.remove = function( userId, blackUserId, callback ) {
	rongrequest.request( apis['user']['removeFromBlacklist'], {
		userId 		  : userId,
		friendUid : blackUserId,
		status: 0
	}, function( err, result ) {
		return callback( err, result );
	} );
}
//获取黑名单
exports.blacklist.query = function( userId, callback ) {
	rongrequest.request( apis['user']['queryBlacklist'], {
		userId : userId,
		status: 2
	}, function( err, result ) {
		return callback( err, result );
	} );
}


exports.friendlist = {};

//添加好友
exports.friendlist.add = function( userId, friendUid, callback ) {
	rongrequest.request( apis['user']['addToFriendList'], {
		userId 		  : userId,
		friendUid : friendUid,
		status:0
	},  function( err, result ) {
		return callback( err, result );
	} );
}
//删除好友
exports.friendlist.remove = function( userId, friendUid, callback ) {
	rongrequest.request( apis['user']['removeFromFriendlist'], {
		userId 		  : userId,
		friendUid : friendUid,
		status: 1
	}, function( err, result ) {
		return callback( err, result );
	} );
}
//查询好友列表
exports.friendlist.query = function( userId, callback ) {
	rongrequest.request( apis['user']['queryFriendlist'], {
		userId : userId,
		status: 0
	}, function( err, result ) {
		return callback( err, result );
	} );
}



