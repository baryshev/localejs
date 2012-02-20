var
	locale = require('./../index');

/* Init */

locale.configure({ root : __dirname + '/locale' });

/* /Init */


/* Usage */

var localeRu = locale.get('ru');
var localeEn = locale.get('en');

console.log(localeRu.data.common.helloWorld);
console.log(localeRu.data.blog.addPost);
console.log(localeRu.plural(localeRu.data.blog.comments, 42));

console.log(localeEn.data.common.helloWorld);
console.log(localeEn.data.blog.addPost);
console.log(localeEn.plural(localeEn.data.blog.comments, 42));

/* /Usage */