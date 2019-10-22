module.exports = {};

function define( key, value ) {
  module.exports[key] = value;
}

define('user', {
  'getToken'              : '/admin/user/get_token',
  'create'                : '/admin/user/create',

  'addBlock'              : 'admin/user/update_block_status',
  'removeBlock'           : '/admin/user/update_block_status',
  'queryBlocked'          : '/admin/user/get_blocked_list',

  'checkStatus'           : '/admin/user/check_block_status',
  'checkOnline'           : '/admin/user/onlinestatus',

  'addToBlackList'        : '/admin/friend/status',
  'removeFromBlacklist'   : '/admin/friend/status',
  'queryBlacklist'        : '/admin/friend/list',

  'addToFriendList'       : '/admin/friend/status',
  'removeFromFriendlist'  : '/admin/friend/status',
  'queryFriendlist'       : '/admin/friend/list'
});


define('robot',{
  'user_info'       : '/robot/user_info',
  'send'            : '/robot/message/send',
  'create'          : '/admin/robot/create'
});

define('channel',{
  'send'            : '/channel/message/send',
  'create'          : '/admin/channel/create'
});

define('system',{
  'get_setting'          : '/admin/system/get_setting',
  'put_setting'          : '/admin/system/put_setting'
})

define('group',{
  'create'       : '/admin/group/create',
  'del'          : '/admin/group/del',
  'transfer'     : '/admin/group/transfer',
  'get_info'     : '/admin/group/get_info',
  'modify'       : '/admin/group/modify',
  'memberlist'   : '/admin/group/member/list',
  'memberadd'    : '/admin/group/member/add',
  'memberdel'    : '/admin/group/member/del'
});

define('chatroom',{
  'create'   : '/admin/chatroom/create',
  'del'      : '/admin/chatroom/del',
  'info'     : '/admin/chatroom/info',
});
define('message', {
  'send'     : '/admin/message/send',
  'recall'   : '/admin/message/recall',
  'broadcast': '/admin/message/broadcast',
  'multicast': '/admin/message/multicast'
});


define('wordfilter', {
  'add'    : '/admin/sensitive/add',
  'delete' : '/admin/sensitive/del',
  'list'   : '/admin/sensitive/query'
});

