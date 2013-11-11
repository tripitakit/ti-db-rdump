/**
 * db.js
 *
 * install(); install a test db with a people table, on creation insert persons into people.
 * dump(); dump db to json obejct
 * push(); post to remote server
 */

// Install the db and return a Ti.Database.DB in the success callback 
exports.install = function(options){

	try {
		var db = Ti.Database.install('db/dbtest', 'db');
		options.success(db)

	} catch(err) {
		options.error(err)
		Ti.API.debug(err)
	}

};


// Dump the db into a json object
exports.dump = function(db){

	// TODO
	// Dump should iterate over a tables array, 
	// and build the table propertiy dynamically.
	// Here a shortcut is taken, hardcoding the single table people.
	var people = [];
	var rows = db.execute('SELECT * FROM people');

	while (rows.isValidRow()){
		var record = {
			"firstname": rows.fieldByName('firstname'),
			"lastname": rows.fieldByName('lastname')
		 }
	  people.push(record)
	  rows.next();
	}
	rows.close();
	db.close();
	
	var now = new Date();
	
	var dbDump = {}
	dbDump[now] = {
	  db: "dbtest",	
	  tables: {
	    people: people,
	  }
	};
	return dbDump;
};


// Post a dbDump json objetc to remote server
exports.push = function(options){
	var url = "http://pumbaa.iosvappo.it/BrBa"
	var client = Ti.Network.createHTTPClient({
		onload: function() {
			options.success(this.responseText);
		},
		onerror: function(e) {
			options.error(this.responseText, e.error);
		},
		timeout : 10000
	});
	client.setRequestHeader("Content-Type", "application/json"); 
	client.open('POST', url);
	client.send(options.payload);
};

