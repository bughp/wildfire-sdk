var apis    = require( './apis' );
var rongrequest = require( './rongrequest' );
var util = require( './util' );
/**
  发送消息
 更多参数详情：http://docs.wildfirechat.cn/server/admin_api/message_api.html

  const msg =  {
    sender : 1 ,  发送者Id
    conv:{
      type: 0  //会话类型： 0：私聊 1: 群组 2:聊天室 3: Channel
      target:2, //会话目标Id
      line:0,
    },
    payload:{
      type: 1,  //消息类型： 0:未知消息 1：文本消息 2 ：语音消息 详情参考：http://docs.wildfirechat.cn/base_knowledge/message_payload.html#####contentType
      searchableContent：hello,   //消息可搜索内容
      pushContent:hello,          //消息推送内容
      content:hello,              //消息内容
    }
  }

*/
exports.send = function( sender,conv,payload, callback ) {
    if(sender && conv && payload ){
      var params = { 
            sender : sender,
            conv : conv,
            payload:payload
        };
      rongrequest.request( apis['message']['send'], params, function( err, result ) {
          return callback( err, result );
      } );
    }else{
      return callback( 'Empty word' );
    }
}

//消息撤回
exports.recall = function( operator,messageUid, callback ) {
    if(operator && messageUid ){
      var params = { 
            operator : operator,         //消息撤回者Id
            messageUid : messageUid      //消息唯一Id
        };
      rongrequest.request( apis['message']['recall'], params, function( err, result ) {
          return callback( err, result );
      } );
    }else{
      return callback( 'Empty word' );
    }
}












