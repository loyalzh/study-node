var fs = require('fs');
var source = fs.readFileSync('../buffer/img/logo_new.png');
fs.writeFileSync('stream_logo.png',source);
