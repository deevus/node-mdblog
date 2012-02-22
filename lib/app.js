
/**
 * Module dependencies.
 */
var routes = 
{ 
	main: require('./routes'), 
	admin: require('./routes/admin')
}


var express = require('express')
  , auth = require('http-auth')
  
// auth instance
var basic = auth({
	authRealm: "Private area.",
	authFile: __dirname + '/users.htpasswd'
})

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/:year/:month?/:day?/:title?', function (req, res, next) {
	var year = parseInt(req.params.year)
	if (!year || year.toString().length < 4) return next()
	
	if (req.params.month != null && req.params.month.length == 1)
		req.params.month = '0' + req.params.month
	
	var day = parseInt(req.params.day)
	var month = parseInt(req.params.month)
	var title = req.params.title
	if (title && day && month && year) return routes.main.post(req,res)
	if (!title && day && month && year) return routes.main.postsByDay(req,res)
	if (!title && !day && month && year) return routes.main.postsByMonth(req,res)
	else routes.main.postsByYear(req,res)
});
app.get('/', routes.main.index);
app.get('/admin/posts/:action', function (req,res) {
	basic.apply(req,res, function(username) {
		routes.admin.newPost()
	})
})

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
