var fs = require("fs")
var Post = require("../post")
var datetools = require('../datetools')

var PostDir = "../posts/"
/*
 * GET home page.
 */

exports.index = function(req, res) {
	Post.getPosts('*.md', function(posts) {
		res.render('index', { posts: posts })	
	})	
};

exports.post = function(req, res) 
{
	console.log("Getting single post")
	var path = getPostPath(req)
	Post.getPostFromFile(path, function (post) {
		console.log(post)
		res.render('post', { Post: post })	
	})
}

function getPostPath(req)
{
	return PostDir + req.params.year + '-' + req.params.month + '-' + req.params.day + ' ' + req.params.title.replace(/-/g, ' ') + '.md'
}

exports.postsByDay = function (req,res)
{
	console.log("Posts by day")
	var date = new Date(req.params.year + '-' + req.params.month + '-' + req.params.day)
	var search = req.params.year + '-' + req.params.month + '-' + req.params.day + '*.md'
	Post.getPosts(search, function (posts) {
		res.render('search', { posts: posts, Search: datetools.Days[date.getDay()] + ', ' + datetools.Months[parseInt(req.params.month) - 1] + ' ' + req.params.day + ' ' + req.params.year })
	})
}

exports.postsByMonth = function (req,res)
{
	console.log("Posts by month")
	var search = req.params.year + '-' + req.params.month + '*.md'
	Post.getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: datetools.Months[parseInt(req.params.month) - 1] + ', ' + req.params.year })
	})
}

exports.postsByYear = function (req,res)
{
	console.log("Posts by month")	
	var search = req.params.year + '*.md'
	Post.getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: req.params.year })
	})
}


