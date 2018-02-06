var fs = require('fs');
fs.readFile('./img/logo_new.png',function(err,data){
    console.log(Buffer.isBuffer(data));
    fs.writeFile('./img/logo_buffer.png',data,function(err){
        if(err){
            console.log(err)
        }
    })
    var base64Image = new Buffer(data).toString('base64');
    console.log(base64Image);
    var decodedImage = new Buffer(base64Image,'base64');
    console.log(Buffer.compare(data,decodedImage));
    fs.writeFile('./img/logo_decoded.png',decodedImage,function(err){
        if(err){
            console.log(err)
        }
    })
})