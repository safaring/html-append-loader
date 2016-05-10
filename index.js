var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
	this.cacheable();

	var options = loaderUtils.parseQuery(this.query);
	//var query = this.query.substring(1) + "\n"

	var position = options.position || 'body';
	var reg = (position != 'body' ? /([\s\S]+?)(<\/body>)/ : /([\s\S]+?)(<\/head>)/);
	source = source.replace(reg, '$1\n' + options.content + '\n$2');

	this.callback(null, source, map);
};