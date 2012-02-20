var
	path = require('path'),
	sprintf = require('sprintf').sprintf;

var
	options = {
		root : ''
	};

module.exports.configure = function(newOptions) {
	for (var option in options) {
		options[option] = newOptions[option] || options[option];
	}
};

module.exports.get = function(locale) {
	var localeHolder = {};
	localeHolder.data = require(path.normalize(options.root + '/' + locale + '/index'));
	localeHolder.plural = function(string, number) {
		switch (locale) {
			case 'ru' :
				var absNumber = Math.abs(number) % 100;
				var n1 = absNumber % 10;
				if (absNumber > 10 && absNumber < 20) return sprintf(string[2], number);
				if (n1 > 1 && n1 < 5) return sprintf(string[1], number);
				if (n1 == 1) return sprintf(string[0], number);
				return sprintf(string[2], number);
				break;
			case 'en' :
				if (Math.abs(number) == 1) return sprintf(string[0], number);
				return sprintf(string[1], number);
				break;
			default :
				if (Math.abs(number) == 1) return sprintf(string[0], number);
				return sprintf(string[1], number);
				break;
		}
	};
	return localeHolder;
};