function learn(course){
    console.log(course)
}
function us(callback,course) {
    course+=' is Cool !!!'
    callback(course)
}
us(learn,'node.js');