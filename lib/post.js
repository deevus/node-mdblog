var fs = require("fs")
var md = require('markdown').markdown
var datetools = require('./datetools')

exports.getPostFromFile = function(path, callback)
{
	fs.readFile(path, "utf8", function(err, file) {
		console.log("Read " + path + " of length " + file.length)
		if (err) 
			console.log("Error: " + err)
		
		contents = md.toHTML(file);
		console.log("Parsed md")
		var regexResult = path.match('([0-9\-]+) ([a-zA-Z\ ]+)');
		var date = new Date(regexResult[1]);
		var subject = regexResult[2];
		var link = "/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + escape(subject)
		
		var postDateString = datetools.Days[date.getDay()] + ', ' + datetools.Months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
		
		var post = { Content: contents, Date: postDateString, Title: subject, Link: link }
		callback(post)
	})
}

