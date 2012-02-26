var fs = require("fs")
	, datetools = require('./datetools')
	, exec = require('child_process').exec
    , getSanitizingConverter = require("./pagedown/Markdown.Sanitizer").getSanitizingConverter
    , saneConv = getSanitizingConverter()
    , Lazy = require("lazy")
    , Wrap = require("./wrap")
    , async = require("async")
    , pagan = require('pagan');
    
var readFile = Wrap(fs.readFile)
var readDir = Wrap(fs.readdir)
var postDir = __dirname + "/../posts/"

var makeHtml = Wrap(function (text, onDone) {
	onDone(null, saneConv.makeHtml(text))
})

exports.getPostFromFile = getPostFromFile

function getPostFromFile(path, callback)
{
	var returnPost = function(fileContents, post) {
		var regexResult = path.match(/([0-9]{4}-[0-9]{2}-[0-9]{2})(?:[\ -])(.[^\.]+)/);
		var date = new Date(regexResult[1]);
		var subject = regexResult[2];
		
		post["title"] = !post["title"] ? subject : post["title"]
		post["link"] = "/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + escape(subject.replace(/ /g, '-').toLowerCase())
		post["datetext"] = datetools.Days[date.getDay()] + ', ' + datetools.Months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
		post["date"] = date;
		makeHtml(fileContents, function(err, result) {
			post["content"] = result;
			
			callback(null, post)
		});
	}
	
	readFile(path, function(err, file) {
		if (err) {
			console.log("Error: " + err)
		}		

		var post = {}		
		var fileContents = file.toString()
		var lines = fileContents.trim().split('\n')
		var inHeader = false
		var indexOfHeader = -1;
		var index = 0;
		async.whilst(
			function () {
				return index < lines.length;
			},
			function(callback) {
				if (lines[index].trim() == '---') {
					inHeader = !inHeader
					indexOfHeader = index;
				}
				if (inHeader) {
					var namepairs = lines[index].match(/([a-zA-Z]+)(?:\:\ )(.+)/)
					if (namepairs) {
						var varname = namepairs[1] ? namepairs[1] : null
						var value = namepairs[2] ? namepairs[2] : null
					}
					
					if (varname && value) {
						post[varname] = value
					}
				}
				else {
					index = lines.length
				}
				index++;
				callback(null)
			},
			function(err) {
				
			})
			
		returnPost(lines.splice(indexOfHeader + 1).join(''), post)
	})
}

exports.getPosts = function (dateSearch, increment, page, callback) {
	readDir(postDir, function(err, files) {
		if (err) {
			console.log("Error reading dir: " + err)
		} else {
			var arr = new pagan()
			files.map(function (file) {
				arr.push(file)
				return file
			})
			
			arr.setIncrement(increment);
			arr.setPage(page)
			
			async.map(arr.values().reverse(), 
				function(path, onDone) {
					getPostFromFile(postDir + path, onDone)
				},
				function(err, results) {
					callback(results.reverse())
				})
		}
	})
}

exports.getPostPath = function (req, cb)
{
	readDir(postDir, function (err, files) {
		if (err) {
			console.log("Error:" + err)
		}
		
		files.filter(function (file) {
			return file.search('(' + req.params.year + '-' + req.params.month + '-' + req.params.day + '[\ -]' + req.params.title + ')') > -1
		})
		
		if (files.length > 0)
			cb(postDir + files[0]);
	})
}

