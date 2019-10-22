var rongSDK 	= require( '../index' );


let isEmpty = function(obj) {
    return obj === '' || obj === null || obj === void 0 || (Array.isArray(obj) && obj.length === 0);
 };

let isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
 };
var coordinates = [114.429341,30.512296];
// console.log('  isEmpty  '+!isEmpty(coordinates));
// console.log('  isArray  '+isArray(coordinates));
// console.log('  length  '+coordinates.length);
// if(Utility.isEmpty(coordinates) || Utility.isArray(coordinates) || coordinates.length != 2){
 //      return res.send(new APIResult(400,null,'coordinates is empty.'));
  // }


rongSDK.init( '3argexb6rvhse', '123456' );
rongSDK.user.getToken(1 ,"db113a817ea8ea5e1568015544698", function( err, resultText ) {
	    let result = JSON.parse(resultText);
      if (result.code !== 0) {
      		console.log('操作失败！');
       }else{
           console.log('操作成功！'+result.result.token);
       }
	console.log('err.  '+JSON.stringify(err)+'.  result  '+JSON.stringify(result));
	// should.not.exists( err );
	// var result = JSON.parse( resultText );
	// result.code.should.equal( 200 );
	// done();
} );


// describe( 'User Test', function() {
// 	before( function( done ) {
// 		// rongSDK.init( '3argexb6rvhse', '123456' );
// 		rongSDK.init( '3argexb6rvhse', 'rojizixQlP52EH' );
// 		done();
// 	} );

// 	// after( function( done ) {
// 	// 	done();
// 	// } );

// 	describe( 'Get token', function() {
// 		it( 'Should return OK', function( done ) {
			
// 		} );
// 	});



// 	describe( 'Refresh user info', function() {
// 		it( 'Should return OK', function( done ) {
// 			rongSDK.user.refresh( testConfig.token.userId, testConfig.token.name, testConfig.token.portraitUri, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );
// 				done();
// 			} );
// 		} );
// 	} );

// 	describe( 'Check user online status', function() {
// 		it( 'Check a non-existing user, should return OK', function( done ) {
// 			rongSDK.user.checkOnline( 'im not here', function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );
//         result.status.should.equal( '0' );  // Notice: the status is a string, not int.
// 				done();
// 			} );
// 		} );
// 	} );

// 	describe( 'Block user', function() {
// 		it( 'Block a user within 1 minute, should return OK', function( done ) {
// 			rongSDK.user.block( testConfig.token.userId, 1, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );

//         // Check if the user is in the blocked list.
// 			  rongSDK.user.block.query ( function( err, resultText ) {
//           should.not.exists( err );
//           var result = JSON.parse( resultText );
//           result.code.should.equal( 200 );
//           should.exists( result.users );
//           var isUserBlocked = findUser( result.users, testConfig.token.userId );
//           isUserBlocked.should.equal( true );
// 				  done();
//         } );

// 			} );
// 		} );
// 	} );


// 	describe( 'Unblock user', function() {
// 		it( 'Unblock the previously blocked user, should return OK', function( done ) {
// 			rongSDK.user.unblock( testConfig.token.userId, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );

//         // Check if the user is in the blocked list.
// 			  rongSDK.user.block.query( function( err, resultText ) {
//           should.not.exists( err );
//           var result = JSON.parse( resultText );
//           result.code.should.equal( 200 );
//           should.exists( result.users );
//           var isUserBlocked = findUser( result.users, testConfig.token.userId );
//           isUserBlocked.should.equal( false );
// 				  done();
//         } );

// 			} );
// 		} );
// 	} );


// 	describe( 'Query blocked users', function() {
// 		it( 'The test is obtained in the block/unblock user API tests', function( done ) {
//       done();
// 		} );
// 	} );

// 	describe( 'Black list', function() {
// 		it( 'Add a user to the black list, should return OK', function( done ) {
// 			rongSDK.user.blacklist.add( testConfig.message.toUserId, testConfig.message.fromUserId, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );
//         done();
// 			} );
// 		} );


//     // TODO Send a message from fromUserId to toUserId

// 		it( 'Query a user\'s black list, should get the "Black User"', function( done ) {
// 			rongSDK.user.blacklist.query( testConfig.message.toUserId, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
//         var isInBlacklist = findUserId( result.users, testConfig.message.fromUserId );
//         isInBlacklist.should.equal( true );
// 				result.code.should.equal( 200 );
//         done();
// 			} );
// 		} );

// 		it( 'Remove a user from the black list, should return OK', function( done ) {
// 			rongSDK.user.blacklist.remove( testConfig.message.toUserId, testConfig.message.fromUserId, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
// 				result.code.should.equal( 200 );
//         done();
// 			} );
// 		} );

//     // TODO Send a message from fromUserId to toUserId

// 		it( 'Query a user\'s black list, should get not the "Black User"', function( done ) {
// 			rongSDK.user.blacklist.query( testConfig.message.toUserId, function( err, resultText ) {
// 				should.not.exists( err );
// 				var result = JSON.parse( resultText );
//         var isInBlacklist = findUserId( result.users, testConfig.message.fromUserId );
//         isInBlacklist.should.equal( false );
// 				result.code.should.equal( 200 );
//         done();
// 			} );
// 		} );

// 	} );

// } );


// function findUser( users, userId ) {
//   var found = false;
//   for( var i=0; i<users.length; ++i ) {
//     if( users[i].userId === userId ) {
//       found = true;
//       break;
//     }
//   }
//   return found;
// }

// function findUserId( userIDs, userId ) {
//   var found = false;
//   for( var i=0; i<userIDs.length; ++i ) {
//     if( userIDs[i] === userId ) {
//       found = true;
//       break;
//     }
//   }
//   return found;
// }
