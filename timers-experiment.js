console.log('This is the start');

setTimeout(function (){
    console.log('Hello');
}, 4000);

console.log('This is the middle');

setTimeout(function (){
    console.log('Goodbye!');
}, 2000);

setTimeout(setTimeout(function (){
    console.log('Goodbye!');
}, 2000), 2000)

console.log('This is the end');
