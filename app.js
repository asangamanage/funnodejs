var http = require('http');
var url = require('url');
var swig  = require('swig');

var server = http.createServer ( function (req, res){
	var urlParts = url.parse(req.url,true);
	var returnUrl = urlParts.query.returnUrl;
	body = swig.renderFile('./views/template.html', {
		    returnUrl: returnUrl
	});
	res.end(body);
});

server.listen(8080);
