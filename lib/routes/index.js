var fs = require("fs")
var Post = require("../post")
var datetools = require('../datetools')
var Wrap = require("../wrap")

/*
 * GET home page.
 */

exports.index = function(req, res) {
	Post.getPosts('', function(posts) {
		res.render('index', { posts: posts })	
	})	
};

exports.post = function(req, res) 
{
	console.log("Getting single post")
	Post.getPostPath(req, function(path) {
		Post.getPostFromFile(path, function (err, post) {
			console.log(path)
			console.log(post)
			res.render('post', { Post: post })	
		})
	})
}

exports.postsByDay = function (req,res)
{
	console.log("Posts by day")
	var date = new Date(req.params.year + '-' + req.params.month + '-' + req.params.day)
	var search = req.params.year + '-' + req.params.month + '-' + req.params.day
	Post.getPosts(search, function (posts) {
		res.render('search', { posts: posts, Search: datetools.Days[date.getDay()] + ', ' + datetools.Months[parseInt(req.params.month) - 1] + ' ' + req.params.day + ' ' + req.params.year })
	})
}

exports.postsByMonth = function (req,res)
{
	console.log("Posts by month")
	var search = req.params.year + '-' + req.params.month
	Post.getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: datetools.Months[parseInt(req.params.month) - 1] + ', ' + req.params.year })
	})
}

exports.postsByYear = function (req,res)
{
	console.log("Posts by month")	
	var search = req.params.year
	Post.getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: req.params.year })
	})
}


