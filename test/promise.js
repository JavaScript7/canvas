const log = console.log;
(function promiseTest(resolve,reject){
    let t = Math.floor(Math.random()*3);
    log(t);
    setTimeout(function(){
        if(t<1){
            resolve('ok');
        }else{
            reject(t);
        }
    },t*1000);
})()

const promise = new Promise((resolve,reject) =>{
    let t = Math.floor(Math.random()*5);
    if(t>=1 && t<=5){
        resolve(value);
    }else{
        reject(error);
    }
})
promise();