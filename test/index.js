const feedback = {
    400: '请求参数错误',
    401: '登录已过期，请重新登录',
    403: '没有访问权限',
    404: '404 Not Found',
    500: '500 服务器异常',
    501: '501 服务器异常',
    502: '502 服务器异常',
    503: '503 服务器异常',
    504: '504 服务器异常'
}
console.log(feedback[400]);//请求参数错误
//集合变数组Array.of()
console.log(Array.of(1,2,3,4));//[ 1, 2, 3, 4 ]
console.log(Array.of('j','k','l'));
//key和value一样时，写一个
let name = '张三';
let age = 12;
// let obj = {
//     'name':name,
//     'age':age
// }
let obj = {
    name,
    age
}
console.log(obj);//{ name: '张三', age: 12 }
//多个对象合并一个对象
{
    let obj = {};
    let obj1 = {name:'张三'};
    let obj2 = {age:22};
    let obj3 = {sex:'男'};
    Object.assign(obj,obj1,obj2,obj3);
    console.log(obj);//{ name: '张三', age: 22, sex: '男' }
}
//字符串拆成数组
{
    let str = "加防腐剂啊快来发";
    let strArr = [...str];
    console.log(strArr);//[ '加', '防', '腐', '剂', '啊', '快', '来', '发' ]
}
//默认参数
{
    // function sum(a,b){
    //     a = a || 10;
    //     b = b || 5;
    //     console.log(a+b);
    // }
    function sum(a=10,b=5){
        console.log(a+b);
    }
    sum(4,2);//6
    sum();//15
}
//参数形式，延展操作符
{
    // function sum(){
    //     let result = 0;
    //     for(let value of arguments){
    //         result += value;
    //     }
    //     return result;
    // }
    // console.log(sum(10,10,20,30,3));//73
    // function sum(name,sex,...nums){
    //     console.log(name);
    //     console.log(sex);
    //     let result = 0;
    //     for(let value of nums){
    //         result += value;
    //     }
    //     return result;
    // }
    // console.log(sum('张三','男',10,10,20,30,3));
}
//箭头函数this指向
// {
//     function demo(){
//         setTimeout(function(){
//             console.log(this);//window
//         },1000)
//         setTimeout(()=>{
//             console.log(this);//obj
//         },1000)
//     }
//     let obj = {};
//     demo.call(obj);
// }
//三角形
{
    // for(var i=0; i<6; i++){
    //     for(var j=0; j<5-i; j++){
    //         console.log(' ');
    //     }
    //     for(var j=0; j<i; j++){
    //         console.log('*');
    //     }
    //     console.log();
    // }
}
//this
{
    // let num = 10;
    // let obj = {
    //     num:8,
    //     inner: {
    //         num: 6,
    //         print: function () {
    //             console.log("num: "+num+" , this.num: "+this.num);
    //         }
    //     }
    // }
    // num = 888;
    // obj.inner.print();//num: 888 , this.num: 6
    // var fn = obj.inner.print;
    // fn();//num: 888 , this.num: undefined 
    // (obj.inner.print)();//num: 888 , this.num: 6
}
{
    let arr = [
        {id:'01',name:'j'},
        {id:'02',name:'k'},
        {id:'03',name:'l'}
    ];
    let newArr = arr.map(e=>{//有返回值
        return e.id=='02';
    });
    console.log(newArr);

    let arr1 = [5,1,5,2,1,4,];
    arr1.forEach((e,i)=>{//没有返回值
        arr1[i] = e*10;
    })
    console.log(arr1);
}

// let f1 = {
//     ages: 14,
//     getAge: function(){
//         let ages = 57;
//         console.log(this.ages);
//     }
// };
// let ages = 45;
// let f2 = f1.getAge;
// f2();

// let iop = {
//     foo: function(){
//         console.log(this);
//     }
// }
// iop.foo();//iop

{
    let a = [4,5,3];
    let max1 = Math.max.apply(null,a);//5
    let max2 = Math.max.call(null,4,5,3);//5
}