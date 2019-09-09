module.exports = {};

function define( key, value ) {
  module.exports[key] = value;
}

define( 'user', {
  'getToken'              : '/admin/user/get_token',
  'create'                : '/admin/user/create',

  'addBlock'              : '/user/update_block_status',
  'removeBlock'           : '/admin/user/get_blocked_list',
  'queryBlocked'          : '/admin/user/get_blocked_list',

  'checkStatus'           : '/admin/user/check_block_status',
  'checkOnline'           : '/admin/user/onlinestatus',

  'addToBlackList'        : '/admin/friend/status',
  'removeFromBlacklist'   : '/admin/friend/status',
  'queryBlacklist'        : '/admin/friend/list',

  'addToFriendList'       : '/admin/friend/status',
  'removeFromFriendlist'  : '/admin/friend/status',
  'queryFriendlist'       : '/admin/friend/list'
} );

define( 'message', {
  'send'   : '/admin/message/send',
  'recall' : '/admin/message/recall',
} );

define( 'wordfilter', {
  'add'    : '/admin/sensitive/add',
  'delete' : '/admin/sensitive/del',
  'list'   : '/admin/sensitive/query'
} );

