const Eventemitter=require('events');
class MyEmitter extends Eventemitter{};
let myEmitter=new MyEmitter();
myEmitter.on('eat',()=>{
	console.log('aaa');
})

	myEmitter.emit('eat');
