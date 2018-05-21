// this.a = 10;
// let f1 = {
//     a:20,
//     getA1:function(){
//         return this.a;
//     }
// }
// console.log(f1.getA1());//20
// let getA2 = f1.getA1.bind(this);
// console.log(getA2());//10

//构造函数
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = {
//     constructor: Person,
//     print(){
//         console.log('我叫'+this.name+',今年'+this.age+'岁');
//     }
// }
// let person1 = new Person('张三',16);
// console.log(person1);//Person { name: '张三', age: 16 }


//class函数
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log('我叫'+this.name+',今年'+this.age+'岁');
    }
}
let person1 = new Person('张三',16);
console.log(person1);
person1.print();