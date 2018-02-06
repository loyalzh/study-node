var EventEmitter = require("events").EventEmitter;
var life = new EventEmitter();
life.on('give',function (person) {
    console.log('给'+person+'倒水')
});
life.on('give', function (person) {
    console.log('给' + person + '垂肩膀')
})
life.on('niai', function (person) {
    console.log('给' + person + '买衣服')
})
life.on('niai', function (person) {
    console.log('给' + person + '\(￣︶￣*\))')
})

var hasConforListener = life.emit('give','耗子');
var hasLovedListener = life.emit('niai', '哈哈')
var hasPlayListener = life.emit('play', '嘿嘿')

console.log(hasConforListener);
console.log(hasLovedListener);
console.log(hasPlayListener);