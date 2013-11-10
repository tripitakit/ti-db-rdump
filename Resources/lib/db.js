/**
 * db.js
 *
 * install(); install a test db with a people table, on creation insert persons into people.
 * dump(); dump db to json obejct
 * push(); post to remote server
 */

// Install the db
exports.install = function(){
	var db = Ti.Database.install('dbtest', 'db');
	db.close();
};


// Dump the db into a json object
exports.dump = function(){};


// Post a dbDump json objetc to remote server
exports.push = function(){};




