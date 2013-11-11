/***
 * Backup local sqlite on a remote server.
 * Generate a json representation of local db tables content
 * Post to server app to remote storage
 *
 * @Copyleft Patrick De Marta 2013 
 * @License GNU GPL
 */

'use strict'

// Dependencies
var DB = require('lib/db');

DB.install({
	success: function(db){
		Ti.API.info("Db successfully installed with name: " + db.name);
		
		// Db's JSON dump
		var dbDump = DB.dump(db)
		
		// Push dump to server
		DB.push({
			payload: dbDump,
			success: function(response){
				Ti.API.info("Db successfully pushed to server: " + response)
			},
			errror: function(response, err){
				Ti.API.info("An error occurred: " + err);
				Ti.API.info("Server reponded: " + response)
			}
		});
	},

	error: function(err){
		Ti.API.info(err +  ". Db not installed")
	},
});


