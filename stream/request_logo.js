
var http = require('http');
var fs = require('fs');
var request = require('request')
http.createServer(function(req,res){
    // fs.readFile('../buffer/img/logo_new.png',function(err,data){
    //     if(err){
    //         throw err;
    //     }else{
    //         res.writeHeader(200,{'Content-Type':'text/html'});
    //         res.end(data)
    //     }
    // })



    // fs.createReadStream('../buffer/img/logo_new.png').pipe(res);
    request('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517910424684&di=50084654940c1afe44025318a8261d2c&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201703%2F04%2F8eb855769858098ba6fcd238be15b5a5.jpg').pipe(res)

}).listen(8082)
console.log('http://localhost:8082')