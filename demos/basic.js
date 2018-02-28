let execa = require('execa');

execa('node', ['script_test', '40','2']).then(function (data) {

    console.log('the answer is');
    console.log(data.stdout);

}).catch (function (e) {

    console.log(e);

});
