var fs = require("fs")
	, md = require('markdown').markdown
	, datetools = require('./datetools')
	, exec = require('child_process').exec
    , getSanitizingConverter = require("./pagedown/Markdown.Sanitizer").getSanitizingConverter
    , saneConv = getSanitizingConverter()

exports.getPostFromFile = getPostFromFile

function getPostFromFile(path, callback)
{
	fs.readFile(path, "utf8", function(err, file) {
		console.log("Read " + path + " of length " + file.length)
		if (err) 
			console.log("Error: " + err)
		
		contents = saneConv.makeHtml(file);
		console.log("Parsed md")
		var regexResult = path.match('([0-9\-]+) ([a-zA-Z\ ]+)');
		var date = new Date(regexResult[1]);
		var subject = regexResult[2];
		var link = "/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + escape(subject.replace(/ /g, '-'))
		
		var postDateString = datetools.Days[date.getDay()] + ', ' + datetools.Months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
		
		var post = { Content: contents, Date: postDateString, Title: subject, Link: link }
		callback(post)
	})
}

exports.getPosts = function (wildcardSearch, callback) {
	var posts = []
	console.log("Getting posts")
	exec('ls -t ../posts/' + wildcardSearch, function (error, stdout, stderr) {
		var files = stdout.trim().split('\n')
		console.log("Files: " + files)
		files.forEach(function(file, i) {
			
			var readPosts = function(index) {
				console.log("Index: " + index)
				getPostFromFile(file, function(post) {
					posts[index] = post
					if (index == files.length - 1) {
						callback(posts)
					}
				})
			}
			readPosts(i);
		})		
	})
}