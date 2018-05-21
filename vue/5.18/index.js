let data = "urqjrka";
let tr = data.length;
new function f1(){
    if(tr===0){
        console.log('空:');
        return
    }else if(tr>=7){
        console.log(tr);
        return
    }
    console.log('return终止函数执行');
}

function f2(){
    let a = 'jkl';
    (function f3(){
        console.log(a);
    })()
}
f2();

const datas = {
    'text':[
        {'name':'数据一','age':'12','address':'福州'},
        {'name':'数据二','age':'21','address':'闽侯'},
        {'name':'数据三','age':'54','address':'鼓楼'},
        {'name':'数据四','age':'75','address':'台江'},
        {'name':'数据五','age':'41','address':'仓山'}
    ]
}
console.log(datas);
console.log(JSON.stringify(datas));
