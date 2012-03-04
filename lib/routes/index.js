var fs = require("fs")
	, Post = require("../post")
	, datetools = require('../datetools')
	, Wrap = require("../wrap")
	, sprintf = require("sprintf").sprintf

var postsPerPage = 10
/*
 * GET home page.
 */

exports.index = function(req, res) {
	Post.getPosts(null, postsPerPage, req.query["p"] || 1, function(posts) {
		res.render('index', { posts: posts })	
	})	
};

exports.post = function(req, res, data) 
{
	console.log("Getting single post")
	Post.getPostPath(req, data, function(path) {
		Post.getPostFromFile(path, function (err, post) {
			res.render('post', { Post: post })	
		})
	})
}

exports.postsByDay = function (req, res, data)
{
	console.log("Posts by day")
	var regex = sprintf('(^%(year)s-%(month)s-%(day)s)', data)
	Post.getPosts(regex, postsPerPage, req.query["p"] || 1, function (posts) {
		var date = new Date(data.year + "-" + data.month + "-" + data.day)
		res.render('search', 
			{ 
				posts: posts, 
				Search: datetools.Days[date.getDay()] + ', ' + datetools.Months[parseInt(data.month) - 1] + ' ' + data.day + ' ' + data.year 
			})
	})
}

exports.postsByMonth = function (req, res, data)
{
	console.log("Posts by month")
	var regex = sprintf('(^%(year)s-%(month)s)', data)
	Post.getPosts(regex, postsPerPage, req.query["p"] || 1, function(posts) {
		res.render('search', { posts: posts, Search: datetools.Months[parseInt(data.month) - 1] + ', ' + data.year })
	})
}

exports.postsByYear = function (req, res, data)
{
	console.log("Posts by month")	
	var regex = sprintf('(^%(year)s)', data)
	Post.getPosts(regex, postsPerPage, req.query["p"] || 1, function(posts) {
		res.render('search', { posts: posts, Search: data.year })
	})
}

