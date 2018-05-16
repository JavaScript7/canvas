const log = console.log;
(function promiseTest(resolve,reject){
    var t = Math.floor(Math.random()*3);
    log(t);
    setTimeout(function(){
        if(t<1){
            resolve('ok');
        }else{
            reject(t);
        }
    },t*1000);
})()