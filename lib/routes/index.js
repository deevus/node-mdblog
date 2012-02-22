var fs = require("fs")
var Post = require("../post")
var PostDir = "./posts/"
var exec = require('child_process').exec
var Lazy = require('lazy')
var datetools = require('../datetools')

/*
 * GET home page.
 */

exports.index = function(req, res) {
	getPosts('*.md', function(posts) {
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
	return PostDir + req.params.year + '-' + req.params.month + '-' + req.params.day + ' ' + req.params.title + '.md'
}

exports.postsByDay = function (req,res)
{
	console.log("Posts by day")
	var date = new Date(req.params.year + '-' + req.params.month + '-' + req.params.day)
	var search = req.params.year + '-' + req.params.month + '-' + req.params.day + '*.md'
	getPosts(search, function (posts) {
		res.render('search', { posts: posts, Search: datetools.Days[date.getDay()] + ', ' + datetools.Months[parseInt(req.params.month) - 1] + ' ' + req.params.day + ' ' + req.params.year })
	})
}

exports.postsByMonth = function (req,res)
{
	console.log("Posts by month")
	var search = req.params.year + '-' + req.params.month + '*.md'
	getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: datetools.Months[parseInt(req.params.month) - 1] + ', ' + req.params.year })
	})
}

exports.postsByYear = function (req,res)
{
	console.log("Posts by month")	
	var search = req.params.year + '*.md'
	getPosts(search, function(posts) {
		res.render('search', { posts: posts, Search: req.params.year })
	})
}

function getPosts(wildcardSearch, callback) {
	var posts = []
	console.log("Getting posts")
	exec('ls -t ./posts/' + wildcardSearch, function (error, stdout, stderr) {
		var files = stdout.trim().split('\n')
		console.log("Files: " + files)
		files.forEach(function(file, i) {
			
			var readPosts = function(index) {
				console.log("Index: " + index)
				Post.getPostFromFile(file, function(post) {
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