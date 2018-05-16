const log = console.log;
<<<<<<< HEAD
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
=======
// (function promiseTest(resolve,reject){
//     var t = Math.floor(Math.random()*3);
//     log(t);
//     setTimeout(function(){
//         if(t<1){
//             resolve('ok');
//         }else{
//             reject(t);
//         }
//     },t*1000);
// })()

function fn1(resolve,reject){
    setTimeout(function(){
        log('步骤一：执行');
        resolve('1');
    },500);
}
function fn2(resolve,reject){
    setTimeout(function(){
        log('步骤二：执行');
        resolve('2');
    },100);
}
let pro1 = new Promise(fn1).then(function(val){
    log(val);
    log('第一步执行完');
    return new Promise(fn2);
}).then(function(val){
    log('第二步执行完');
    return 33;
}).then(function(val){
    log(val);
})
/*步骤一：执行
1
第一步执行完
步骤二：执行
第二步执行完
33*/

let pro2 = new Promise(function(resolve,reject){
    log('promise1');
    resolve();
}).then(function(){//将在当前脚本所有同步任务执行完才会执行then
    log('promise2');
})
log('promise3');
/*promise1
promise3
promise2*/
>>>>>>> dev
