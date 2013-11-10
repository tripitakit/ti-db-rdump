/***
 * Backup local sqlite on a remote server.
 * Generate a json representation of local db tables content
 * Post to server app to remote storage
 *
 * @Copyleft Patrick De Marta 2013 
 * @License GNU GPL
 */

'use strict'

var DB = require('db');

var win = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

DB.install();



win.open();
