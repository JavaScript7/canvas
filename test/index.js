//集合变数组Array.of()
//console.log(Array.of(1,2,3,4));//[ 1, 2, 3, 4 ]
//console.log(Array.of('j','k','l'));
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
//console.log(obj);//{ name: '张三', age: 12 }
//多个对象合并一个对象
{
    let obj = {};
    let obj1 = {name:'张三'};
    let obj2 = {age:22};
    let obj3 = {sex:'男'};
    Object.assign(obj,obj1,obj2,obj3);
    //console.log(obj);//{ name: '张三', age: 22, sex: '男' }
}
//字符串拆成数组
{
    let str = "加防腐剂啊快来发";
    let strArr = [...str];
    //console.log(strArr);//[ '加', '防', '腐', '剂', '啊', '快', '来', '发' ]
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
    function sum(name,sex,...nums){
        console.log(name);
        console.log(sex);
        let result = 0;
        for(let value of nums){
            result += value;
        }
        return result;
    }
    console.log(sum('张三','男',10,10,20,30,3));
}
//箭头函数this指向
{
    function demo(){
        setTimeout(function(){
            //console.log(this);//window
        },1000)
        setTimeout(()=>{
            //console.log(this);//obj
        },1000)
    }
    let obj = {};
    demo.call(obj);
}
{
    let date = '2018-01-23T16';
    console.log(date.slice(0,10))
}
{
    let startDate = this.param.dateRange.length == 2 ? `&startDate=${convertDate(new Date(this.param.dateRange[0]).getTime())}` : '';
    let endDate = this.param.dateRange.length == 2 ? `&endDate=${convertDate(new Date(this.param.dateRange[1]).getTime())}` : '';
}