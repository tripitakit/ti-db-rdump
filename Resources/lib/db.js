/**
 * db.js
 *
 * install(); install a test db with a people table, on creation insert persons into people.
 * dump(); dump db to json obejct
 * push(); post to remote server
 */

// Install the db and return a Ti.Database.DB in the success callback 
exports.install = function(options){
	var success, error;
	
	try {
		var db = Ti.Database.install('db/dbtest', 'db');
		options.success(db)

	} catch(err) {
		options.error(err)
		Ti.API.debug(err)
	}

};


// Dump the db into a json object
exports.dump = function(){};


// Post a dbDump json objetc to remote server
exports.push = function(){};




