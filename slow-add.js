// function add(a,b){
//     var result = a + b;
//     return result;
// }

function slowAdd(a,b,callback){
    setTimeout(function() {
        console.log('timer finished!')
        var result = a + b;
        callback(result)
    }, 2000)
}
console.log('start');

slowAdd(13,4, function(theAnswer) {
    console.log(theAnswer);
})

console.log('end!');