var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'hosts'
});

function insertPass(insertDate, callback) {

connection.connect();

	console.log(insertDate);

	connection.query('INSERT INTO host SET ?', insertDate, function (error, res) {
	  	if (error) 
            callback(error,null);
        else
            callback(null,res);
	  
	});

connection.end();

}

function tablePass(callback) {

connection.connect();

	connection.query('SELECT * FROM host', function (error, results, fields) {
	  	if (error) 
            callback(error,null);
        else
            callback(null,results);
	});

connection.end();

}

function hostViewMore(id, callback) {

connection.connect();

	connection.query('SELECT * FROM host WHERE id_host = ?', id, function (error, results, fields) {
	  	if (error) 
            callback(error, null);
        else
            callback(null, results);
	});

}

function domainsView(id, callback) {

	connection.query('SELECT * FROM domains WHERE id_host = ?', id, function (error, res, fields) {
	  	if (error) 
            callback(error, null);
        else
            callback(null, res);
	});

connection.end();

}

function getHostName(callback) {

connection.connect();

	connection.query('SELECT `id_host`,`name` FROM host', function (error, results, fields) {
	  	if (error) 
            callback(error,null);
        else
            callback(null,results);
	});

/*connection.end();*/

}

function insertDomain(domainData, callback) {

/*connection.connect();*/

	connection.query('INSERT INTO domains SET ?', domainData, function (error, res) {
	  if (error) throw error;
	  callback(res);
	  
	});

connection.end();

}

function domainTable(callback) {

connection.connect();

	connection.query('SELECT * FROM domains', function (error, results, fields) {
	  	if (error) 
            callback(error,null);
        else
            callback(null,results);
	});

}

function domainViewMore(id, callback) {

	connection.query('SELECT * FROM domains INNER JOIN host ON domains.id_host = host.id_host WHERE domains.id = ?', id, function (error, results, fields) {
	  	if (error) 
            callback(error,null);
        else
            callback(null,results);
	});

connection.end();

}






